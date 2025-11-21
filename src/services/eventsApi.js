import axios from 'axios'

export const getEvents = async () => {
  const res = await axios.get('/api/events')
  return res.data
}