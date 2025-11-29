import axios from "axios"

export const getEvents = async () => {
  const url = `${import.meta.env.BASE_URL}api/events`
  const res = await axios.get(url)
  return res.data
}
