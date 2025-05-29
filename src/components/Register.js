import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    occupation: '',
    userType: '',
    birthDate: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Actualizar el estado cuando cambia un input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Opcional: limpiar error al corregir
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Validar datos antes de enviar
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'El nombre completo es obligatorio.';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio.';
    else if (!/^\d{7,15}$/.test(formData.phone.trim()))
      newErrors.phone = 'El teléfono debe tener entre 7 y 15 dígitos numéricos.';

    if (!formData.address.trim()) newErrors.address = 'La dirección es obligatoria.';
    if (!formData.occupation.trim()) newErrors.occupation = 'La ocupación es obligatoria.';
    if (!formData.userType) newErrors.userType = 'Debe seleccionar tipo de usuario.';
    if (!formData.birthDate) newErrors.birthDate = 'La fecha de nacimiento es obligatoria.';
    else {
      const birth = new Date(formData.birthDate);
      const today = new Date();
      if (birth >= today) newErrors.birthDate = 'La fecha de nacimiento debe ser en el pasado.';
    }
    if (!formData.email.trim()) newErrors.email = 'El correo electrónico es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Correo electrónico no es válido.';

    if (!formData.password.trim()) newErrors.password = 'La contraseña es obligatoria.';
    else if (formData.password.length < 6)
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí procesar datos, llamar API o lo que necesites
      console.log('Datos válidos para enviar:', formData);
      alert('Registro exitoso (simulado).');
      // Resetear formulario si quieres
      setFormData({
        fullName: '',
        phone: '',
        address: '',
        occupation: '',
        userType: '',
        birthDate: '',
        email: '',
        password: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Nombre completo */}
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="fullName"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>

        {/* Teléfono */}
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="phone"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Solo números, 7-15 dígitos"
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        {/* Dirección */}
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="address"
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>

        {/* Ocupación */}
        <div className="mb-3">
          <label className="form-label">Ocupación</label>
          <input
            type="text"
            name="occupation"
            className={`form-control ${errors.occupation ? 'is-invalid' : ''}`}
            value={formData.occupation}
            onChange={handleChange}
            required
          />
          {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
        </div>

        {/* Tipo de usuario */}
        <div className="mb-3">
          <label className="form-label">Tipo de usuario</label>
          <select
            name="userType"
            className={`form-select ${errors.userType ? 'is-invalid' : ''}`}
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione...</option>
            <option value="usuario">Usuario</option>
            <option value="proveedor">Proveedor</option>
          </select>
          {errors.userType && <div className="invalid-feedback">{errors.userType}</div>}
        </div>

        {/* Fecha de nacimiento */}
        <div className="mb-3">
          <label className="form-label">Fecha de nacimiento</label>
          <input
            type="date"
            name="birthDate"
            className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
          {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
        </div>

        {/* Correo electrónico */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-success w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;

