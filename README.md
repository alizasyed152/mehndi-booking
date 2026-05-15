# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Mehndi Booking System

A full-stack booking platform built with React and Firebase for managing mehndi (henna) appointments. Users can create accounts, book appointments, and view confirmations, while the system prevents scheduling conflicts and ensures a smooth booking experience.

Project Description

A full-stack web application that allows users to book mehndi (henna) appointments through a streamlined scheduling system. The platform includes user authentication, protected booking routes, and real-time booking validation using Firebase. It is designed to provide a smooth end-to-end experience from account creation to appointment confirmation, with future expansion into admin management and automated notifications.

Skills Being Showcased

This project demonstrates proficiency in modern full-stack web development, including:

Frontend development using React and component-based architecture
Routing and navigation with React Router
Authentication and authorization using Firebase Auth
Database design and integration with Firestore
State management and form handling in React
Protected routes and user session management
UI/UX design using Tailwind CSS
Form validation and error handling
Real-world application architecture (user flow, booking systems, and role-based access planning)
Basic backend logic through Firebase (data validation and conflict prevention)

Features
Authentication
Email/password authentication via Firebase
Google Sign-In (planned)
Protected routes for booking system
Persistent login sessions

Booking System
Appointment booking with date, time, and service selection
Backend validation to prevent double bookings
Booking confirmation flow
User-specific booking tracking (in progress)

User Experience
Conditional navigation based on authentication state
Redirect back to intended page after login
Form validation and error handling (in progress)
Loading states and toast notifications (planned)

Admin Features (Planned)
Admin dashboard for viewing all bookings
Booking management tools (filter, view, organize)
Email notifications for confirmations

Tech Stack
React (Vite)
Firebase Authentication
Firestore Database
React Router
Tailwind CSS
Project Status

This project is currently under active development. Core authentication and booking flows are implemented, with UX improvements and admin features in progress.

Future Improvements
Google Sign-In integration
Booking dashboard per user
Email confirmations
Admin analytics dashboard
Enhanced UI/UX animations