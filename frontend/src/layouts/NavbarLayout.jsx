import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UserInfo from '../components/UserInfo';
import useAuth from '../hooks/useAuth';

const NavbarLayout = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div>
      {/* Top Navbar */}
      <Navbar showUserMenu={false} showSidebarToggle={false} />

      {/* Optional: User Info + Logout Button in Navbar */}
      <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {isAuthenticated && (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <UserInfo /> 
            
          </div>
        )}
      </div>

      {/* Page Content */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default NavbarLayout;