import useAuth from '../hooks/useAuth';

export default function LogoutButton() {
  const { logout, user } = useAuth();

  return (
    <button
      onClick={logout}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#4479A3",
        color: "white",
        border: "none",
        borderRadius: "0.375rem",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      Se déconnecter ({user?.nom})
    </button>
  );
}