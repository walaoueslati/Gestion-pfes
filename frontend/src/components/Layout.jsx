import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="min-h-screen bg-gray-100"> 
          <Sidebar />
        </div>
        <div className="w-3/4 p-4"> 
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
