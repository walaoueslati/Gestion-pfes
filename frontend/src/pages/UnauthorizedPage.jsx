import React from "react";
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>⚠️ Accès interdit</h1>
      <p>Vous n'avez pas les droits nécessaires pour accéder à cette page.</p>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#4479A3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Retour
      </button>
    </div>
  );
}