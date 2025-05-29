import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>

      {/* Aquí los enlaces adicionales */}
      <div className="mt-3 d-flex justify-content-between">
        <Link to="/forgot-password">Olvidé mi contraseña</Link>
        <Link to="/register">Registrarse</Link>
      </div>
    </div>
  );
}

export default Login;


