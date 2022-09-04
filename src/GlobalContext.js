import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

  const [IsLogin, setIsLogin] = useState(
    window.localStorage.getItem("IsLogin") === "true" ? true : false
  );

  useEffect(() => {
    console.log(IsLogin);
    window.localStorage.setItem("IsLogin", IsLogin);
  }, [IsLogin]);
  

  return (
    <GlobalContext.Provider value={{IsLogin, setIsLogin}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider