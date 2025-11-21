import axios from 'axios'

export const getEventDetail = async (id) => {
  const query = `
    query GetEventDetail($id: ID!) {
      eventDetail(id: $id) {
        id
        organizer
        attendees
        description
      }
    }
  `

  const res = await axios.post('/graphql', {
    query,
    variables: { id }
  })

  return res.data.data.eventDetail
}