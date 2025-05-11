import React from "react";
import useAuth from "../hooks/useAuth";

export default function UserInfo() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <p>
        Connecté en tant que : <strong>{user.type}</strong> | {user.nom} {user.prenom}
      </p>
    </div>
  );
}