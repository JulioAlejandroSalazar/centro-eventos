import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import EventPage from '../pages/EventPage'


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
      </Routes>
  )
}

export default AppRouter