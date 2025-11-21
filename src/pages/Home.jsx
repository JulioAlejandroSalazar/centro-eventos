import { useEffect, useState } from 'react'
import { getEvents } from '../services/eventsApi'
import EventCard from '../components/EventCard'
import { Link } from 'react-router-dom'

function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents().then(setEvents)
  }, [])

  return (
    <div className="flex flex-col items-center p-6">
      <Link to="/" className="text-3xl font-bold mb-6 hover:text-blue-500">
        Centro de eventos
      </Link>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {events.map(ev => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </div>
  )
}

export default Home
