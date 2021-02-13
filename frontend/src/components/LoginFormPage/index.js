import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import validator from 'validator';

import './LoginFormPage.css';

function LoginFormPage({setSignedIn}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }

  return (
    <div className="login-page">
      <div className = "inner-login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <table className="login-form-table">
            <thead>
              <tr>
                <th colSpan="2" className="login-form-table-header">
                  L O G I N
                  <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                  </ul>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <input
                  className="login-form-field"
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  placeholder="E M A I L or U S E R N A M E"
                  required/>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    placeholder="P A S S W O R D"
                    className="login-form-field"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                </td>
              </tr>
              <tr className="login-submit-container">
                  <button colSpan="2" className="login-submit-button" type="submit" >S U B M I T</button>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="mission-statement">
          {"With the ability to view seller bios, follow those that you connect with, and view new items from those sellers on your dashboard, there arises the opportunity to buy from sellers you trust, and put money into people you support. Welcome back :)".split(' ').join('  ').toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;
