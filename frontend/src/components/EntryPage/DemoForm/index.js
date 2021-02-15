import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";

import '../EntryPage.css';

function DemoForm({setSignedIn}) {
    const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ email: "demo@user.io", password: "password" }))
  }

  return (
        <form className="entry-form" onSubmit={handleSubmit}>
          <table className="entry-form-table">
            <thead>
              <tr>
                <th colSpan="2" className="entry-form-table-header">
                  E N T E R • A S • D E M O • U S E R
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="entry-submit-container">
                  <button onClick={handleSubmit} colSpan="2" className="entry-submit-button" type="submit" >E N T E R</button>
              </tr>
            </tbody>
          </table>
        </form>
  );
}

export default DemoForm;
