import { useNavigate } from "react-router-dom"

function EventDetail({ detail }) {
  const navigate = useNavigate()

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow border border-gray-700">

      {/* Botón Volver */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
      >
        ← Volver
      </button>

      <h1 className="text-3xl font-bold mb-3 text-white">{detail.title}</h1>
      <p className="text-gray-300"><strong className="text-white">Fecha:</strong> {detail.date}</p>
      <p className="text-gray-300"><strong className="text-white">Hora:</strong> {detail.time}</p>
      <p className="text-gray-300"><strong className="text-white">Ubicación:</strong> {detail.location}</p>
      <p className="text-gray-300"><strong className="text-white">Categoría:</strong> {detail.category}</p>
      <p className="text-gray-300"><strong className="text-white">Organizador:</strong> {detail.organizer}</p>
      <p className="text-gray-300"><strong className="text-white">Capacidad:</strong> {detail.capacity}</p>
      <p className="text-gray-300"><strong className="text-white">Asistentes:</strong> {detail.attendees}</p>
      <h2 className="text-xl font-semibold mt-4 text-white">Descripción</h2>
      <p className="text-gray-300 mt-1">{detail.description}</p>

    </div>
  )
}

export default EventDetail
