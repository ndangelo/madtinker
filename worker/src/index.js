const encoder = new TextEncoder();
let cachedCerts = null;
let certsExpiresAt = 0;

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": origin === env.ALLOWED_ORIGIN ? origin : "null",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin"
    };
    if (request.method === "OPTIONS") {
      if (origin !== env.ALLOWED_ORIGIN) return new Response("Origin not allowed", { status: 403 });
      return new Response(null, { status: 204, headers: cors });
    }

    try {
      if (!env.ALLOWED_ORIGIN || origin !== env.ALLOWED_ORIGIN) {
        return json({ error: "Origin not allowed" }, 403, cors);
      }
      const url = new URL(request.url);
      if (url.pathname === "/api/health" && request.method === "GET") {
        await requireAccess(request, env);
        return json({ ok: true, service: "studio-cms-api" }, 200, cors);
      }

      await requireAccess(request, env);
      if (url.pathname === "/api/posts" && request.method === "GET") {
        const requestedPath = url.searchParams.get("path");
        if (requestedPath) {
          const path = validatePostPath(requestedPath);
          const file = await githubRequest(env, "GET", repoContentsPath(env, path));
          const content = new TextDecoder().decode(base64ToBytes(String(file.content || "").replace(/\n/g, "")));
          return json({ name: file.name, path: file.path, sha: file.sha, content, url: file.html_url }, 200, cors);
        }
        const files = await githubRequest(env, "GET", repoContentsPath(env, "_posts"));
        const posts = (Array.isArray(files) ? files : [])
          .filter(file => file.type === "file" && /^\d{4}-\d{2}-\d{2}-.+\.md$/i.test(file.name))
          .map(file => ({ name: file.name, path: file.path, sha: file.sha, size: file.size, url: file.html_url }));
        return json({ posts }, 200, cors);
      }

      if (url.pathname === "/api/posts" && request.method === "POST") {
        const body = await readJson(request, 1100000);
        const path = validatePostPath(body.path);
        if (typeof body.content !== "string" || body.content.length > 1000000) {
          return json({ error: "Post content must be text under 1 MB." }, 413, cors);
        }
        if (!body.content.startsWith("---\n") || !body.content.includes("\n---")) {
          return json({ error: "Post content needs YAML front matter." }, 400, cors);
        }
        const payload = { message: "CMS: save post " + path.split("/").pop(), content: bytesToBase64(encoder.encode(body.content)) };
        if (body.sha) payload.sha = body.sha;
        const result = await githubRequest(env, "PUT", repoContentsPath(env, path), payload);
        return json({ ok: true, path, sha: result.content?.sha, commit: result.commit?.html_url }, 200, cors);
      }

      if (url.pathname === "/api/posts" && request.method === "DELETE") {
        const path = validatePostPath(url.searchParams.get("path") || "");
        const sha = url.searchParams.get("sha") || "";
        if (!/^[a-f0-9]{40}$/i.test(sha)) return json({ error: "A valid current file SHA is required." }, 400, cors);
        const result = await githubRequest(env, "DELETE", repoContentsPath(env, path), {
          message: "CMS: delete post " + path.split("/").pop(),
          sha
        });
        return json({ ok: true, commit: result.commit?.html_url }, 200, cors);
      }

      if (url.pathname === "/api/media" && request.method === "GET") {
        const folder = validateMediaFolder(url.searchParams.get("folder") || "assets/images");
        const files = await githubRequest(env, "GET", repoContentsPath(env, folder));
        const items = (Array.isArray(files) ? files : []).map(item => ({
          name: item.name, path: item.path, sha: item.sha, size: item.size, type: item.type, url: item.download_url
        }));
        return json({ items }, 200, cors);
      }

      if (url.pathname === "/api/media" && request.method === "POST") {
        const body = await readJson(request, 12000000);
        const path = validateMediaPath(body.path);
        if (typeof body.contentBase64 !== "string" || body.contentBase64.length > 11000000) {
          return json({ error: "Image payload is missing or too large (maximum 8 MB)." }, 413, cors);
        }
        if (body.sha && !/^[a-f0-9]{40}$/i.test(body.sha)) return json({ error: "Invalid file SHA." }, 400, cors);
        const payload = { message: "CMS: upload media " + path.split("/").pop(), content: body.contentBase64 };
        if (body.sha) payload.sha = body.sha;
        const result = await githubRequest(env, "PUT", repoContentsPath(env, path), payload);
        return json({ ok: true, path, sha: result.content?.sha, url: result.content?.download_url, commit: result.commit?.html_url }, 200, cors);
      }

      return json({ error: "Not found" }, 404, cors);
    } catch (error) {
      const status = error.status || 500;
      return json({ error: status >= 500 ? "The publishing service encountered an error." : error.message }, status, cors);
    }
  }
};

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...headers }
  });
}

