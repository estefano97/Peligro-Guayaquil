import React from "react";
import InputForm from "../shared/InputForm";
import styles from "../styles/LoginForm.module.css";
//import "./Login" nUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO

const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.loginFormText}>
        <div className={styles.TextPrincipal}>
        <h2>Login</h2> / <h4>sign up</h4>
        </div>
        <div>
          <p>No tienes cuenta?</p>
        </div>
      </div>
      <form className={styles.logear}>
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

export default LoginForm;
