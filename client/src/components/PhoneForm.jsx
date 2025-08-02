import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Link } from 'react-router-dom'; // Use this for internal routing

const PhoneForm = ({ header, footer_text, footer_link, footer_link_text }) => {
  return (
    <div className='flex items-center justify-center bg-black h-screen'>
      <form className='flex border-auth-box-border flex-col p-10 bg-auth-bg gap-4 rounded-md'>
        <h2 className='font-bold text-lg font-form-data text-white'>{header}</h2>

        <Input
          className="border-auth-box-border bg-auth-box-inside font-form-data text-blue-600"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          className="border-auth-box-border bg-auth-box-inside font-form-data text-blue-600"
          type="password"
          placeholder="Enter your password"
        />

        <Button type="button" className="font-form-data"variant="outline">{header}</Button>

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
