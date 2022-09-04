import React, { useContext } from 'react'
//import "App.js" OTRA VEZ, NUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO
import styles from "./styles/Login.module.css";
import LoginForm from './LoginForm.jsx';
import securityIcon from "../../img/security-camera.svg";
import { GlobalContext } from '../../../GlobalContext';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {

  const { IsLogin } = useContext(GlobalContext);

  useEffect(() => {
    if(IsLogin) Navigate("/");
  }, [IsLogin]);

  return (
    <div className={styles.LoginBody}>
      <div className={styles.login}>
      <div className={styles.LoginImageContainer}>
        <img src={securityIcon} alt="" />
        <h1>Welcome</h1>
        <p>You are on the alert information site.</p>
        <ul>
          <li>create your account if you don't have one</li>
          <li>You can find the most dangerous places with us.</li>
          <li>share your information with us</li>
        </ul>
      </div>
      <LoginForm/>
    </div>
    </div>
  )
};

export default Login;
