// tina/config.{ts,js,tsx}
import { defineConfig } from 'tinacms'

export default defineConfig({
  // ...
  schema: {
    collections: [
      {
        label: 'Blog Posts',
        name: 'post',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Post Body',
            name: 'body',
            isBody: true,
          },
        ],
      },
    ],
  },
})