import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <div className="min-h-screen bg-gray-100"> 
          <Sidebar />

        </div>
        <div className="w-3/4 p-4"> 
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
    </div>
  );
};

export default Layout;
