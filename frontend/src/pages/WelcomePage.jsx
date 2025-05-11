import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import issatsoBg from '../assets/images/issatso.png'; // ✅ Imported image

export default function WelcomePage() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (user?.type === 'Admin') {
        navigate('/admin/actualite-dirigee', { replace: true });
      } else if (user?.type === 'Prof') {
        navigate('/prof/disponibilite', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [isAuthenticated, navigate, user]);

  return (
    <main
      className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${issatsoBg})` }} // ✅ Using imported image
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Bienvenu <br /> ISSATSo PFE Management
        </h1>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/login?role=admin">
            <button
              className="px-6 py-3 text-white font-semibold rounded w-[216px]"
              style={{ backgroundColor: '#4479A3' }}
            >
              Administrateur
            </button>
          </a>
          <a href="/login?role=prof">
            <button
              className="px-6 py-3 text-white font-semibold rounded w-[216px]"
              style={{ backgroundColor: '#4479A3' }}
            >
              Professeur
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}