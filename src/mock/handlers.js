import events from './data/events.json'
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
  // REST
  http.get('/api/events', () => {
    return HttpResponse.json(events)
  }),

  // GraphQL
  graphql.query("GetEventDetail", ({ variables }) => {
    const { id } = variables
    const detail = eventDetails[id]

    if (!detail) {
      return HttpResponse.json({ errors: [{ message: "Event not found" }] })
    }

    return HttpResponse.json({ data: { eventDetail: { id, ...detail } } })
  })
]