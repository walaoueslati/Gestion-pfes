import React from "react";

function Actualite() {
  return (

<div className="w-300 p-6 ">
  <h2 className="text-2xl font-bold mb-4">📰 Actualités </h2>
  <ul className="space-y-4">
    <li className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500">
      <h3 className="text-lg font-semibold text-blue-700"> Réunion pédagogique</h3>
      <p className="text-gray-600 mt-1">Les professeurs sont invités à participer à la réunion pédagogique prévue le 22 avril à 10h.</p>
      <span className="text-sm text-gray-400">Posté le 15 avril 2025</span>
    </li>
  </ul>
  
</div>

  )
}
export default Actualite;

