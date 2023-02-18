import React, { useState, useEffect } from 'react'
import './App.css'

//Importing the data layet
import { useStateValue } from './components/StateProvider';
//Import firebase module
import { getAuth, onAuthStateChanged  } from "firebase/auth";
// import { auth } from './firebase';

//Import Components
import Header from './components/Header/Header'
// import Home from './components/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Pin from './components/Register/Pin'
import OTPBox from './components/Register/OTPBox'
// import Checkout from './components/Checkout/Checkout'
// import Account from './components/Login/Account'
// import ProtectedRoute from './components/ProtectedRoute'

//Importing authentication and authorization from firebase
// import { UserAuth } from './components/Context/AuthContext'

// Importing dependencies
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom'
import { AuthContextProvider } from './components/Context/AuthContext';


function App() {
  const [{ user }, dispatch] = useStateValue();
  const auth = getAuth();

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          // saving user to login
          // setUserInfo(currentUser)
          dispatch({
            type: 'SET_USER',
            user: currentUser,
          })

        } else {
          // logging out user
          // setUserInfo(null)
          dispatch({
            type: 'SET_USER',
            user: null,
          })
        }
      })
      return () => {
        //Any cleanup operation goes here
          unsubscribe();
      };
  }, []);

  return (
    <Router>
        <div className="app">
          <Header />
          <AuthContextProvider>
            <Routes> 
              {/* <Route path='/checkout' 
                element=
                  {
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  } 
              />
              <Route path='/account' 
                element=
                  {
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  } 
              /> */}
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/pin' element={<Pin />}/>
              <Route path='/otp' element={<OTPBox />}/>
              {/* <Route path="/" element={<Home />}/> */}
            </Routes>
          </AuthContextProvider>
        </div>
    </Router>
  )
}

export default App
