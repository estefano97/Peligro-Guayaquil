import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';

const Main = () => {

    const { IsLogin } = useContext(GlobalContext);
    let navigate = useNavigate();

    useEffect(() => {
        if(!IsLogin) navigate("/login");
    }, [IsLogin]);

  return (
    <div>
        <h1>Bienevenido  a la pagina de incio</h1>
    </div>
  )
}

export default Main;