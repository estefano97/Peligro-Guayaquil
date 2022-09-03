import React from 'react'
//import "App.js" OTRA VEZ, NUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO
import styles from "../styles/Login.module.css";
import LoginForm from './LoginForm.jsx';
import securityIcon from "../img/security-camera.svg";

const Login = () => {
  return (
    <div className={styles.LoginBody}>
      <div className={styles.login}>
      <div className={styles.LoginImageContainer}>
        <img src={securityIcon} alt="" />
        <h1>Welcome</h1>
        <p>dianita el buebo me come ekisde.</p>
        <ul>
          <li>asdadsdsadsasddassadass</li>
          <li>asdadsdsadsasddassadass</li>
          <li>asdadsdsadsasddassadass</li>
        </ul>
      </div>
      <LoginForm/>
    </div>
    </div>
  )
};

export default Login;
