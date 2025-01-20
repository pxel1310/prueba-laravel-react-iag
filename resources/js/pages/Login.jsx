import { useState } from 'react'
import '../../css/login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })

    const data = await response.json()

    if (data.token) {
      localStorage.setItem('token', data.token)
      window.location.reload()
    } else {
      alert('Inicio de sesión fallido')
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        {/* Header Section */}
        <div className="login-header">
          <h2>Iniciar sesión</h2>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form-content">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />

          {/* Submit Button */}
          <div>
            <button type="submit" className="submit-button">
              Iniciar sesión
            </button>
          </div>
        </form>
        <br />

        {/* Registration Link */}
        <div className="register-link">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta? <a href="/register">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
