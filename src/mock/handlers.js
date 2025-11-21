import { http, HttpResponse, graphql } from 'msw'

const eventDetails = {
  "1": {
    organizer: "Live Nation",
    attendees: 1500,
    description: "Concierto de rock con bandas invitadas."
  },
  "2": {
    organizer: "TechChile",
    attendees: 300,
    description: "Conferencia sobre tendencias tecnologicas 2025."
  },
  "3": {
    organizer: "CulturaUrbana",
    attendees: 800,
    description: "Evento cultural artistico."
  }
}

export const handlers = [
  // REST: obtener todos los eventos
  http.get('/api/events', async () => {
    const res = await fetch('/data/events.json')
    const events = await res.json()
    return HttpResponse.json(events)
  }),

  // GraphQL: obtener detalle de evento por id
  graphql.query("GetEventDetail", ({ variables }) => {
    const { id } = variables
    const detail = eventDetails[id]
  
    if (!detail) {
      return HttpResponse.json({
        errors: [{ message: "Event not found" }]
      })
    }
  
    return HttpResponse.json({
      data: {
        eventDetail: {
          id,
          ...detail
        }
      }
    })
  })  
]
