import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/" element = {
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    
    </BrowserRouter>
       
   
  )
}

export default App