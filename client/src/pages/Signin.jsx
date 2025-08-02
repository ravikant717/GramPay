import PhoneForm from '../components/PhoneForm';
const Signin = () => {

  return (
    //TODO: Add Custom Auth 
    <div>
       <PhoneForm header="Sign In" footer_text="Don't have an account yet?" footer_link="/signup" footer_link_text="Sign up" />
    </div>
  )
}

export default Signin