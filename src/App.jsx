import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout'
import ReferralDetails from './pages/ReferralDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route  element = {
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
        }>
          <Route path = "/" element = {<Dashboard/>}/>
          <Route path = "/referral/:id" element = {<ReferralDetails/>}/>
        </Route>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    
    </BrowserRouter>
       
   
  )
}

export default App