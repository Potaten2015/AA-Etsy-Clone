import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded, setSignedIn }){

  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    setSignedIn(false)
    history.push('/')
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className='navlinks underlined' to='/cart'>C A R T</NavLink>
        <NavLink className='navlinks underlined' to='/' onClick={logout}>L O G • O U T</NavLink>
        <ProfileButton className='navlinks' user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className='navlinks' to="/signup">S I G N • I N</NavLink>
      </>
    );
  }

  return (
    <div className='navbar'>
      <div className='navbar-list'>
          <NavLink className='navlinks underlined' to="/home">H O M E</NavLink>
          {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
