import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import validator from 'validator';

import './SignupForm.css';

function SignupFormPage({setSignedIn}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, bio }))
        .then(res => {
          if(!res.data.errors) setSignedIn(true)})
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signup-page">
      <div className = "inner-signup-page">
        <form className="signup-form" onSubmit={handleSubmit}>
          <table className="signup-form-table">
            <thead>
              <tr>
                <th colSpan="2" className="signup-form-table-header">
                  S I G N • U P
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
                  className="signup-form-field"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E M A I L"
                  required/>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    placeholder="U S E R N A M E"
                    className="signup-form-field"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required/>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    placeholder="P A S S W O R D"
                    className="signup-form-field"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    placeholder="C O N F I R M • P A S S W O R D"
                    className="signup-form-field"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required/>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea className="signup-form-field signup-form-bio" placeholder="Tell us a little about yourself. If you sell an item, this bio will be available to other users." value={bio} onChange={e => setBio(e.target.value)}></textarea>
                </td>
              </tr>
              <tr className="signup-submit-container">
                  <button colSpan="2" className="signup-submit-button" type="submit" >S U B M I T</button>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="mission-statement">
          {"With the ability to view seller bios, follow those that you connect with, and view new items from those sellers on your dashboard, there arises the opportunity to buy from sellers you trust, and put money into people you support".split(' ').join('  ').toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default SignupFormPage;
