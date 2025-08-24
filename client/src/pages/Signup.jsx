import PhoneForm from '../components/PhoneForm'
import React from 'react'

const Signup = () => {
  return (
  //TODO: Add Custom Auth 

  <div>
       <PhoneForm header="Sign Up" footer_text="Already have an account?" footer_link="/signin" footer_link_text="Sign in" />
    </div>
  )
}

export default Signup