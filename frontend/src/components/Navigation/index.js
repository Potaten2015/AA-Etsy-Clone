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
        <NavLink className='navlinks' to='/cart'>C A R T</NavLink>
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
          <NavLink className='navlinks' to="/home">H O M E</NavLink>
          {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
