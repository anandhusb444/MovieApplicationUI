import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componets/NavBar'
import Login from './Componets/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>

    </Router>
    
    
    </>
  )
}

export default App
