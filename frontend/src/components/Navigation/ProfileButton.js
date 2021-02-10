import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {useHistory} from 'react-router-dom';
import './Navigation.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <div className="profile-menu-container">
      <button className="profile-outer-button underlined" onClick={openMenu}>
      <i className="far fa-user underlined"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
