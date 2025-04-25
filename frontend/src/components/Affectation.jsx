import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAffectations, clearAffectations } from '../features/affectationSlice';
import * as XLSX from 'xlsx';

const Affectation = () => {
  const [classesFile, setClassesFile] = useState(null);
  const [studentsFile, setStudentsFile] = useState(null);

  const dispatch = useDispatch();
  const affectations = useSelector((state) => state.affectation.resultats);



  const handleUpload = () => {
    // Simulation only - replace with real processing later
    const resultats = [
      { etudiant: 'Ali Ben Salah', encadrant: 'Dr. Karim', classe: 'Salle A1' },
      { etudiant: 'Fatma Trabelsi', encadrant: 'Mme. Souad', classe: 'Salle B2' },
    ];
    dispatch(setAffectations(resultats));
  };

  const handleReset = () => {
    dispatch(clearAffectations());
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(affectations);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Affectations');
    XLSX.writeFile(workbook, 'resultats_affectation.xlsx');
  };

  return (
    <div className="max-w-5xl mt-8 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Gestion des Affectations</h2>

      {/* Upload des fichiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-gray-700">Disponibilité des classes</label>
          <input
            type="file"
            accept=".csv, .xlsx"
            onChange={(e) => setClassesFile(e.target.files[0])}
            className="border border-gray-300 p-2 rounded-md focus:outline-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-gray-700">Étudiants & Encadrants</label>
          <input
            type="file"
            accept=".csv, .xlsx"
            onChange={(e) => setStudentsFile(e.target.files[0])}
            className="border border-gray-300 p-2 rounded-md focus:outline-blue-400"
          />
        </div>
      </div>

      {/* Boutons */}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={handleUpload}
          disabled={!classesFile || !studentsFile}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          Simuler l'Affectation
        </button>

        {affectations.length > 0 && (
          <>
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Télécharger Résultat
            </button>

            <button
              onClick={handleReset}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Réinitialiser
            </button>
          </>
        )}
      </div>

      {/* Tableau des résultats */}
      {affectations.length > 0 && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Résultat de l’Affectation</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-300">
            <table className="w-full text-center">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border">Étudiant</th>
                  <th className="py-3 px-4 border">Encadrant</th>
                  <th className="py-3 px-4 border">Classe</th>
                </tr>
              </thead>
              <tbody>
                {affectations.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border">{item.etudiant}</td>
                    <td className="py-2 px-4 border">{item.encadrant}</td>
                    <td className="py-2 px-4 border">{item.classe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Affectation;
