import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la lógica de autenticación
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div>
      <div className="register-container">
        <h1 className="register-title">Regístrate</h1>
        <form className="register_form" noValidate onSubmit={handleSubmit}>
          <fieldset className="register__form-email">
            <input
            className="register__form_inputs"
              type="email"
              id="email"
              placeholder="Correo Electronico"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </fieldset>
          <fieldset className="register__form-password">
            <input
            className="register__form_inputs"
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </fieldset>
          <button className="register__form-button" type="submit">Registrate</button>
        </form>
        <p>
          ¿Ya eres miembro? <a className="register__link" href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
