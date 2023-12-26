import { useContext, useState } from 'react'
import "./style.scss"
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0);
  const {currentUser}=useContext(AuthContext)
  console.log(currentUser);

  return (
    // <Register/>
    // <Login/>
    // <Home/>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              // <ProtectedRoute>
                <Home />
              /* </ProtectedRoute> */
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
