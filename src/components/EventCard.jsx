import { Link } from 'react-router-dom'

function EventCard({ event }) {
  return (
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition w-full">
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <p className="text-sm text-gray-400 mb-1">{event.date}</p>
      <p className="text-sm text-gray-400 mb-2">{event.location}</p>
      <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded">
        {event.category}
      </span>

      <Link
        to={`/event/${event.id}`}
        className="block mt-3 text-blue-600 underline hover:text-blue-800"
      >
        Ver detalles
      </Link>
    </div>
  )
}

export default EventCard
