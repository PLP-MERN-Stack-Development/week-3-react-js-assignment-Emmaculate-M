# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Updated ReadMe.MD
# 💸 Emmaculate's Expense Tracker

A simple and elegant expense tracker app built with **React**, **Tailwind CSS**, and **Vite**. This app allows users to add, filter, and manage expenses, as well as toggle between light and dark themes. It also includes a basic task manager.

---

## ✨ Features

- ✅ Add new expenses with category, title, and amount
- ✅ Filter expenses by title
- ✅ Delete individual expenses
- ✅ Track total amount of visible expenses
- ✅ Local storage persistence for expenses and tasks
- ✅ Built-in task manager
- ✅ Toggle between **light** and **dark** mode
- ✅ Responsive and mobile-friendly design

---

## 🛠️ Tech Stack

- **React** (functional components + hooks)
- **Tailwind CSS** (utility-first styling)
- **Vite** (lightweight dev environment)
- **Local Storage** (data persistence)
- **React Router** (page navigation)

---

## 📁 Project Structure

expense-tracker/
├── node_modules
├── public/vite.svg
├── src/
| ├──assets/react.svg
│ ├── components
|       ├──Layout
|           ├──Footer.jsx
|           ├──Layout.jsx
|           ├──Navbar.jsx   
|       ├──ui
|           ├──Button.jsx
|           ├──Card.jsx
|       ├──ExpenseForm.jsx
|       ├──ExpenseItem.jsx
|       ├──ExpenseList.jsx
|       ├──TaskManager.jsx
|   ├──context
|       ├──ThemeContext.jsx
│   ├── hooks/ 
|       ├──useLocalStorage
|   ├── pages
|       ├── Posts.jsx
│   ├── App.jsx # Main app logic (expenses)
│   ├── index.css # Tailwind imports
|   ├── main.jsx # Entry point with routes/layout
│   └── assets/ # Optional icons or images
|   ├── postcss.config.js # Tailwind PostCSS plugins
|   └── README.md
|   ├── tailwind.config.js # Tailwind setup
├── vite.config.js # Vite setup


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Emmaculate-M.git
cd expense-tracker

2. Install dependencies
npm install

3. Start the development server
npm run dev

Dark Mode
Theme preference is saved in localStorage ('dark' = true/false)

ThemeContext manages toggling the dark class on <html>

Styles like dark:bg-navy and dark:text-gold activate automatically

 Scripts
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run preview	Preview production build locally

 Notes
Navbar includes navigation to:

Home (expense tracker)

About (project info)

Tasks (mini task manager)

Tasks and expenses persist across refreshes via local storage

Built-in utility components like Button and Card used throughout

 Screenshot


 License
This project is for learning/demo purposes. No license is currently attached.

Acknowledgments
Built with Love by Emmaculate under the Power Learn Project

