import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

  const [IsLogin, setIsLogin] = useState(
    window.localStorage.getItem("IsLogin") === "true" ? true : false
  );

  const [ModalAdd, setModalAdd] = useState(false);

  useEffect(() => {
    console.log(IsLogin);
    window.localStorage.setItem("IsLogin", IsLogin);
  }, [IsLogin]);
  

  return (
    <GlobalContext.Provider value={{IsLogin, setIsLogin, ModalAdd, setModalAdd}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider