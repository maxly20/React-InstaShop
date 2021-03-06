import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';


function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className='header'>
      {/* LOGO */}
      <Link to='/'>
        <img
          className='header__logo'
          src='https://i.ibb.co/H4Z60HH/instashop-logo.png'
          alt='logo'
        />
      </Link>

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      {/* 3 NAV LINKS */}
      <div className='header__nav'>
        {/* 1st link */}
        <Link to={!user && '/login'} className='header__link'>
          <div onClick={login} className='header__option'>
            <span className='header__optionLineOne'>Hello {user?.email}</span>
            <span className='header__optionLineTwo'>
              {user ? 'Sign out' : 'Sign In'}
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Track Your</span>
            <span className='header__optionLineTwo'>Package</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* Num of items */}
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* checkout icon with num */}
    </nav>
  );
}

export default Header;
