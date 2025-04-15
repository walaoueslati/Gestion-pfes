import React, { useState } from "react";
import logo from "../assets/images/logo.png";

function Navbar({ onToggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <nav className="bg-zinc-50 shadow">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Hamburger + Logo111111 */}
          <div className="flex items-center space-x-4">
                    <button
            onClick={onToggleSidebar}
            className="text-gray-800 focus:outline-none"
          >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <img className="h-10 w-auto" src={logo} alt="ISSAT Logo" />
          </div>

          {/* Right: User Profile */}
          <div className="flex items-center">
            <div className="relative">
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="User"
                />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">Sign out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
