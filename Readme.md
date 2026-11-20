## Light & Dark Mode Toggle using JavaScript project.

#  Light & Dark Mode Toggle
A simple and interactive Light/Dark Mode Toggle built using **HTML, CSS, and JavaScript**. This project automatically detects the user's system theme preference and allows users to switch between light and dark modes manually.

## Features
- 🌞 Light Mode
- 🌙 Dark Mode
- 💻 Automatically detects OS theme preference
- 💾 Saves user preference using Local Storage
- 🔄 Remembers the selected theme after page refresh
- ⚡ Automatically updates when the system theme changes (unless manually overridden)
- 📱 Simple and responsive UI

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES6)
- Browser Local Storage API
- Window MatchMedia API

## How It Works
1. Detects the system theme using `window.matchMedia()`.
2. Applies Light or Dark Mode based on the OS preference.
3. Allows users to manually toggle between themes.
4. Stores the selected theme in `localStorage`.
5. Restores the saved theme when the page reloads.

## Project Structure

theme-toggle/
│
├── index.html
├── style.css
└── script.js

## Key JavaScript Concepts
- `DOM Manipulation`
- `classList.add()` and `classList.remove()`
- `addEventListener()`
- `localStorage`
- `window.matchMedia()`
- Conditional Statements
- Ternary Operator

## ▶ Run Locally
1. Open the project folder.
2. Run `index.html` in your browser.

##  Learning Outcome
Through this project, I learned how to detect system color preferences, manage themes dynamically, and persist user preferences using Local Storage.
 