import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Signin from './pages/Signin'
import  SignUp  from './pages/Signup'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </div>    
  )
}

export default App