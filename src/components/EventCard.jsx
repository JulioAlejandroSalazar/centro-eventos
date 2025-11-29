import { Link } from 'react-router-dom'

function EventCard({ event }) {
  return (
    <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg transition w-full bg-gray-900">

      <h2 className="text-xl font-bold mb-1 text-white">{event.title}</h2>

      <p className="text-sm text-gray-400">{event.date} — {event.time}</p>
      <p className="text-sm text-gray-400 mb-2">{event.location}</p>

      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
        {event.category}
      </span>

      <Link
        to={`/event/${event.id}`}
        className="block mt-4 text-blue-400 underline hover:text-blue-300"
      >
        Ver detalles →
      </Link>
    </div>
  )
}

export default EventCard
