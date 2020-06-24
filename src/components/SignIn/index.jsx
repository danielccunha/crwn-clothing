import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { Container, Title, Buttons } from "./styles";

import { auth, signInWithGoogle } from "../../config/firebase";

export default function SignIn() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      return history.push("/");
    } catch (error) {
      console.error(error);
    }

    return setPassword("");
  };

  return (
    <Container>
      <Title>I already have an account</Title>
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

        <Buttons>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </Buttons>
      </form>
    </Container>
  );
}
