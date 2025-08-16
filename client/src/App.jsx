import React, { useEffect } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Signin from './pages/Signin'
import  SignUp  from './pages/Signup'
import Home from './pages/Home'
import { useAuthStore } from './store/useAuthStore'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import {Toaster} from 'react-hot-toast'; 
const App = () => {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore();  

 useEffect(() => {
    checkAuth();
  }, [checkAuth]);

 
  console.log(authUser); 


   if (isCheckingAuth && !authUser) {
     return (
       <DotLottieReact
         src="/animations/loading.lottie"
         autoplay
         loop
                
       />
     );
   }   
  return (
    <div>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>

      <Toaster />
    </div>    
  )
}

export default App