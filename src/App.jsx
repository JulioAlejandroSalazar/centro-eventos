import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
