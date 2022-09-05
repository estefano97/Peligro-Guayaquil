import React from 'react'
import "./App.css"
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from "./components/Pages/Login/Login"
import Register from './components/Pages/Register/Register';
import GlobalContextProvider from './GlobalContext';
import Main from './components/Pages/Main/Main';



function App() {
  return (
  <GlobalContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/register"  element={<Register/>}/>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  </GlobalContextProvider>
  )
};

export default App;
