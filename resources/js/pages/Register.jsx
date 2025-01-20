import { useState } from 'react'
import "../../css/login.css"


function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== passwordConfirmation) {
      alert('Las contraseñas no coinciden')
      return
    }

    const response = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        name: email.split('@')[0],
      }),
    })

    const data = await response.json()

    if (data.token) {
      localStorage.setItem('token', data.token)
      window.location.reload()
    } else {
      alert('Registro fallido')
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        {/* Header Section */}
        <div className="login-header">
          <h2>Registrarse</h2>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="login-form-content">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="passwordConfirmation">Confirmar contraseña</label>
            <input
              type="password"
              id="passwordConfirmation"
              placeholder="••••••••"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="submit" className="submit-button">
              Registrarse
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="register-link">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
