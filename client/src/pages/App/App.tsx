import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../templates/Home'
import Hotel from '../../components/Hotel'
import List from '../../components/List'
import Login from '../../components/Login'
import Register from '../../components/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
