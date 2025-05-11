import React, { useState } from "react";
import axios from "../api/axios"; 
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  // const roleFromUrl = queryParams.get("role"); // 'admin' ou 'prof'

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");

    const res = await axios.post("login/", {
      email,
      password,
    });

    console.log("Réponse brute:", res);

    // Parser manuellement si besoin
    const parsedData =
      typeof res.data === "string" ? JSON.parse(res.data) : res.data;

    console.log("Données parsées:", parsedData);

    // Sauvegarder les données
    localStorage.setItem("access_token", parsedData.access);
    localStorage.setItem("refresh_token", parsedData.refresh);
    localStorage.setItem("user", JSON.stringify(parsedData.user));

    const userType = parsedData.user.type?.toLowerCase(); // 'admin' / 'prof'
    const roleFromUrl = queryParams.get("role")?.toLowerCase(); // 'admin' / 'prof'

    console.log({
      userType,
      roleFromUrl,
      match: userType === roleFromUrl
    });

    // Vérification stricte du rôle demandé
    if (roleFromUrl && roleFromUrl !== userType) {
  setError("Vous n'êtes pas autorisé(e) à vous connecter en tant que " + roleFromUrl);
  return;
}
    // After login success
if (userType === "admin") {
  navigate("/admin/actualite-dirigee");
} else if (userType === "prof") {
  navigate("/prof/disponibilite");
} else {
  navigate("/");
}

  } catch (err) {
    console.error(err);
    setError("Email ou mot de passe invalide !");
  }
};

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-sky-700">
          Bienvenu(e)
        </h2>
        <p className="text-center text-zinc-600">
          Veuillez saisir vos paramètres d'accès à votre compte Issatso+
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrer votre email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Mot de passe
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Entrer votre mot de passe"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-sm text-right mt-1">
              <a href="#" className="font-semibold text-zinc-600 hover:text-zinc-800">
                Mot de passe oublié?
              </a>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-sky-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}