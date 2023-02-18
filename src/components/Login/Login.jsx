import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

// Import Authentication
import { UserAuth } from '../Context/AuthContext';

// Import fixed components

//Import styles and Icons
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState('');

  const { signIn } = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.error(e.message)
    }
  }

  return (  
    <div className='login'>
        {/* <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className='login__logo' />
        </Link> */}

        <div className="login__container">
          <h1>Sign in</h1>
          <form onSubmit={handleLogin}>
            <h5>E-mail</h5>
            <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input value={password} type="password" onChange={e => setPassword(e.target.value)} />
            <button className='login__signInButton'>Sign In</button>
          </form>

          <p>
            By Signing-in you agree to my Conditions of Service Agreement. For
            more info see our privacy Notice, our cookies Notice and gather data.
          </p>
          <Link to='/register'>
            <button className='login__registerButton'>Create your Amazon Account</button>
          </Link>

        </div>
    </div>
)
}

export default Login