import React from "react";
import { NavLink } from "react-router-dom";
import InputForm from "../../shared/InputForm";
import styles from "./styles/RegisterForm.module.css";
//import "./Register" nUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO

const RegisterForm = () => {
  return (
    <div className={styles.RegisterFormContainer}>
      <div className={styles.RegisterFormText}>
        <div className={styles.TextPrincipal}>
        <h2>Registrate</h2> / <h4><NavLink to="/login">Inicia Sesión</NavLink></h4>
        </div>
        <div>
          <p>No tienes cuenta?</p>
        </div>
      </div>
      <form className={styles.registerForm}>
        <InputForm type="text" valor="Nombre" name="Your name" />

        <InputForm type="text" valor="Apellido" name="Surname" />

        <InputForm type="email" valor="Email" name="Email" />
        
        <InputForm type="number" valor="Celular" name="Celular" />

        <InputForm type="password" valor="Password" name="Password" />

        <button className={styles.buttonSubmit} type="submit" value="Submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
