import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

//Import styles and Icons
import './Account.css'


const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

//   return (
//     <div className='max-w-[600px] mx-auto my-16 p-4'>
//       <h1 className='text-2xl font-bold py-4'>Account</h1>
//       <p>User Email: {user && user.email}</p>
//       <h1>Confirm Signout</h1>
//       <button onClick={handleLogout} className='border px-6 py-2 my-4'>
//         Logout
//       </button>
//     </div>
//   );

  return (  
    <div className='logout'>

        <div className="logout__container">
            <h1>Confirm Signout</h1>
            <h5>User Email: {user && user.email}</h5>
            <button onClick={handleLogout} className='logout__signInButton' >Sign Out</button>
        </div>

    </div>
)
};

export default Account;