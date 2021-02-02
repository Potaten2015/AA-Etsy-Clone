import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className='navlinks' to='/browse'>Browse</NavLink>
        <NavLink className='navlinks' to='/cart'>Cart</NavLink>
        <ProfileButton className='navlinks' user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className='navlinks' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar'>
      <div className='navbar-list'>
          <NavLink className='navlinks' exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
