import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

    const [IsLogin, setIsLogin] = useState(false);

  return (
    <GlobalContext.Provider value={{IsLogin, setIsLogin}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider