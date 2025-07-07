import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Layout from './components/Layout/Layout.jsx';
import TaskManager from './components/TaskManager';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Posts from './pages/Posts'; // ✅ ADD THIS LINE
import './index.css';

const About = () => (
  <div className="text-center text-gray-600">
    <h2 className="text-2xl font-bold mb-4">About</h2>
    <p>My simple expense tracker built with React + Tailwind.</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="tasks" element={<TaskManager />} />
            <Route path="posts" element={<Posts />} /> {/* ✅ VALID NOW */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
