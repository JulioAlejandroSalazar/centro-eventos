import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import EventDetail from '../components/EventDetail'
import { getEventDetail } from '../services/eventDetailApi'

function EventPage() {
  const { id } = useParams()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    getEventDetail(id).then(setDetail)
  }, [id])

  if (!detail) return <p className="p-6 text-center">Cargando...</p>

  return (
    <div className="flex flex-col items-center p-6">
      <Link to="/" className="text-3xl font-bold mb-6 hover:text-blue-500">
        Centro de eventos
      </Link>

      <h1 className="text-2xl font-bold mb-4">Detalle del evento</h1>
      <EventDetail detail={detail} />
    </div>
  )
}

export default EventPage
