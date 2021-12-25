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

  input:nth-child(6) {
    margin-top: 1vh;
    width: 40%;
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

const Resend = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  border: solid 0.5px;
  border-radius: 5px;
  padding: 5px 10px;
  font-style: oblique;
  cursor: default;
  background-color: rgba(117, 190, 218, 0.7);

  :hover {
    background-color: rgba(117, 190, 218, 0.9);
  }
`;

const VerifyOTP = ({ currentStep, email }) => {
  let navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("Enter OTP received on your email");

  async function handleLogin(e) {
    e.preventDefault();
    if (otp === "" || password === "" || password2 === "") {
      setStatus("Enter credentials first");
    } else if (password != password2) {
      setStatus("Passwords don't match!");
    } else {
      setStatus("Verifying OTP...");
      console.log(email);
      const response = await fetch(
        `https://dry-crag-58790.herokuapp.com/https://saranshapi.herokuapp.com/emailauth/?email=${email}&pass=${password}&otp=${otp}&action=3`
      );
      const data = await response.json();
      setStatus(data["message"]);
      if (data["status"] === "success") {
        setOtp("");
        setPassword("");
        setPassword2("");
        setTimeout(function () {
          setStatus("Redirecting to login");
        }, 1500);
        setTimeout(function () {
          navigate("/login");
        }, 2000);
      }
    }
  }
  const resend = () => {
    currentStep(1);
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <p>Reset Password</p>
        <p>{status}</p>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          maxLength="6"
          onChange={(e) => setOtp(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          maxLength="16"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confirm new password"
          value={password2}
          maxLength="16"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input type="submit" value="VERIFY & RESET" />
        <Resend onClick={resend}>Didn't received OTP ? Send again.</Resend>
      </Form>
      <div>
        <Link to="/">
          <p>HOME</p>
        </Link>
        <Link to="/login">
          <p>LOGIN</p>
        </Link>
        <Link to="/signup">
          <p>SIGNUP</p>
        </Link>
      </div>
    </Container>
  );
};

export default VerifyOTP;
