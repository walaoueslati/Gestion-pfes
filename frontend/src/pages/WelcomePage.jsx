import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <main className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/src/assets/images/issatso.png')" }}>
        <div className="text-center">
          <h1 className="text-6xl font-bold">Bienvenu <br /> ISSATSo PFE Management</h1>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/login?role=admin">
              <button
                className="px-6 py-3 text-white font-semibold rounded w-[216px]"
                style={{ backgroundColor: "#4479A3" }}
              >
                Administrateur
              </button>
            </Link>
            <Link to="/login?role=prof">
              <button
                className="px-6 py-3 text-white font-semibold rounded w-[216px]"
                style={{ backgroundColor: "#4479A3" }}
              >
                Professeur
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;