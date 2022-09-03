import React from 'react'
import styles from "../styles/LoginForm.module.css";

const InputForm = (props) => {
  
  return (
    <div className={styles.inputForm}>
        <label htmlFor={props.valor}>{props.name}</label>
        <input type={props.type} name={props.valor} id={props.valor} {...props}  />
    </div>
  )
}

export default InputForm 