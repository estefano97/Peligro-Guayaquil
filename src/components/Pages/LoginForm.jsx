import React from "react"
import InputForm from "../shared/InputForm";
import styles from "../styles/Login.module.css";
//import "./Login" nUNCA DEBES IMPORTAR EL PADRE DENTRO DEL COMPONENTE HIJO

const LoginForm = () => {
    return (
      <form className='logear'>
        <h1>Login</h1> <b>G</b> <h4>Peligro Guayaquil</h4>
        {/* <label>Nombres</label>
        <input type="text" className="name" placeholder="ingrese su nombre"/>
        <br/> */}
        
        <InputForm valor="text" name="Your name"/>

        <InputForm valor="text" name="Surname"/>

        <InputForm valor="email" name="Email"/>

        <InputForm valor="password" name="Password"/>

        <button className={styles.buttonSubmit} type="submit" value="Submit" >Register</button>
      </form>
    )
  };
  
  export default LoginForm;