import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import validator from 'validator';

import '../EntryPage.css';

function LoginForm({setSignedIn}) {
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
        <form className="entry-form" onSubmit={handleSubmit}>
          <table className="entry-form-table">
            <thead>
              <tr>
                <th className="entry-form-table-header">
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
                  className="entry-form-field"
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
                    className="entry-form-field"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                </td>
              </tr>
              <tr className="entry-submit-container">
                  <button colSpan="2" className="entry-submit-button" type="submit" >S U B M I T</button>
              </tr>
            </tbody>
          </table>
        </form>
  );
}

export default LoginForm;