async function readJson(request, maxBytes) {
  const text = await request.text();
  if (encoder.encode(text).byteLength > maxBytes) {
    const error = new Error("Request body is too large."); error.status = 413; throw error;
  }
  try { return JSON.parse(text); }
  catch { const error = new Error("Invalid JSON request body."); error.status = 400; throw error; }
}

function validatePostPath(path) {
  if (typeof path !== "string" || !/^_posts\/\d{4}-\d{2}-\d{2}-[a-z0-9][a-z0-9-]{0,100}\.md$/i.test(path) || path.includes("..")) {
    const error = new Error("Post path must use _posts/YYYY-MM-DD-short-title.md."); error.status = 400; throw error;
  }
  return path;
}

function validateMediaFolder(folder) {
  if (typeof folder !== "string" || !/^assets\/images(?:\/[a-zA-Z0-9_-]+)*$/.test(folder) || folder.includes("..")) {
    const error = new Error("Media folder must be inside assets/images."); error.status = 400; throw error;
  }
  return folder;
}

function validateMediaPath(path) {
  if (typeof path !== "string" || !/^assets\/images\/[a-zA-Z0-9_./-]+\.(?:png|jpe?g|gif|webp|svg|avif)$/i.test(path) || path.includes("..")) {
    const error = new Error("Only image files inside assets/images are allowed."); error.status = 400; throw error;
  }
  return path;
}

function repoContentsPath(env, path) {
  const [owner, repo] = (env.GITHUB_REPOSITORY || "").split("/");
  if (!owner || !repo || !/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repo)) {
    const error = new Error("GitHub repository configuration is invalid."); error.status = 500; throw error;
  }
  return "https://api.github.com/repos/" + owner + "/" + repo + "/contents/" + path.split("/").map(encodeURIComponent).join("/") ;
}

