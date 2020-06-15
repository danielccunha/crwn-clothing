import React, { useState } from "react";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { signInWithGoogle } from "../../utils/firebase";

import "./styles.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign In with Google
        </CustomButton>
      </form>
    </div>
  );
}
