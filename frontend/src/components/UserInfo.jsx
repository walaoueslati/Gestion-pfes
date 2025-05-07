import React from "react";

export default function UserInfo() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <p>Connecté en tant que : <strong>{user.type}</strong></p>
    </div>
  );
}