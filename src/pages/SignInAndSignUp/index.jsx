import React from "react";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import "./styles.scss";

export default function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
