import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import EventPage from '../pages/EventPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter