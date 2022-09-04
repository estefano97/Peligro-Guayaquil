import React, { useContext, useEffect } from 'react'
//import "App.js" OTRA VEZ, NUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO
import styles from "./styles/Register.module.css";
import RegisterForm from './RegisterForm.jsx';
import securityIcon from "../../img/security-camera.svg";
import { GlobalContext } from '../../../GlobalContext';
import { Navigate } from 'react-router-dom';

const Register = () => {

  const { IsLogin } = useContext(GlobalContext);

  useEffect(() => {
    if(!IsLogin) Navigate("/");
  }, [IsLogin]);

  return (
    <div className={styles.RegisterBody}>
      <div className={styles.Register}>
      <div className={styles.RegisterImageContainer}>
        <img src={securityIcon} alt="" />
        <h1>Welcome</h1>
        <p>You are on the alert information site.</p>
        <ul>
          <li>create your account if you don't have one</li>
          <li>You can find the most dangerous places with us.</li>
          <li>share your information with us</li>
        </ul>
      </div>
      <RegisterForm/>
    </div>
    </div>
  )
};

export default Register;
