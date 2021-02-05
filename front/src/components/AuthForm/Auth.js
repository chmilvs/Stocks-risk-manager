import { useState } from 'react';
import LoginForm from './LoginForm'
import RegForm from './RegForm'
function Auth() {

let [state, setState] = useState(false)
const LoginOrSignupForm = (event) => {
  event.preventDefault()
  setState(!state)
}

  return (
    <>
      {state ? <RegForm setState={LoginOrSignupForm}/> : <LoginForm setState={LoginOrSignupForm}/>}
    </>
  );
}

export default Auth;
