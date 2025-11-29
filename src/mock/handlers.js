import events from './data/events.json'
import { http, HttpResponse, graphql } from 'msw'

const base = import.meta.env.BASE_URL

const eventDetails = {
  "1": {
    title: events[0].title,
    date: events[0].date,
    time: events[0].time,
    location: events[0].location,
    category: events[0].category,
    organizer: "Live Nation",
    capacity: 50000,
    attendees: 1500,
    description: "Concierto de rock con bandas invitadas."
  },
  "2": {
    title: events[1].title,
    date: events[1].date,
    time: events[1].time,
    location: events[1].location,
    category: events[1].category,
    organizer: "TechChile",
    capacity: 1200,
    attendees: 300,
    description: "Conferencia sobre tendencias tecnológicas 2025."
  },
  "3": {
    title: events[2].title,
    date: events[2].date,
    time: events[2].time,
    location: events[2].location,
    category: events[2].category,
    organizer: "CulturaUrbana",
    capacity: 3000,
    attendees: 800,
    description: "Evento cultural artístico."
  }
}

export const handlers = [
  // REST
  http.get(`${base}api/events`, () => {
    return HttpResponse.json(events)
  }),

  // GraphQL
  graphql.query("GetEventDetail", ({ variables }) => {
    const { id } = variables
    const detail = eventDetails[id]

    if (!detail) {
      return HttpResponse.json({ errors: [{ message: "Event not found" }] })
    }

    return HttpResponse.json({
      data: { eventDetail: { id, ...detail } }
    })
  })
]
