# 📅 MERN Calendar Frontend

A modular calendar application built with **React 19**, **Redux Toolkit**, and **React Big Calendar**. This repository implements the complete **frontend logic**, including event management, modals, routing, and localization.

🔗 Backend repo with JWT authentication logic: [calendar-backend](https://github.com/SofiArz/calendar-backend)

---

## 🚀 Features

-  Login UI with React Router integration
-  Route protection and public/private navigation
-  Calendar using `react-big-calendar` with custom events
-  Event creation/editing modal
-  Datepicker with Spanish localization
-  Redux Toolkit for state management (calendar & UI)
-  Form validations and SweetAlert2 confirmations
-  Modular folder structure with reusable hooks and components

---

## 📸 Demo

> _Deployment link will be added shortly._

---

## ⚙️ Tech Stack

| Tool/Library           | Purpose                          |
|------------------------|----------------------------------|
| React 19               | UI Framework                     |
| Redux Toolkit          | Global state management          |
| React Router DOM       | Routing                          |
| React Big Calendar     | Calendar component               |
| React Modal            | Modal dialogs                    |
| React Datepicker       | Date selection                   |
| SweetAlert2            | User-friendly alerts             |
| Vite                   | Development/build tool           |
| ESLint                 | Linting and code quality         |

---

## 📁 Project Structure

```text
src/
│
├── auth/               # Login page and auth layout
│   └── pages/
│       └── LoginPage.jsx
│
├── calendar/           # Core calendar features
│   ├── components/     # UI components like modals, buttons
│   ├── pages/          # CalendarPage.jsx
│   └── helpers/        # Localization and utilities
│
├── hooks/              # Custom hooks for Redux slices
│
├── router/             # App routing logic
│
├── store/              # Redux slices (calendar, UI)
│
├── CalendarApp.jsx     # Main app entry
└── index.js            # Vite entry point
