import { useState } from 'react'
import "./style.scss"
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Register/>
    // <Login/>
    <Home/>
    )
}

export default App