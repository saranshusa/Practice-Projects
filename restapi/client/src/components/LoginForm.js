import React, { useState } from "react";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    fetch("/api/").then((data) => console.log(data));
  };

  return (
    <Container>
      <form onSubmit={submitForm}>
        <span>{errorMsg}</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={[password]}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  border-radius: 8px;
  border: 2px solid grey;
  position: absolute;
  top: 40vh;
  right: 50vw;
  transform: translateX(50%);
  background-color: rgba(255, 255, 255, 0.25);

  * {
    font-family: monospace;
  }

  span {
    width: 90vw;
    font-size: 1.25rem;
    padding: 5px;
    border-radius: 3px;
    text-align: center;
    margin: 10px;
    background-color: grey;
    color: #fff;
    font-family: monospace;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 90vw;
    font-size: 1.25rem;
    padding: 10px;
    padding-left: 20px;
    margin: 10px;
    outline: none;
    border: 2px grey solid;
    color: grey;
  }

  button {
    font-size: 1.25rem;
    padding: 10px 20px;
    color: grey;
    border-radius: 8px;
    border: 2px solid grey;
    margin: 10px;
    margin-bottom: 20px;
  }
`;
