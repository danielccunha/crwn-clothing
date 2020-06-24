import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { Container, Title } from "./styles";

import { auth, createUserDocument } from "../../config/firebase";

export default function SignUp() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords don't match!");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName: name });

      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="name"
          value={name}
          label="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </Container>
  );
}
