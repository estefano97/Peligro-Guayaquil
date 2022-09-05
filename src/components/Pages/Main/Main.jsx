import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';
import Header from './Header';
import styles from "./Main.module.css";

const Main = () => {

    const { IsLogin, setIsLogin } = useContext(GlobalContext);
    let navigate = useNavigate();

    const [CrimenesList, setCrimenesList] = useState([]);

    const handleLogOut = (e) => {
      setIsLogin(false);
    }

    const calledAllEvents = async () => {
      let res = await fetch("http://estefanochuquix-001-site1.ctempurl.com/api/crimenes");

      let data = await res.json();
      setCrimenesList(data);
      console.log(data);
    }
    
    useEffect(() => {
        if(!IsLogin) navigate("/login");
        calledAllEvents();
    }, [IsLogin]);

  return (
    <div>
        <Header/>
        <div className={styles.CrimenContainer}>
        {CrimenesList.map(el => <div className={styles.CrimenItem} key={el.id}>
          <h2>{el.tipo} - {el.fecha}</h2>
          <p>{el.provincia}-{el.canton}-{el.parroquia}</p>
        </div>)}
        </div>
        <button onClick={handleLogOut}>Cerrar Sesión</button>
    </div>
  )
}

export default Main;