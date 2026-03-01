# Institute Management & Location System (ILMS)

### Bogura Polytechnic Institute — Campus Portal

**Subject:** Web Technology  
**Session:** 2022–2023  
**Department:** Computer Science & Technology (CST)  
**Date:** March 01, 2026

---

## Table of Contents

| No. | Section                        |
| --- | ------------------------------ |
| 1   | [Project Overview](#1-project-overview) |
| 2   | [Team Members](#2-team-members) |
| 3   | [Project Objectives](#3-project-objectives) |
| 4   | [Target Users](#4-target-users) |
| 5   | [Expected Outcomes](#5-expected-outcomes) |
| 6   | [Feature Modules](#6-feature-modules) |
| 7   | [Tech Stack](#7-tech-stack) |
| 8   | [Development Tools](#8-development-tools) |
| 9   | [System Architecture Overview](#9-system-architecture-overview) |

---

## 1. Project Overview

The **Institute Management & Location System (ILMS)** is a modern, responsive web application built to serve as the official digital gateway for **Bogura Polytechnic Institute**. The system provides a centralized platform where students, parents, faculty, and visitors can explore the campus, discover departments, locate facilities, and interact with an AI-powered campus assistant — all from a single, intuitive interface.

The project addresses the real-world problem of campus navigation and information accessibility. New students often struggle to find departments, offices, hostels, and other facilities within the campus. ILMS solves this by offering an **interactive organizational tree**, a **Google Maps integration** for live location, a **photo gallery** for virtual campus exploration, and a **keyword-based AI chatbot** (BPI Bot) that answers location and facility queries instantly.

This is a **front-end web application** developed as a class group project by 10 students of the CST Department (Session 2022–2023), demonstrating practical skills in modern web development frameworks and collaborative software engineering.

---

## 2. Team Members

| No. | Name      | Role                    |
| --- | --------- | ----------------------- |
| 1   | Sajid     | Lead Developer & GitHub Manager |
| 2   | Ashik     | Developer               |
| 3   | Nurnobi   | Developer               |
| 4   | Shagor    | Developer               |
| 5   | Tanvin    | Developer               |
| 6   | Rishat    | Developer               |
| 7   | Sompa     | Developer               |
| 8   | Atiah     | Developer               |
| 9   | Toya      | Developer               |
| 10  | Rahul     | Developer               |

---

## 3. Project Objectives

1. **Simplify Campus Navigation** — Provide an interactive, digital way for students and visitors to find departments, offices, hostels, and other campus facilities without physical assistance.

2. **Centralize Institute Information** — Create a single platform that consolidates all essential information about Bogura Polytechnic Institute, including its departments, leadership hierarchy, facilities, and contact details.

3. **Showcase the Organizational Structure** — Build an interactive tree-based visualization of the institutional hierarchy, from the Principal to individual Chief Instructors of each department.

4. **Enable Virtual Campus Exploration** — Allow users to explore the campus visually through a rich photo gallery with masonry layout, infinite scroll, and lightbox viewing.

5. **Integrate Location Services** — Embed an interactive Google Map so users can easily find the institute's physical location, office hours, and contact information.

6. **Deliver AI-Powered Assistance** — Implement a keyword-based AI chatbot (BPI Bot) that can instantly answer common questions about campus locations, departments, and facilities.

7. **Demonstrate Modern Web Development** — Apply industry-standard tools and frameworks (React, Vite, Tailwind CSS) as a practical class project showcasing collaborative development skills.

---

## 4. Target Users

| User Group          | How They Benefit                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| **New Students**    | Navigate the campus easily, find department locations, discover facilities, and interact with BPI Bot for quick answers. |
| **Current Students**| Access department information, chief instructor details, contact numbers, and campus services at a glance. |
| **Parents & Guardians** | Explore the campus remotely through the gallery, view the institute location on the map, and learn about available facilities. |
| **Visitors**        | Get directions via Google Maps, view office hours, find contact information, and take a virtual tour through the photo gallery. |
| **Faculty & Staff** | Reference the organizational tree and department structure for internal coordination. |

---

## 5. Expected Outcomes

1. **A Fully Functional Web Application** — A responsive, production-ready single-page application deployed and accessible online via Vercel.

2. **Improved Campus Accessibility** — Students and visitors can find any location or facility within the campus in seconds, reducing confusion and saving time.

3. **Enhanced Digital Presence** — The institute gains a modern, professional digital portal that showcases its departments, facilities, and campus life.

4. **Interactive AI Experience** — Users can interact with BPI Bot to get instant, conversational answers about campus locations without human assistance.

5. **Visual Campus Showcase** — A gallery of 24+ high-quality campus photos with infinite scroll, masonry layout, and lightbox view provides a compelling virtual tour.

6. **Practical Learning Outcome** — Team members gain hands-on experience in React development, component-based architecture, client-side routing, responsive design, and collaborative Git-based development.

---

## 6. Feature Modules

### 6.1 Interactive Organizational Tree (Home Page)
- Displays the institutional hierarchy starting from the Principal
- Expands into 7 departments, each with Chief Instructor 1 (CI-1) and Chief Instructor 2 (CI-2)
- Clicking a department opens a **modal dialog** showing detailed information: CI names, photos, phone numbers, emails, and office locations
- Built with reusable `TreeNode` and `DepartmentModal` components

### 6.2 Departments Page
- Showcases all **7 engineering departments**: CST, Civil, Mechanical, Electrical, Power, RAC, and Electronics
- Each department displays an icon, description, photo, and classroom/office location
- Alternating left-right layout for visual variety
- Includes a "Learn More" button (feature placeholder for future expansion)

### 6.3 Photo Gallery
- **24 campus photos** displayed in a responsive masonry grid layout
- **Infinite scroll** — automatically loads more photos as the user scrolls down
- **Lightbox viewer** — click any photo to view it in full-screen with navigation
- Built using `react-photo-album` (Masonry + Infinite Scroll) and `yet-another-react-lightbox`

### 6.4 Interactive Google Map
- Embeds a live **Google Maps iframe** showing the exact location of Bogura Polytechnic Institute
- Info cards display the institute's **address**, **office hours** (Sat–Thu, 8:00 AM – 6:45 PM), and **phone number**
- Fully responsive — adapts from mobile (300px height) to desktop (600px height)

### 6.5 Campus Facilities & Services Page
- Lists **8 campus facilities**: Registrar's Office, Student Hostel, Rover & Red Crescent, Institute Mosque, Campus Canteen, Control Room, Placement Cell, and Medical Center
- Each facility shows a description, location, icon, and representative image
- Alternating card layout with hover zoom animations

### 6.6 AI Campus Chatbot (BPI Bot)
- **Floating chat widget** accessible on every page (bottom-right corner)
- Answers questions about campus locations, departments, facilities, and general greetings
- **Keyword-matching AI** powered by a local dataset of 30+ question-answer pairs
- Features: typing indicator animation, message timestamps, quick suggestion buttons, glassmorphism UI, smooth auto-scroll
- No external API required — runs entirely on the client side

### 6.7 Navigation & Layout
- **Sticky Navbar** with active link highlighting and mobile hamburger dropdown
- **Footer** with navigation links, brand tagline, and copyright information
- **Responsive layout** — works seamlessly on mobile, tablet, and desktop
- Client-side routing with `react-router` (no page reloads)

---

## 7. Tech Stack

| Category            | Technology                  | Version   | Purpose                                                  |
| ------------------- | --------------------------- | --------- | -------------------------------------------------------- |
| **UI Library**      | React                       | 19.1      | Component-based UI architecture and state management     |
| **Build Tool**      | Vite                        | 7.1       | Fast development server with Hot Module Replacement      |
| **CSS Framework**   | Tailwind CSS                | 4.1       | Utility-first responsive styling                         |
| **UI Components**   | DaisyUI                     | 5.4       | Pre-built component classes (navbar, badges, modals)     |
| **Routing**         | React Router                | 7.9       | Client-side page navigation without reloads              |
| **Gallery**         | react-photo-album           | 3.4       | Masonry grid layout with infinite scroll                 |
| **Lightbox**        | yet-another-react-lightbox  | 3.28      | Full-screen photo viewer with navigation                 |
| **Carousel**        | Swiper                      | 12.0      | Touch-friendly sliding carousel component                |
| **Icons**           | Lucide React                | 0.552     | Modern SVG icon library for the chatbot and UI           |
| **Icons**           | React Icons                 | 5.5       | Icon packs (Font Awesome) for department icons           |
| **Notifications**   | React Hot Toast             | 2.6       | Toast notifications for user feedback                    |
| **Language**        | JavaScript (ES Modules)     | ES2022+   | Application logic and component development              |
| **Markup**          | HTML5                       | —         | Semantic page structure                                  |
| **Compiler**        | React Compiler (Babel)      | 19.1-rc   | Automatic optimization of React components               |

---

## 8. Development Tools

| Tool                | Purpose                                                      |
| ------------------- | ------------------------------------------------------------ |
| **VS Code**         | Primary code editor for development                          |
| **Git**             | Version control and collaborative development                |
| **GitHub**          | Remote repository hosting and team collaboration             |
| **npm**             | Package manager for dependency installation and scripts      |
| **Vite Dev Server** | Local development server with instant hot reload             |
| **ESLint**          | Code quality and consistency enforcement                     |
| **Vercel**          | Deployment platform for production hosting                   |
| **Google Chrome**   | Primary browser for testing and DevTools debugging           |
| **Google Maps**     | Embedded map service for institute location display          |

---

## 9. System Architecture Overview

### 9.1 Architecture Type
This application follows a **Single-Page Application (SPA)** architecture with **client-side rendering**. All logic, routing, and data processing happen in the browser — no backend server or database is required.

### 9.2 Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                        USER (Browser)                            │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                     Vite Dev Server / Vercel                     │
│                   (Static File Serving + HMR)                    │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                      React Application                           │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                    React Router (v7)                        │  │
│  │              Client-Side Route Management                  │  │
│  └──────┬─────────┬──────────┬──────────┬──────────┬─────────┘  │
│         │         │          │          │          │             │
│         ▼         ▼          ▼          ▼          ▼             │
│    ┌────────┐ ┌────────┐ ┌────────┐ ┌───────┐ ┌────────┐       │
│    │  Home  │ │ Depts  │ │Gallery │ │  Map  │ │ Others │       │
│    │  Page  │ │  Page  │ │  Page  │ │ Page  │ │  Page  │       │
│    └────────┘ └────────┘ └────────┘ └───────┘ └────────┘       │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                   Shared Components                        │  │
│  │  ┌────────┐  ┌────────┐  ┌───────────┐  ┌─────────────┐  │  │
│  │  │ Navbar │  │ Footer │  │ CampusChat│  │ DeptTree &  │  │  │
│  │  │        │  │        │  │ (BPI Bot) │  │   Modal     │  │  │
│  │  └────────┘  └────────┘  └─────┬─────┘  └─────────────┘  │  │
│  └────────────────────────────────┼──────────────────────────┘  │
│                                   │                              │
│  ┌────────────────────────────────▼──────────────────────────┐  │
│  │                     AI Module                              │  │
│  │  ┌──────────────┐    ┌──────────────────┐                 │  │
│  │  │  campusAI.js │◄───│  campusData.js   │                 │  │
│  │  │  (Matcher)   │    │  (30+ Q&A Pairs) │                 │  │
│  │  └──────────────┘    └──────────────────┘                 │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                    Styling Layer                            │  │
│  │         Tailwind CSS 4  +  DaisyUI 5  +  Custom CSS       │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌─────────────────────────┐
              │    External Services    │
              │  ┌───────────────────┐  │
              │  │ Google Maps Embed │  │
              │  │   (iframe API)    │  │
              │  └───────────────────┘  │
              └─────────────────────────┘
```

### 9.3 Directory Structure

```
ILMS/
├── index.html                  # Entry HTML file
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite build configuration
├── vercel.json                 # Vercel deployment config
├── public/
│   └── logo.png                # App favicon/logo
└── src/
    ├── main.jsx                # App entry point (React DOM render)
    ├── App.jsx                 # Root App component
    ├── index.css               # Global styles
    ├── ai/
    │   ├── campusAI.js         # AI keyword-matching engine
    │   └── campusData.js       # Q&A dataset (30+ entries)
    ├── Router/
    │   └── Route.jsx           # Route definitions (5 routes)
    ├── Layouts/
    │   └── RootLayout.jsx      # Root layout (Navbar + Outlet + Footer)
    ├── Pages/
    │   ├── Home.jsx            # Home page (Organizational Tree)
    │   ├── Department.jsx      # Departments listing page
    │   ├── Gallery.jsx         # Photo gallery page
    │   ├── Map.jsx             # Interactive map page
    │   └── Others.jsx          # Campus facilities page
    ├── Components/
    │   ├── Navbar/Navbar.jsx   # Sticky navigation bar
    │   ├── Footer/Footer.jsx   # Site footer
    │   ├── Hero/Hero.jsx       # Hero section (placeholder)
    │   ├── Gallery/GalleryImages.jsx  # Masonry gallery + lightbox
    │   ├── CampusChat/CampusChat.jsx  # AI chatbot widget
    │   ├── TreeItem/
    │   │   ├── DepartmentTree.jsx     # Org tree with dept data
    │   │   ├── TreeNode.jsx           # Recursive tree node
    │   │   └── DepartmentModal.jsx    # CI detail popup modal
    │   ├── Swipper/            # Swiper carousel component
    │   └── Photos/             # Photo-related component
    └── assets/                 # Images (campus photos, dept images)
```

### 9.4 Data Flow

1. **User** opens the app in a browser → Vite/Vercel serves the static bundle.
2. **React Router** handles navigation between 5 pages without full page reloads.
3. **RootLayout** wraps all pages with the Navbar, Footer, and CampusChat widget.
4. **Page components** render content using local data (no API calls to a backend).
5. **BPI Bot** receives user input → `campusAI.js` matches keywords against `campusData.js` → returns the matching answer.
6. **Google Maps** is loaded via an iframe embed, requiring no API key on the client.

---

*This project file was prepared for the ILMS class project of the CST Department, Bogura Polytechnic Institute.*
