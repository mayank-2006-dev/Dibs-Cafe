# Dibs Cafe

A modern, responsive, and immersive web application for Dibs Cafe, located in Delhi. The website features smooth scrolling, dynamic layout transitions, and beautiful interactive elements to showcase the cafe's menu, gallery, and contact information.

## Features

- **Modern UI**: Immersive design with beautiful gradients, custom typography, and a cohesive warm color palette.
- **Interactive Animations**: Smooth transitions and scrolling effects powered by Framer Motion.
- **Dynamic Menu**: An interactive menu section categorized by offerings (Coffee, Quick Bites, Pasta, Waffles).
- **Instagram Integration**: Playable Instagram Reels embedded directly on the homepage.
- **Fully Responsive**: Optimized for all devices, from large desktop screens to mobile phones.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with comprehensive media queries and custom properties.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Contains the Next.js routes (`/`, `/menu`, `/gallery`, `/find-us`).
- `src/components`: Reusable UI components (Navbar, Footer, SiteShell, etc).
- `src/views`: Main page components that assemble the UI.
- `src/data/siteData.js`: Centralized data configuration for easy content management.
- `src/styles.css`: The global stylesheet.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).
