import React from 'react'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
        <div className={styles.HeaderTextContainer}>
            <h1>Bienvenido a Seguridad Guayaquil</h1>
            <p>un sitio que te mantendra al tanto de los crimenes ocurridos en el Pais, y ofrecera graficas con datos reales ingresados por usuario</p>
        </div>
    </div>
  )
}

export default Header;