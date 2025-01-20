import './bootstrap'


import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx' // Importa el nuevo componente de registro

function App() {
  const [authToken, setAuthToken] = useState(null)

  useEffect(() => {
    // Verifica si hay un token de autenticación en el localStorage
    const token = localStorage.getItem('token')
    setAuthToken(token)
  }, [])

  // Si no hay token, redirigir a login
  const PrivateRoute = ({ element }) => {
    if (!authToken) {
      return <Navigate to="/login" />
    }
    return element
  }

  // Si hay token, redirigir a home
  const PublicRoute = ({ element }) => {
    if (authToken) {
      return <Navigate to="/" />
    }
    return element
  }

  return (
    <Router>
      <Routes>
        {/* Ruta pública para login y register, si ya está autenticado no puede acceder */}
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route
          path="/register"
          element={<PublicRoute element={<Register />} />}
        />

        {/* Ruta protegida, solo accesible si hay token */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('app')).render(<App />)
