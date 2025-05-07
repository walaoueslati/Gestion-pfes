// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import NavbarLayout from './layouts/NavbarLayout';
import Layout from './layouts/Layout';

// Pages
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';

// Protected Components
import DisponibiliteProf from './components/DisponibiliteProf';
import Actualite from './components/Actualite';
import Affectation from './components/Affectation';
import Actualitedirigee from './components/Actualitedirigee';

// Protected Route Wrapper
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - With NavbarLayout */}
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<WelcomePage />} />
        </Route>

        {/* Login Routes with Role Selection */}
        <Route path="/login" element={<LoginPage />} />
        {/* Optional: Separate login paths */}
        <Route path="/login/admin" element={<LoginPage role="admin" />} />
        <Route path="/login/prof" element={<LoginPage role="prof" />} />

        {/* Protected Routes for Admin */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['Admin']} />
          }
        >
          <Route path="/admin" element={<Layout />}>
            <Route path="actualite-dirigee" element={<Actualitedirigee />} />
            {/* Add more admin-only pages here */}
          </Route>
        </Route>

        {/* Protected Routes for Prof */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['Prof']} />
          }
        >
          <Route path="/prof" element={<Layout />}>
            <Route path="disponibilite" element={<DisponibiliteProf />} />
            <Route path="actualite" element={<Actualite />} />
            <Route path="affectation" element={<Affectation />} />
            {/* Add more prof-only pages here */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;