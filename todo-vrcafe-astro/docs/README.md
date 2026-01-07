# VRCafe ToDo App — Internal Documentation

This document is intended for **teachers, reviewers, developers, and future maintainers** of the project.  
It explains internal logic, file responsibilities, architectural decisions, and recent updates.

---

## Project Goal

The goal of this project is to demonstrate:

- Clean separation of concerns
- Role-based permissions without frameworks
- Clear UI logic using Vanilla JavaScript
- Maintainable structure suitable for real-world use
- Readable and well-documented code for educational review

---

## Architecture Overview

The application is **client-side only** and consists of:

- Astro components for layout and structure
- Vanilla JavaScript modules for logic
- LocalStorage for persistence
- CSS split by responsibility and purpose
- Data files separated from UI logic

There is **no backend** by design.

---

## Roles & Permissions Logic

Roles are handled entirely on the client side.

### Roles

- **Guest** – view tasks only
- **Worker** – mark tasks as completed
- **Admin** – full access (create, edit, delete, move tasks)

### Core permission checks

Located in:
- `auth.js`
- `permissions.js`

Important helper functions:
- `isAdmin()`
- `isWorker()`
- `isGuest()`

Permissions affect:
- Visibility of buttons
- Ability to interact with inputs
- Checkbox availability
- Drag & Drop access

---

## JavaScript Files Overview

### `users.js`
Defines demo users and their roles.  
Used only for client-side role simulation.

---

### `auth.js`
Handles:
- login
- logout
- setting `currentUser`
- syncing role buttons
- syncing Neon toggle button state

---

### `state.js`
Stores global UI state:
- current filters
- current language
- current role
- shared variables used across modules

---

### `storage.js`
Handles LocalStorage persistence:
- saving tasks
- loading tasks
- initializing empty task list

---

### `tasks.js`
Main task logic:
- CRUD operations
- filtering by status and category
- rendering task elements
- admin-only edit & delete
- role-based UI behavior

---

### `permissions.js`
Applies permissions dynamically by modifying element styles:
- show / hide buttons
- enable / disable checkboxes
- hide task creation form for non-admins

---

### `dragdrop.js`
Implements Drag & Drop logic:
- drag only via handle
- drop only into valid category lists
- admin-only category changes
- visual feedback using dashed borders

---

### `progress.js`
Calculates:
- global task progress
- per-category progress
- updates progress bars dynamically

---

### `i18n.js`
Translation system:
- uses `data-i18n` and `data-i18n-placeholder`
- supports EN / NL
- updates UI dynamically without reload

---

### `app.js`
Controls application lifecycle:
- initializes tasks
- applies translations
- renders UI
- initializes drag & drop
- reapplies permissions after every UI update

---

## Data Files (`src/data/`)

All footer content is stored separately from UI logic.

### `footerTop.js`
Contains structured data for:
- location
- contact information
- social networks
- opening hours
- newsletter content

---

### `footerBottom.js`
Defines footer link groups:
- titles
- links
- translation keys

---

### `footerIcons.js`
Stores SVG icons as strings:
- used for social media buttons
- injected via `set:html`
- keeps UI clean and reusable

---

## CSS Files Overview

### `base.css`
- CSS variables
- fonts
- resets
- global defaults

---

### `layout.css`
- page structure
- sections
- grid / flex layouts
- responsive behavior

---

### `header.css`
- header positioning
- role switch buttons
- language selector
- Neon toggle button styling

---

### `footer.css`
- footer layout
- socials
- newsletter
- links
- responsive grid

---

### `tasks.css`
- task cards
- buttons
- filters
- progress bars
- drag handles
- admin edit/delete styles

---

### `theme.css`
Contains **visual theme utilities only**.

Currently includes:
- `.neon` class for glowing text effects

This file is **optional** and purely decorative.  
Removing it does **not** break application logic.

---

## Neon Mode Feature

A global **Neon Mode toggle** was added:

- Toggles `.neon` class on `<body>`
- Adds glowing text effects
- State is preserved across role changes
- Button state is synchronized via `syncNeonButton()`

This feature is:
- purely visual
- optional
- isolated from business logic

---

## Design Decisions (Important)

- No frameworks -> clarity of logic
- Explicit role checks -> easy auditing
- LocalStorage -> simple persistence
- CSS split by responsibility
- Data separated from UI logic
- Drag & Drop limited by role for safety
- Verbose code style for educational clarity

---

## Recent Updates

- Added admin-only **Edit task** feature
- Added **Neon mode toggle**
- Synced Neon button state across role changes
- Unified button styles using `.btn`, `.btn-danger`, `.btn-ghost`
- Improved Drag & Drop UX with dashed borders
- Extracted visual effects into `theme.css`
- Moved footer content into `data/` folder
- Cleaned up and documented all files
- Added full GitHub README and Internal Documentation

---

## Maintenance Notes

- Project is easy to extend with backend later
- Permissions are centralized and reusable
- UI logic is deterministic and predictable
- Code is intentionally verbose and commented
- Designed for teaching, reviewing, and learning

---

## Author Notes

This project was built as an **educational portfolio project**  
with emphasis on clarity, structure, and explanation.

Author: **Ivan Yeromenko**
