# VRCafe ToDo App

Task management web application for organizing tasks in a VR Café environment.

This project was created as an **educational and portfolio project**, with a focus on clean code structure, role-based permissions, and UI logic — without using heavy frameworks.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Roles](#roles)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Author](#author)
- [License](#license)

---

## About the Project

**VRCafe ToDo App** is a browser-based task manager designed for a VR Café workflow.  
It allows managing tasks by category, tracking progress, and controlling access based on user roles.

The project intentionally uses **Vanilla JavaScript** and **Astro** to demonstrate understanding of core web technologies without relying on frameworks like React or Vue.

This application does not use a backend server.
All data is stored locally in the browser using LocalStorage.

---

## Features

- Role-based access control
- Task creation, editing, and deletion
- Task completion tracking
- Drag & Drop between categories
- Category and status filters
- Progress bar (global & per category)
- Multi-language support (EN / NL)
- Persistent storage via LocalStorage

---

## Roles

| Role   |                  Permissions                   |
|--------|------------------------------------------------|
| Guest  |--------------- View tasks only ----------------|
| Worker |------------ Mark tasks as completed -----------|
| Admin  | Full access (create, edit, delete, move tasks) |

---

## Built With

- Astro
- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage API

---

## Getting Started

### Prerequisites

- Node.js (recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

After that, the application will be available at:

```
http://localhost:4321
```

---

## Usage

1. Select a role in the header (Guest / Worker / Admin)
2. View tasks grouped by categories
3. Use filters to show tasks by status or category
4. Drag tasks between categories (Admin only)
5. Mark tasks as completed (Worker / Admin)
6. Edit or delete tasks (Admin only)
7. Enable Neon mode using the toggle button

---

## Project Structure

```text
public/
 │
 ├─ assets/
 │   └─ logo.webp
 │
 ├─ js/
 │   ├─ app.js
 │   ├─ auth.js
 │   ├─ dragdrop.js
 │   ├─ i18n.js
 │   ├─ permissions.js
 │   ├─ progress.js
 │   ├─ state.js
 │   ├─ storage.js
 │   ├─ tasks.js
 │   └─ users.js
 │
 ├─ styles/
 │   ├─ base.css
 │   ├─ footer.css
 │   ├─ header.css
 │   ├─ layout.css
 │   ├─ tasks.css
 │   └─ theme.css
 │
src/
 ├─ components/
 │   ├─ Header.astro
 │   ├─ Footer.astro
 │   └─ MainContent.astro
 │
 ├─ data/
 │   ├─ footerBottom.js
 │   ├─ footerIcons.js
 │   └─ footerTop.js
 │
 ├─ layouts/
 │   └─ BaseLayout.astro
 │
 ├─ pages/
 │   └─ index.astro
 │
```

---

## Documentation

Detailed internal documentation is available in:

```
/docs/README.md
```

---

## Limitations

- No backend / server-side storage
- Data is stored per browser (LocalStorage)
- No real authentication system
- Designed for educational purposes

---

## Author

**Ivan Yeromenko**  
Software Development student  
ROC van Amsterdam (MBO College Amstelland)

---

## License

This project was created for **educational and portfolio purposes**
