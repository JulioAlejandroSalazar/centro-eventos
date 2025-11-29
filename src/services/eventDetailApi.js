import axios from 'axios'

export const getEventDetail = async (id) => {
  const url = `${import.meta.env.BASE_URL}graphql`

  const query = `
    query GetEventDetail($id: ID!) {
      eventDetail(id: $id) {
        id
        title
        date
        time
        location
        category
        organizer
        capacity
        attendees
        description
      }
    }
  `

  const res = await axios.post(url, {
    query,
    variables: { id }
  })

  return res.data.data.eventDetail
}
