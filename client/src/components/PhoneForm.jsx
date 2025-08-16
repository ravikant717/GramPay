import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Link } from 'react-router-dom'; // Use this for internal routing
import { useAuthStore } from '@/store/useAuthStore';
import toast from 'react-hot-toast';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const PhoneForm = ({ header, footer_text, footer_link, footer_link_text }) => {
  const [showPassword, setShowPassword] = useState(false); //TODO: Add eye icon in password commands
  
  const [formData, setFormData] = useState({
    email: "", 
    password: "", 
  })

  const {signup, isAuthenticating, signin} = useAuthStore(); 

  const validateForm = () => {
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password) return toast.error("Password is required");
        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");


        return true; 
        
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const success = validateForm(); 

    if (success === true) {
      if(header === "Sign Up") {
        signup(formData);
      } else {
        signin(formData); 
      }
    }
  }
  return (
    <div className='flex items-center justify-center bg-black h-screen'>
      <form onSubmit={handleSubmit} className='flex border-auth-box-border flex-col p-10 bg-auth-bg gap-4 rounded-md'>
        <h2 className='font-bold text-lg font-form-data text-white'>{header}</h2>

        <Input
          className="border-auth-box-border bg-auth-box-inside font-form-data text-blue-600"
          type="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange = {(e) => setFormData({...formData, email: e.target.value})}
        />

        <Input
          className="border-auth-box-border bg-auth-box-inside font-form-data text-blue-600"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange = {(e) => setFormData({...formData, password: e.target.value})}
        />

        <Button type="submit" disabled={isAuthenticating} className="font-form-data" variant="outline">
          {isAuthenticating ? (
            <DotLottieReact
              src="/animations/materialwave.lottie"
              autoplay
              loop
            />
          ) : header}
        </Button>

        <p className='text-white text-sm font-form-data'>
          {footer_text}{' '}
          <Link to={footer_link} className='text-blue-500 hover:underline'>
            {footer_link_text}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default PhoneForm;
