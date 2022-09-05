import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../GlobalContext";
import InputForm from "../../shared/InputForm";
import styles from "./styles/LoginForm.module.css";
//import "./Login" nUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO

const LoginForm = () => {

  const { IsLogin, setIsLogin } = useContext(GlobalContext);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    let request = {
      Email: e.target.Email.value,
      Password: e.target.Password.value
    };
    
    let res = await fetch("http://estefanochuquix-001-site1.ctempurl.com/api/auth/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    });

    let getData = await res.json();

    if(!getData.name) return;

    setIsLogin(true);

  }

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
      <form onSubmit={handleSubmitLogin} className={styles.logear}>
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
