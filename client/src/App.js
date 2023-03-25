import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Error } from './components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
