import React from "react";
import { NavLink } from "react-router-dom";
import InputForm from "../../shared/InputForm";
import styles from "./styles/LoginForm.module.css";
//import "./Login" nUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO

const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.loginFormText}>
        <div className={styles.TextPrincipal}>
        <h2>Inicia Sesión</h2> / <NavLink to="/register"><h4>Registrate</h4></NavLink>
        </div>
        <div>
          <p>No tienes cuenta?</p>
        </div>
      </div>
      <form className={styles.logear}>
        <InputForm type="email" valor="Email" name="Email" />

        <InputForm type="password" valor="Password" name="Password" />

        <button className={styles.buttonSubmit} type="submit" value="Submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
