import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const heuresPossibles = [
  '08:00', '09:00', '10:00', '11:00','13:00',
  '14:00', '15:00', '16:00', '17:00'
]

function DisponibiliteProf() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [disponibilites, setDisponibilites] = useState({})

  const toggleSeance = (heure) => {
    if (!selectedDate) return

    const dateStr = selectedDate.toDateString()
    const heures = disponibilites[dateStr] || []

    if (heures.includes(heure)) {
      setDisponibilites({
        ...disponibilites,
        [dateStr]: heures.filter(h => h !== heure),
      })
    } else {
      setDisponibilites({
        ...disponibilites,
        [dateStr]: [...heures, heure],
      })
    }
  }

  const handleSubmit = () => {
    console.log("Disponibilités soumises :", disponibilites)
    alert("Disponibilités enregistrées avec succès ✅")
  }

  return (
    <div className="max-w-5xl mx-auto p-8 mt-24 bg-white shadow-lg rounded-xl">
<div className="max-w-5xl mx-auto p-8 mt-24 bg-white shadow-lg ">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Remplir votre disponibilité</h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Calendrier */}
        <div className="border-2 border-blue-200 rounded-lg p-4 shadow-md bg-blue-50">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            inline
            calendarClassName="!text-lg"
          />
        </div>

        {/* Séances */}
        {/* Séances toujours visibles */}
        <div className="flex-1">
          <p className="mb-3 font-semibold text-gray-700">
            {selectedDate
              ? <>Séances disponibles pour le <span className="text-blue-700">{selectedDate.toLocaleDateString()}</span> :</>
              : "Veuillez sélectionner une date pour activer les séances."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 justify-center">
            {heuresPossibles.map((heure) => (
              <button
                key={heure}
                onClick={() => toggleSeance(heure)}
                disabled={!selectedDate}
                className={`py-2 px-4 rounded text-sm font-medium transition duration-150 ${
                  selectedDate && disponibilites[selectedDate.toDateString()]?.includes(heure)
                    ? 'bg-blue-800 text-white'
                    : selectedDate
                      ? 'bg-gray-100 hover:bg-gray-300 text-gray-800'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {heure}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Résumé des disponibilités */}
      {Object.keys(disponibilites).length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Résumé des disponibilités :</h3>
          <ul className="space-y-3">
            {Object.entries(disponibilites).map(([date, heures]) => (
              <li key={date}>
                <p className="font-medium text-blue-800 mb-1">{date}</p>
                <div className="flex flex-wrap gap-2">
                  {heures.map((heure, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {heure}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Bouton enregistrer */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="mt-8 bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Enregistrer les disponibilités
        </button>
      </div>
    </div>
  )
}

export default DisponibiliteProf
