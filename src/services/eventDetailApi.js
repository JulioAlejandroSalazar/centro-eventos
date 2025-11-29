import { mockEvents } from './eventsApi'

export const getEventDetail = async (id) => {
  return new Promise((resolve, reject) => {
    const event = mockEvents.find(ev => ev.id === id)
    setTimeout(() => {
      if (event) resolve(event)
      else reject(new Error('Evento no encontrado'))
    }, 300)
  })
}
