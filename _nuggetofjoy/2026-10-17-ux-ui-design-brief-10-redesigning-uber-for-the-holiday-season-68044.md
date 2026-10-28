---
layout: teaching-post
title: 'UX/UI DESIGN BRIEF #10 - Redesigning Uber for the Holiday Season'
slug: ux-ui-design-brief-10-redesigning-uber-for-the-holiday-season
date: '2026-10-17'
modified: '2026-10-26'
status: published
wordpress_id: 68044
source_url: https://nuggetofjoy.com/ux-ui-design-brief-10-redesigning-uber-for-the-holiday-season/
author: admin
categories:
- Projects
tags: []
---

<div class="wp-block-group uber-ux-guide"><!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Redesigning Uber for the Holiday Season</h1>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>A visual guide to planning your user flow, building a UI/UX style guide, designing key screens in Figma Design, and using Figma Make to help complete an interactive prototype.</p>
<!-- /wp:paragraph -->
<!-- wp:image {"width":"219px","height":"auto","sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img alt="Uber logo" src="https://uxdesignmastery.com/wp-content/uploads/2024/07/Uber_logo.jpg" style="width:219px;height:auto"/></figure>
<!-- /wp:image -->
<!-- wp:heading -->
<h2 class="wp-block-heading">The Project</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>The holiday season can make getting around more challenging. People need to coordinate rides, navigate busy locations, and make decisions quickly.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Your challenge is to redesign a focused part of the Uber app to make a holiday ride experience easier to understand and use.</p>
<!-- /wp:paragraph -->
<!-- wp:html -->
</div>


<div class="uber-deliverables">
<div class="uber-deliverable"><span>01</span><h3>User Flow</h3><p>Map the steps a person takes to accomplish a specific task.</p></div>
<div class="uber-deliverable"><span>02</span><h3>UI/UX Style Guide</h3><p>Establish the visual rules for your interface.</p></div>
<div class="uber-deliverable"><span>03</span><h3>Interactive Prototype</h3><p>Build a clickable Figma prototype that demonstrates the redesigned experience.</p></div>
</div>


These deliverables work together. Your user flow establishes the experience, your style guide establishes its visual language, and your flat screen designs give Figma Make a clear visual reference. You will use both **Figma Design and Figma Make**—not Figma Make alone—to build the final prototype.


## 01 — Start With the User Flow


Before designing screens, determine what the user needs to accomplish. Choose a specific holiday-related transportation problem. Identify the starting point, the decisions a user must make, and the successful outcome.


<div class="uber-callout">
<h3>Your user flow should show</h3>
<ul>
<li>The starting point and the user's goal.</li>
<li>The sequence of actions and screens.</li>
<li>Decisions and alternative paths.</li>
<li>Relevant error, cancellation, or recovery paths.</li>
<li>The successful completion of the task.</li>
</ul>
</div>


**Remember:** A user flow maps the logic of the experience. It is not a collection of finished app screens.


**Deliverable:** Submit a clearly labeled user flow created in Figma or FigJam, accompanied by a brief explanation of your design decisions.


<div class="uber-flow-title">
<span>AMDE 477 | UI/UX DESIGN</span>
<strong>USER FLOW</strong>
<small>Plan the journey before you design the screens.</small>
</div>


<div class="uber-flow-guide-cards">
<div><b>01  START WITH THE GOAL</b><span>Who is the user? What are they trying to accomplish?</span></div>
<div><b>02  MAP THE HAPPY PATH</b><span>Show the simplest successful journey, then add branches.</span></div>
<div><b>03  ADD DECISIONS + ERRORS</b><span>Show where the experience can change, fail, or recover.</span></div>
</div>


<div class="uber-flow-legend">
<span><i class="legend-start"></i> Start / End</span>
<span><i class="legend-screen"></i> Screen</span>
<span><i class="legend-action"></i> User action</span>
<span><i class="legend-decision"></i> Decision</span>
<span><i class="legend-error"></i> Error / recovery</span>
</div>


<div class="uber-flow-diagram">
<div class="uber-flow-step flow-start"><b>START</b><strong>Open Uber</strong><small>User needs a ride to a holiday event</small></div>
<div class="uber-flow-connector"><span>→</span></div>
<div class="uber-flow-step"><b>SCREEN</b><strong>Enter destination</strong><small>Search for the event venue</small></div>
<div class="uber-flow-connector"><span>→</span></div>
<div class="uber-flow-step"><b>SCREEN</b><strong>Set pickup point</strong><small>Choose a clear, accessible meeting spot</small></div>
<div class="uber-flow-connector"><span>→</span></div>
<div class="uber-flow-step flow-decision"><b>DECISION</b><strong>Is pickup clear?</strong><small>Can the driver find the user?</small></div>
<div class="uber-flow-branches">
<div class="uber-flow-branch flow-yes"><b>YES</b><span>Review ride options and arrival time</span></div>
<div class="uber-flow-branch flow-no"><b>NO · ALTERNATE PATH</b><span>Select a nearby landmark, then review pickup again</span></div>
</div>
<div class="uber-flow-step flow-error"><b>ERROR / RECOVERY</b><strong>Pickup needs adjustment</strong><small>Update the location and return to pickup review</small></div>
<div class="uber-flow-connector"><span>↓</span></div>
<div class="uber-flow-step flow-action"><b>USER ACTION</b><strong>Confirm ride</strong><small>Review fare, pickup details, and arrival estimate</small></div>
<div class="uber-flow-connector"><span>↓</span></div>
<div class="uber-flow-step flow-end"><b>END</b><strong>Ride confirmed</strong><small>User knows where to wait and what happens next</small></div>
</div>


This example follows the structure of the AMDE 477 FigJam User Flow Template: a clear title, numbered planning prompts, a flow legend, labeled screens/actions, and decision, alternate, and recovery paths. Use the same visual language when you duplicate the template and adapt the flow to your own holiday transportation problem.


[Review: The Project Process in Figma/FigJam](https://nuggetofjoy.com/the-project-process-in-figma-figjam/)


## 02 — Build Your UI/UX Style Guide


A style guide helps you make consistent design decisions before you build the final screens. It prevents you from choosing colors, type sizes, and button styles independently on every screen.


[Open the Figma UI/UX Style Guide Template →](https://www.figma.com/design/pMDnezhhqour9AwJLK3G0Y)


**Use the actual course template shown below.** These screenshots are from the Student UI/UX Style Guide template used in class. Duplicate the Figma file, then complete these same sections for your Uber holiday-ride redesign. The examples farther down this page are supplementary demonstrations, not replacement templates.


![Actual Student UI/UX Style Guide template in Figma showing the Visual Research and Moodboard section](https://github.com/ndangelo/amde-course-assets/blob/main/moodboard.png?raw=true)

**Actual course template — Visual Research & Moodboard.** Add visual references and explain the direction they suggest for your Uber redesign.

![Actual Student UI/UX Style Guide template showing color palette and contrast](https://github.com/ndangelo/amde-course-assets/blob/main/color-contrast.png?raw=true)

**Actual course template — Color & Contrast.** Define color roles and check that text, controls, and error states remain easy to distinguish.

![Actual Student UI/UX Style Guide template showing typography hierarchy and spacing](https://github.com/ndangelo/amde-course-assets/blob/main/typography.png?raw=true)

**Actual course template — Typography & Spacing.** Document the type hierarchy and spacing rules you will use consistently across your screens.

![Actual Student UI/UX Style Guide template showing reusable interface components](https://github.com/ndangelo/amde-course-assets/blob/main/components.png?raw=true)

**Actual course template — Components.** Document reusable buttons, fields, cards, navigation, and relevant interaction states.


### Start with visual research


Collect three visual references that help establish your design direction. These might include mobile interfaces, typography, color palettes, maps, transportation apps, or other relevant visual material. Add a short note explaining what you want to learn from each reference.


![Actual Figma UI/UX Style Guide template showing Foundations: project purpose, intended user, primary task, and visual direction](https://github.com/ndangelo/amde-course-assets/blob/main/moodboard.png?raw=true)

**Actual course template — Foundations.** Define the product, user, primary task, and visual direction before designing screens.


### Foundations


Define the product's purpose, intended user, primary task, and visual direction. Your decisions should support the user flow you created.


![Actual Figma Student UI/UX Style Guide section: foundations](https://github.com/ndangelo/amde-course-assets/blob/main/foundations.png?raw=true)

**Actual course template — Foundations.** Use this section to establish the project before designing screens.


### Color and contrast


Establish a small, purposeful color system. Identify the role of each color, including primary actions, backgrounds, text, and error states. Check that text and interface elements remain readable. Color should communicate meaning clearly rather than serve only as decoration.


![Actual Figma Student UI/UX Style Guide section: color](https://github.com/ndangelo/amde-course-assets/blob/main/color-contrast.png?raw=true)

**Actual course template — Color.** Apply the color roles to your own redesign and check contrast.


### Typography and spacing


Create a consistent type hierarchy for headings, body text, and captions. Establish spacing values for padding inside elements and gaps between elements.


![Actual Figma Student UI/UX Style Guide section: type](https://github.com/ndangelo/amde-course-assets/blob/main/typography-spacing.png?raw=true)

**Actual course template — Typography & Spacing.** Use these type and spacing rules consistently across the interface.


For example, you might use 16 px inside a card and 24 px between cards. The important thing is to apply your choices consistently.


### Components


Define reusable interface elements, such as buttons, input fields, cards, and navigation. Components should look and behave consistently throughout the app.


![Actual Figma Student UI/UX Style Guide section: components](https://github.com/ndangelo/amde-course-assets/blob/main/components.png?raw=true)

**Actual course template — Components.** Adapt these reusable elements to your product and document their behavior.


### Interaction states and accessibility


Consider what happens when a user interacts with an element. Depending on the component, relevant states may include default, hover, focus, pressed, disabled, error, or success.


![Actual Figma Student UI/UX Style Guide section: states](https://github.com/ndangelo/amde-course-assets/blob/main/states.png?raw=true)

**Actual course template — States.** Document how interactive elements respond to different states.


Check contrast, text readability, visible focus indicators, clear labels, and whether meaning depends on color alone.


**Deliverable:** Complete the relevant sections of the Figma style guide and keep it available while designing your prototype.


![Actual Figma Student UI/UX Style Guide section: Accessibility](https://github.com/ndangelo/amde-course-assets/blob/main/accessibility.png?raw=true)

**Actual course template — Accessibility.** Check contrast, readable type, visible focus, clear labels, and distinct feedback.


## 03 — Design Key Screens in Figma Design First


**Do this before opening Figma Make.** Figma Make works best when you provide a clear visual direction and concrete screen designs. First, use Figma Design to create a small set of key flat designs (static screens) that show what the product should look like. These are the visual references that will help guide the prototype Make builds.


You do not need to design every possible screen in advance. Start with the most important screens in your user flow—for example, the starting screen, the main task screen, a decision or details screen, and a confirmation or result screen.


<div class="uber-callout">
<h3>Your key flat designs should establish</h3>
<ul>
<li>The main layout and content hierarchy on each screen.</li>
<li>Navigation, buttons, forms, cards, and other important interface elements.</li>
<li>The colors, type styles, spacing, and components from your UI/UX Style Guide.</li>
<li>Realistic interface copy and the information users need to complete the task.</li>
<li>A consistent visual system across all of the screens.</li>
</ul>
</div>


<div class="uber-example-heading"><span>FLAT DESIGN EXAMPLES</span><strong>Finished static screens in Figma Design</strong><small>These are visual references—not wireframes or clickable prototypes.</small></div>


<div class="uber-screen-grid">
<div class="uber-screen-card"><div class="uber-phone"><div class="uber-phone-status"><span>9:41</span><span>● ● ●</span></div><div class="uber-screen-top"><span class="uber-seasonal-kicker">HOLIDAY TRAVEL</span><b>Good evening</b><span>Where to?</span></div><div class="uber-search"><span class="uber-search-dot"></span> Search destination <span class="uber-search-arrow">↗</span></div><div class="uber-map"><span class="uber-map-road road-one"></span><span class="uber-map-road road-two"></span><span class="uber-map-pin">●</span><span class="uber-map-label">Holiday Market</span></div><div class="uber-screen-button">Choose destination</div><div class="uber-phone-nav"><span>⌂<small>Home</small></span><span>▤<small>Activity</small></span><span>◉<small>Account</small></span></div></div><p><strong>Screen 1: Destination</strong><br/>Clear entry point and a visible primary action.</p></div>
<div class="uber-screen-card"><div class="uber-phone"><div class="uber-phone-status"><span>9:41</span><span>● ● ●</span></div><div class="uber-screen-top"><b>Confirm pickup</b><span>Make your pickup easy to find</span></div><div class="uber-map uber-map-pickup"><span class="uber-map-road road-one"></span><span class="uber-map-road road-two"></span><span class="uber-map-pin">●</span><span class="uber-map-label">Main Street entrance</span></div><div class="uber-pickup-tag">✦   Easy-to-find pickup</div><div class="uber-info-card"><b>Pickup location</b><span>120 Main Street</span><small>By the illuminated entrance</small></div><div class="uber-screen-button">Confirm pickup</div><div class="uber-screen-link">Edit location</div></div><p><strong>Screen 2: Pickup details</strong><br/>Specific location cues reduce confusion in a crowd.</p></div>
<div class="uber-screen-card"><div class="uber-phone"><div class="uber-phone-status"><span>9:41</span><span>● ● ●</span></div><div class="uber-screen-top"><span class="uber-seasonal-kicker">YOUR RIDE</span><b>Choose your ride</b><span>Pickup in about 4 min · Arrive by 7:20 PM</span></div><div class="uber-ride-option uber-selected"><span class="uber-car">▰</span><span><b>UberX</b><small>4 seats · Everyday ride</small></span><strong>$18.40</strong></div><div class="uber-ride-option"><span class="uber-car">▰</span><span><b>Comfort</b><small>4 seats · Extra comfort</small></span><strong>$24.10</strong></div><div class="uber-ride-option"><span class="uber-car">▰</span><span><b>XL</b><small>6 seats · More room</small></span><strong>$31.20</strong></div><div class="uber-screen-button">Confirm UberX</div></div><p><strong>Screen 3: Ride options</strong><br/>Compare choices, arrival times, and prices.</p></div>
<div class="uber-screen-card"><div class="uber-phone"><div class="uber-phone-status"><span>9:41</span><span>● ● ●</span></div><div class="uber-confirm-icon">✓</div><div class="uber-confirm-kicker">YOU’RE ALL SET</div><div class="uber-screen-top uber-center"><b>Your ride is confirmed</b><span>Your driver is on the way</span></div><div class="uber-driver-card"><div class="uber-avatar">JD</div><span><b>Jordan D.</b><small>White Toyota Camry · 4XYZ218</small><small>Arriving in 4 minutes</small></span><b>4.98 ★</b></div><div class="uber-info-card"><b>Pickup</b><span>120 Main Street</span><small>Wait by the illuminated entrance</small></div><div class="uber-screen-button">View ride details</div><div class="uber-screen-link">Share trip status</div></div><p><strong>Screen 4: Confirmation</strong><br/>Reassure the user and make next steps clear.</p></div>
</div>


Example direction for a consistent set of finished, flat app screens. Treat these as inspiration for layout and hierarchy; create your own designs and adapt them to the visual system in your UI/UX Style Guide.


**Deliverable:** Create your key flat screen designs in Figma Design. Keep the frames organized and clearly named so you can refer to them while working in Figma Make.


## 04 — Use Figma Make to Complete the Prototype


After you have designed your key screens, use Figma Make to help turn the designs and your written instructions into a working prototype. Treat Make as a collaborator, not as a substitute for your design decisions. Provide your goal, describe the user flow, refer to your flat designs, and explain which interactions should work.


<div class="uber-deliverables uber-make-steps">
<div class="uber-deliverable"><span>01</span><h3>Prepare</h3><p>Finish the user flow, style guide, and key flat designs in Figma Design.</p></div>
<div class="uber-deliverable"><span>02</span><h3>Prompt</h3><p>Describe the purpose, users, screens, visual rules, and expected interactions in Figma Make.</p></div>
<div class="uber-deliverable"><span>03</span><h3>Refine</h3><p>Compare Make’s result with your designs. Correct visual inconsistencies and test the main journey.</p></div>
</div>


<div class="uber-callout"><strong>Workflow:</strong> User flow → UI/UX Style Guide → finished flat screens in Figma Design → interactive prototype in Figma Make.</div>


**Important:** Do not begin with a vague prompt and expect Figma Make to invent the entire design system. Your key screens and style guide should give it a clear visual target.


## 05 — Connect and Test the Interactive Prototype


<div class="uber-video-resource">
<h3>Watch: Intro to Figma Make</h3>
<p>This official Figma tutorial demonstrates how to turn an existing Figma design into an interactive prototype. It covers prompting, navigating the editor, refining results, and sharing your work.</p>
<div class="uber-video-embed">
MADTINKERBLOCKTOKEN0END
</div>
<p><a href="https://www.youtube.com/watch?v=9Y2Yz-ir3JM" rel="noopener noreferrer" target="_blank">Watch directly on YouTube →</a></p>
<p><strong>As you watch:</strong> Notice how the prompt describes the intended product and how the design is refined after the first result. Complete your key flat screen designs and style guide in Figma Design first, then use them to guide Figma Make. Do not rely on a single vague prompt to determine the entire visual design.</p>
</div>


Use your user flow and style guide to build the redesigned experience. Your prototype should demonstrate the complete journey needed to accomplish your chosen task, with enough screens to make the experience understandable from beginning to end.


<div class="uber-two-column">
<div>
<h3>Your prototype should include</h3>
<ul>
<li>Screens that follow your user flow.</li>
<li>Consistent colors, typography, spacing, and components.</li>
<li>Clickable buttons and navigation where appropriate.</li>
<li>Clear feedback when the user takes an action.</li>
<li>Relevant confirmation, error, or recovery states.</li>
<li>Realistic interface text and content.</li>
</ul>
</div>
<figure>
<img alt="Usability testing illustration" loading="lazy" src="https://uxdesignmastery.com/wp-content/uploads/2023/05/testing-1024x415.png">
<figcaption>Test your prototype with people, observe where they hesitate, and improve the design.</figcaption>
</img></figure>
</div>


Your prototype does not need to reproduce every feature of Uber. Focus on making your chosen user journey work well. Check that the key screens from Figma Design are reflected in the Make prototype and that the main interactions are clear and usable.


**Deliverable:** Submit your Figma Design file containing the user flow, UI/UX Style Guide, and key flat screen designs, plus a shareable link to your Figma Make interactive prototype. Make sure the prototype starts at the correct screen and that its main interactions work.


**Student examples:** Review the examples provided in D2L, including the prototype created with Figma Make.


![Actual Figma UI/UX Style Guide template showing interaction states: default, hover, focus, pressed, disabled, and error](https://www.figma.com/api/mcp/asset/e95b4662-5403-4563-a3dd-3ad472b300f7.png)

**Actual course template — States.** Show how interactive elements change across default, hover, focus, pressed, disabled, and error states.

![Actual Figma UI/UX Style Guide template accessibility checklist](https://www.figma.com/api/mcp/asset/6efc91f7-9a9f-4de0-80c3-20521f419f83.png)

**Actual course template — Accessibility.** Check contrast, visible focus, clear labels, readable type, and distinct feedback states.


## Design Principles to Remember


<div class="uber-principle-grid">
<div><h3>Reduce cognitive load</h3><p>Keep each screen focused on the information and actions the user needs at that moment.</p></div>
<div><h3>Make actions clear</h3><p>Users should understand what a button does before they select it.</p></div>
<div><h3>Provide feedback</h3><p>Confirm important actions and help users understand what is happening.</p></div>
<div><h3>Be consistent</h3><p>Reuse established patterns instead of making users learn a new interaction on every screen.</p></div>
<div><h3>Design for accessibility</h3><p>Readable text, sufficient contrast, clear labels, and predictable interactions benefit everyone.</p></div>
</div>


For additional guidance, review [UX Laws](https://nuggetofjoy.com/ux-laws/) and [The Project Process in Figma/FigJam](https://nuggetofjoy.com/the-project-process-in-figma-figjam/).


## Before You Submit


- My user flow communicates a clear task and successful outcome.

- My style guide documents the visual system used in my design.

- I created the key flat designs in Figma Design before using Figma Make.

- My Figma Make prototype follows the user flow and references my flat designs.

- My interface uses consistent components and spacing.

- My primary interactions work.

- My screens provide clear feedback and readable content.

- My Figma file and prototype link are accessible to the instructor.


**The goal is not simply to make an attractive interface. It is to design an experience that helps someone accomplish a real task clearly, efficiently, and confidently.**