async function githubRequest(env, method, path, body) {
  const token = await installationToken(env);
  const response = await fetch(path, {
    method,
    headers: {
      "Authorization": "Bearer " + token,
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "Studio-CMS",
      ...(body ? { "Content-Type": "application/json" } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!response.ok) {
    const error = new Error("GitHub API request failed with status " + response.status);
    error.status = response.status === 404 ? 404 : response.status === 409 || response.status === 422 ? 409 : 502;
    throw error;
  }
  return response.status === 204 ? {} : response.json();
}


async function installationToken(env) {
  const appId = env.GITHUB_APP_ID;
  const installationId = env.GITHUB_INSTALLATION_ID;
  if (!appId || !installationId || !env.GITHUB_APP_PRIVATE_KEY) {
    const error = new Error("GitHub App secrets are not configured."); error.status = 503; throw error;
  }
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(encoder.encode(JSON.stringify({ alg: "RS256", typ: "JWT" })));
  const payload = base64url(encoder.encode(JSON.stringify({ iat: now - 30, exp: now + 540, iss: appId })));
  const unsigned = header + "." + payload;
  const isPkcs1 = env.GITHUB_APP_PRIVATE_KEY.includes("BEGIN RSA PRIVATE KEY");
  const keyText = env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/-----BEGIN (?:RSA )?PRIVATE KEY-----|-----END (?:RSA )?PRIVATE KEY-----|\s/g, "");
  let keyDer = base64ToBytes(keyText);
  if (isPkcs1) keyDer = wrapPkcs1InPkcs8(keyDer);
  const key = await crypto.subtle.importKey("pkcs8", keyDer, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const signature = new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, encoder.encode(unsigned)));
  const appJwt = unsigned + "." + base64url(signature);
  const response = await fetch("https://api.github.com/app/installations/" + encodeURIComponent(installationId) + "/access_tokens", {
    method: "POST",
    headers: { "Authorization": "Bearer " + appJwt, "Accept": "application/vnd.github+json", "Content-Type": "application/json", "X-GitHub-Api-Version": "2022-11-28", "User-Agent": "Studio-CMS" },
    body: JSON.stringify({ repositories: [(env.GITHUB_REPOSITORY || "").split("/")[1]], permissions: { contents: "write", metadata: "read" } })
  });
  if (!response.ok) { const error = new Error("Could not obtain a GitHub installation token."); error.status = 502; throw error; }
  const data = await response.json();
  return data.token;
}

async function requireAccess(request, env) {
  const assertion = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!assertion || !env.CF_ACCESS_TEAM_DOMAIN || !env.CF_ACCESS_AUD) {
    const error = new Error("Sign in through the protected CMS domain."); error.status = 401; throw error;
  }
  const parts = assertion.split(".");
  if (parts.length !== 3) { const error = new Error("Invalid access assertion."); error.status = 401; throw error; }
  const decode = value => JSON.parse(new TextDecoder().decode(base64ToBytes(value.replace(/-/g, "+").replace(/_/g, "/"))));
  let header, payload;
  try { header = decode(parts[0]); payload = decode(parts[1]); } catch { const error = new Error("Invalid access assertion."); error.status = 401; throw error; }
  const issuer = "https://" + env.CF_ACCESS_TEAM_DOMAIN + ".cloudflareaccess.com";
  if (header.alg !== "RS256" || payload.iss !== issuer || !Array.isArray(payload.aud) || !payload.aud.includes(env.CF_ACCESS_AUD) || !payload.exp || payload.exp < Math.floor(Date.now()/1000) || (payload.nbf && payload.nbf > Math.floor(Date.now()/1000))) {
    const error = new Error("Access assertion failed validation."); error.status = 401; throw error;
  }
  const keys = await getAccessKeys(env);
  const jwk = keys.find(key => key.kid === header.kid);
  if (!jwk) { const error = new Error("Access signing key not recognized."); error.status = 401; throw error; }
  const publicKey = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", publicKey, base64ToBytes(parts[2].replace(/-/g, "+").replace(/_/g, "/")), encoder.encode(parts[0] + "." + parts[1]));
  if (!valid) { const error = new Error("Access signature invalid."); error.status = 401; throw error; }
}

async function getAccessKeys(env) {
  if (cachedCerts && Date.now() < certsExpiresAt) return cachedCerts;
  const response = await fetch("https://" + env.CF_ACCESS_TEAM_DOMAIN + ".cloudflareaccess.com/cdn-cgi/access/certs");
  if (!response.ok) throw new Error("Could not load Cloudflare Access signing keys.");
  const data = await response.json();
  cachedCerts = data.jwks?.keys || data.keys || [];
  certsExpiresAt = Date.now() + 300000;
  return cachedCerts;
}


function derLength(length) {
  if (length < 128) return Uint8Array.of(length);
  const bytes = [];
  let value = length;
  while (value > 0) { bytes.unshift(value & 255); value >>>= 8; }
  return Uint8Array.of(128 | bytes.length, ...bytes);
}
function wrapPkcs1InPkcs8(pkcs1) {
  const algorithm = Uint8Array.from([0x30,0x0d,0x06,0x09,0x2a,0x86,0x48,0x86,0xf7,0x0d,0x01,0x01,0x01,0x05,0x00]);
  const version = Uint8Array.from([0x02,0x01,0x00]);
  const octetHeader = Uint8Array.from([0x04, ...derLength(pkcs1.length)]);
  const octet = new Uint8Array(octetHeader.length + pkcs1.length);
  octet.set(octetHeader, 0); octet.set(pkcs1, octetHeader.length);
  const body = new Uint8Array(version.length + algorithm.length + octet.length);
  body.set(version, 0); body.set(algorithm, version.length); body.set(octet, version.length + algorithm.length);
  const sequenceHeader = Uint8Array.from([0x30, ...derLength(body.length)]);
  const result = new Uint8Array(sequenceHeader.length + body.length);
  result.set(sequenceHeader, 0); result.set(body, sequenceHeader.length);
  return result;
}
function base64url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function base64ToBytes(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - normalized.length % 4) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}
function bytesToBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
