// src/components/layout/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-navy dark:text-white">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
