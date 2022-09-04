import React from 'react'
import "./App.css"
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from "./components/Pages/Login/Login"
import Register from './components/Pages/Register/Register';



function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/register"  element={<Register/>}/>
    <Route path='/' element={<div><h1>ESTE ES LA PAGINA DE INICIO WACHO</h1></div>}/>
   </Routes>
  </BrowserRouter>
  )
};

export default App;
