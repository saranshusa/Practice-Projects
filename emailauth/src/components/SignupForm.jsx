import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    349deg,
    rgba(28, 178, 255, 1) 0%,
    rgba(20, 115, 255, 1) 100%
  );

  div {
    position: absolute;
    display: flex;
    left: 50vw;
    transform: translate(-50%);
    top: 0;

    p {
      margin: 1vh 1vw;
      background-color: pink;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 600;

      :hover {
        background-color: #ffaebb;
      }
    }

    * {
      text-decoration: none;
      color: black;
      cursor: default;
    }
  }
`;

const Form = styled.form`
  input {
    border: none;
    background-color: #dfdfdf;
    padding: 10px 15px;
    width: 80%;
    margin-bottom: 3vh;
    border-radius: 2px;
  }

  input:nth-child(5) {
    margin-top: 1vh;
    width: 30%;
    font-weight: 600;
    font-size: 1rem;
    background-color: #00ff80;
    border-radius: 5px;

    :hover {
      background-color: #00e2bc;
    }
  }

  p:nth-child(1) {
    margin: 2vh 0;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
  }

  p:nth-child(2) {
    margin: 2vh 0;
    background-color: #202020;
    width: 80%;
    padding: 10px 5px;
    color: white;
    text-align: center;
    font-family: monospace;
    border-radius: 5px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const SignupForm = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("Create new account");

  async function handleLogin(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      setStatus("Enter credentials first");
    } else {
      setStatus("authenticating...");
      const response = await fetch(
        `https://dry-crag-58790.herokuapp.com/https://saranshapi.herokuapp.com/emailauth/?email=${email}&pass=${password}&action=1`
      );
      const data = await response.json();
      setStatus(data["message"]);
      if (data["status"] === "success") {
        const sessionData = { email: email, uid: data["uid"] };
        setTimeout(function () {
          navigate("/dashboard", { state: sessionData });
        }, 500);
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <p>Welcome User</p>
        <p>{status}</p>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          maxLength="16"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="SIGNUP" />
      </Form>
      <div>
        <Link to="/">
          <p>HOME</p>
        </Link>
        <Link to="/login">
          <p>LOGIN</p>
        </Link>
      </div>
    </Container>
  );
};

export default SignupForm;
