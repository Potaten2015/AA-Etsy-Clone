import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import './EntryPage.css';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import DemoForm from "./DemoForm"

function EntryPage({setSignedIn}) {
  const dispatch = useDispatch();
  const {type} = useParams()
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/" />;

  return (
    <div className="entry-page">
      <div className = "inner-entry-page">
        {type == 1 && <LoginForm />}
        {type == 2 && <SignupForm />}
        {type == 3 && <DemoForm />}
        <div className="mission-statement">
          {"With the ability to view seller bios, follow those that you connect with, and view new items from those sellers on your dashboard, there arises the opportunity to buy from sellers you trust, and put money into people you support. Welcome".split(' ').join('  ').toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
