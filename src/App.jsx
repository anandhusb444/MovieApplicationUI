import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componets/NavBar'
import Login from './Componets/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar1 from './Componets/NavBarM'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='newBar' element={<NavBar1/>}/>
      </Routes>

    </Router>
    
    
    </>
  )
}

export default App
