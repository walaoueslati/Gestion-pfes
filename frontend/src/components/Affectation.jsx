import React, { useState } from 'react';

const Affectation = () => {
  const [classesFile, setClassesFile] = useState(null);
  const [studentsFile, setStudentsFile] = useState(null);
  const [affectations, setAffectations] = useState([]);

  const handleUpload = () => {
    // Simulation d'affectation (à remplacer plus tard par traitement de fichiers)
    const resultats = [
      { etudiant: 'Ali Ben Salah', encadrant: 'Dr. Karim', classe: 'Salle A1' },
      { etudiant: 'Fatma Trabelsi', encadrant: 'Mme. Souad', classe: 'Salle B2' },
    ];
    setAffectations(resultats);
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6 text-center">📂 Gestion des Affectations</h2>

      {/* Zone d’upload des fichiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col">
          <label className="font-medium mb-2">Disponibilité des classes</label>
          <input
            type="file"
            accept=".csv, .xlsx"
            onChange={(e) => setClassesFile(e.target.files[0])}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Étudiants & Encadrants</label>
          <input
            type="file"
            accept=".csv, .xlsx"
            onChange={(e) => setStudentsFile(e.target.files[0])}
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Bouton de simulation */}
      <button
        onClick={handleUpload}
        disabled={!classesFile || !studentsFile}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        Simuler l'Affectation
      </button>

      {/* Affichage du tableau des résultats */}
      {affectations.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">📊 Résultat de l’Affectation</h3>
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border">Étudiant</th>
                <th className="py-2 px-4 border">Encadrant</th>
                <th className="py-2 px-4 border">Classe</th>
              </tr>
            </thead>
            <tbody>
              {affectations.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border">{item.etudiant}</td>
                  <td className="py-2 px-4 border">{item.encadrant}</td>
                  <td className="py-2 px-4 border">{item.classe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Affectation;
