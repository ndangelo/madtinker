---
layout: post
title: Designing Games with Figma
slug: designing-games-with-figma
date: '2025-11-12'
modified: '2025-11-12'
status: published
wordpress_id: 67581
source_url: https://nuggetofjoy.com/designing-games-with-figma/
author: admin
categories:
- Projects
tags: []
---

![](https://miro.medium.com/v2/resize:fit:1050/1*8qKUinqPUvSX2_p535zlKg.png)

The main screens of the game Grift.


# Designing Games with Figma


## Today I’m going to talk about how I use Figma to design games. The same tool that product designers use for apps and websites. It’s not what most people think of when they think “game dev,” but it’s been one of my favorite tools for making games, especially 2D ones.


## So, Why Figma?


![](https://miro.medium.com/v2/resize:fit:1050/1*3S26yEvjIBBZnOtj38HtLA.png)

Each step of the design process where I use Figma.


Some people are surprised when I say I use Figma to make games. But many game companies use Figma, and I’ve used Figma at a variety of companies for a variety of steps in the design process. Figma is super fast, collaborative, and visual. When I was making *Grift*, I used it for almost everything: UI mockups, character builder pieces, charts, layouts, you name it. It lets me map out systems, ideas, and even prototype before I ever touch Unity.


*Grift*, by the way, is a satirical mobile game where you design a scammer bot and trick people on fake social media. You customize your bot to be extra convincing, chat with targets, earn money, and use that cash to upgrade your look and scam strategies. It’s tongue-in-cheek, weird, and made for mobile. There are over 15,000 downloads for *Grift*since we released it in 2024.


![](https://miro.medium.com/v2/resize:fit:1050/1*bIoDgp92JBv4GEr65kuVng.png)


Even though the game was built in Unity, Figma helped us figure out how everything fit together, and made it easier to work with artists and other collaborators that we hired onto the project.


For *Grift: Scam Tycoon*, I used Figma pretty much every day during development. Here’s how:


## Style Guides


A big part of how I use Figma is for creating style guides and references, which are visual systems and rules for how the game should look and feel. Especially when you’re working with other people (or future you), a style guide is your best friend. It keeps everything consistent without having to reinvent the wheel every time you make a new screen.


## Get Alexia Mandeville’s stories in your inbox


Join Medium for free to get updates from this writer.Subscribe


For *Grift*, I put together a few key style guide pages inside my Figma file:


![](https://miro.medium.com/v2/resize:fit:1050/1*i79p5GsHtVnpRrG-wdwY6A.png)


## Color Palette


Because *Grift* is a satirical scam game, I leaned into a playful but slightly moody palette with a dark academia vibe, and dark comic renderings. I had swatches for primary buttons, backgrounds, hover states, and alert colors. I pulled lots of references from games for iconography, rendering, and color palettes in order to skew toward this moody vibe.


## Visual Systems


I built a UI style guide directly into Figma so I wasn’t reinventing the wheel every time. For example:


- **Primary buttons**: green
- **Secondary buttons**: muted gray or purple
- **Focused items or UI to draw attention to:**bright yellow


![](https://miro.medium.com/v2/resize:fit:1050/1*oEthkbpjYZ8clOE_ZKIoXA.png)

Colors meant for the interactive bits of UI in Grift.


Using these color cues across the UI helped reinforce meaning and patterns. Players could quickly understand what was interactive and what was meant to be focused on at a glance.


## Characters and Accessories


One of the core features in *Grift* is designing your scammer bot using accessories and facial features. Think of it like a simplified paper doll maker. I used Figma to lay out how the avatar builder would work, from facial expressions and skin tones to hats, shirts, glasses, and random flair.


![](https://miro.medium.com/v2/resize:fit:1050/1*10T9KXMKK9bnb4mvAmiHoA.png)


We built everything in layers, where each feature was a swappable part. That made it super easy to test how different combinations would look and to make sure the UI supported all the mix-and-match possibilities. Ultimately we built a tool to test out all the created characters and combinations in Unity so we could QA them, but testing the compatibility in Figma was a first step.


When we brought on a character artist, this prep work in Figma helped her take off immediately. I already had the visual style mapped out, including the look and feel of how we wanted the characters to look with references, along with a rough system for how items would slot together. I was able to hand her a style guide, sample mockups, and a list of asset needs right away. It wasn’t just “make a bunch of hats”; it was “here’s the color palette, the line weight, how we layer these, and how they scale on different face types.”


![](https://miro.medium.com/v2/resize:fit:1050/1*8E1IpFtzwPp5Tau7yRhyXA.png)

References for our character artist.


It helped us stay modular and consistent. But more importantly, it helped the artist jump in without guessing. They were able to design assets that felt like they belonged to the same moody, scammy world we were building.


### Asset Formatting


Part of a good art workflow is making sure assets are properly formatted. I painted all my icons in Procreate, and then formatted them all in Figma so they were all the same size and file format.


![](https://miro.medium.com/v2/resize:fit:1050/1*KGafnlVYIggvCgJsYwi_ZA.png)

Some icons formatted in Figma for Grift.


## Charts & Diagrams


*Grift* has many dialogues where you can respond to targets in different ways, and a few game systems that fit into each other, like trust. I used Figma to sketch out quick diagrams to align with my team on how these systems would work before we started implementing them.


![](https://miro.medium.com/v2/resize:fit:1050/1*eaZBhEkuNUc7Owq57LCuOg.png)

How we envisioned the trust meter working before we made spreadsheets and scripts.


## Screen Layouts


Before we built anything in Unity, I mocked up every core screen in Figma. That included:


- **Home screen** — Quick access to bot creation, current targets, and settings
- **Chat interface** — Dialogue trees, trust meter, scam buttons
- **Bot builder** — A modular character creator with swappable accessories
- **In-game store** — Cosmetic upgrades categorized by type and cost and the progression of your scamming career from the marketing level
- **Scams** — The dialogue between the bot and the scammee and feedback after each scam attempt


Each screen had clear interaction states, button placements, and callouts for how it fit into the larger game flow.


![](https://miro.medium.com/v2/resize:fit:1050/1*lUudrQcD7WQ5aP9aBAstvQ.png)

The main dollmaker screens from Grift.


## Quick Prototypes & Feedback


Sometimes I’ll even add clickable hotspots in Figma so you can play through a flow. It’s not a game engine, but for testing it’s enough. I’ve handed over Figma links to playtesters before we had a working build, just to get early impressions on the flow and what they would expect from the game.


![](https://miro.medium.com/v2/resize:fit:1050/1*q2hk4a0WO_EZXJgZkTC7uQ.png)

Early and ugly wireframes for the game Grift.


One thing I always like to point out is that game development is *not* like software development. Games aren’t built for utility, they are built for feelings and engagement. And that means so much of the work is about playtesting, tweaking, and making sure the experience feels right.


My partner on *Grift* was a software engineer, and I remember how surprised he was at just how much time we spent testing and adjusting. Easily half the time went into just tuning things. If a moment didn’t feel fun or funny or frustrating (intentionally), we’d go back and adjust it. This is part of the work of game design.


![](https://miro.medium.com/v2/resize:fit:1050/1*UnfvrUhg1JNez_dZTybUyA.png)

A very early version of Grift in Unity, bad layering and all, to test the bot creation to scam flow.


### Useful Figma Plugins for Game Development


[Unity Figma Importer](https://www.figma.com/community/plugin/1047282855279327962/unity-importer) — when you want to import your designs into Unity so they match up with every pixel out of the box.


[iOS Safe Area](https://www.figma.com/community/file/988392183086784844/ios-safe-area-guide?fuid=1018617446531260297) — for checking that you are designing for safe areas and any hardware specifications, like the Notch or Dynamic Island on iOS. You’ll still need to use the simualtor to check the safe area in Unity or another game engine, but it’s best to design your buttons or interactbles away from the margins.


[App store and Play store guidelines](https://www.figma.com/community/file/1352686667495694112)— a great plugin so you don’t have to sift through developer documentation to get the sizing correct for your store images.


## If You’re Just Getting Started


I got into games because I was a kid who played *Myst*, built computers with my grandpa, and spent way too much time on the internet. I studied game design in school, but what helped me the most was doing game jams. If you’ve never done one, they’re short, creative marathons where you make a game in a weekend based on a weird theme like “honey” or “gravity.” They’re chaotic, scrappy, and so fun.


Those small jam projects turned into projects in my portfolio, helped me land jobs, and gave me plenty of examples to include in my book (because you can’t really use your work from big companies). They also helped me practice working fast, thinking creatively, and actually *finishing* things.


![](https://miro.medium.com/v2/resize:fit:1050/1*8qKUinqPUvSX2_p535zlKg.png)

The main screens of the game Grift.


# *Designing Games with Figma*


## Today I’m going to talk about how I use Figma to design games. The same tool that product designers use for apps and websites. It’s not what most people think of when they think “game dev,” but it’s been one of my favorite tools for making games, especially 2D ones.
