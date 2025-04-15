import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="min-h-screen bg-gray-100"> {/* 25% width - Sidebar */}
          <Sidebar />
        </div>
        <div className="w-3/4 p-4"> {/* 75% width - Main content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
