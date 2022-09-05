import React, { useContext, useEffect } from 'react'
//import "App.js" OTRA VEZ, NUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO
import styles from "./styles/Register.module.css";
import RegisterForm from './RegisterForm.jsx';
import securityIcon from "../../img/security-camera.svg";
import { GlobalContext } from '../../../GlobalContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const { IsLogin } = useContext(GlobalContext);
  let navigate = useNavigate();

  useEffect(() => {
    if(IsLogin) navigate("/");
  }, [IsLogin]);

  return (
    <div className={styles.RegisterBody}>
      <div className={styles.Register}>
      <div className={styles.RegisterImageContainer}>
        <img src={securityIcon} alt="" />
        <h1>Welcome</h1>
        <p>Hello this is an information page</p>
        <ul>
          <li>Create an account</li>
          <li>This site will help you to be informed of the most dangerous places</li>
          <li>Count on us</li>
        </ul>
      </div>
      <RegisterForm/>
    </div>
    </div>
  )
};

export default Register;
