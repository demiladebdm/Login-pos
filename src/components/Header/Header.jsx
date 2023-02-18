import React from 'react'

//Routers
import { Link, useNavigate } from 'react-router-dom'

//Import higher order components
import { useStateValue } from '../StateProvider'

//import style and Icons
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();

  return (
    <nav className='header'>
      <Link to='/'>
        <img 
          className='header__logo' 
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" 
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />  
      </div>

      <div className="header__nav">
        <Link to={!user ? '/login' : '/account'} className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Hello {user && user.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
      </div>

      <Link to='/checkout' className='header__link'>
        <div className="header__optionBasket">
          <ShoppingCartIcon />            
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
      </Link>
    </nav>
  )
}

export default Header
