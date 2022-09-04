import React from 'react'
//import "App.js" OTRA VEZ, NUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO
import styles from "./styles/Login.module.css";
import LoginForm from './LoginForm.jsx';
import securityIcon from "../../img/security-camera.svg";

const Login = () => {
  return (
    <div className={styles.LoginBody}>
      <div className={styles.login}>
      <div className={styles.LoginImageContainer}>
        <img src={securityIcon} alt="" />
        <h1>Welcome</h1>
        <p>You are on the city alert information site</p>
        <ul>
          <li>Here you can inform us about the crimes seen during the day.</li>
          <li>with us you can find out about the most dangerous places</li>
          <li>share your information with us</li>
        </ul>
      </div>
      <LoginForm/>
    </div>
    </div>
  )
};

export default Login;
