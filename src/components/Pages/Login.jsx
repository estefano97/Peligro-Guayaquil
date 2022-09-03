import React from 'react'
//import "App.js" OTRA VEZ, NUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO
import styles from "../styles/Login.module.css";
import LoginForm from './LoginForm.jsx';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.LoginImageContainer}>
      </div>
      <LoginForm/>
    </div>
  )
};

export default Login;
