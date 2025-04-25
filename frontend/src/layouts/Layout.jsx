import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        {sidebarOpen && (
          <div className="min-h-screen bg-gray-100">
            <Sidebar />
          </div>
        )}
        <div className={`p-4 ${sidebarOpen ? 'w-3/4' : 'w-full'}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
