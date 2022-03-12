import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  function HandleLogin(e) {
    e.preventDefault();
    setErrorMsg("Authenticating...");
    axios
      .post("https://amelcs.herokuapp.com/login", {
        username: email,
        password: password,
      })
      .then((res) => {
        setErrorMsg(res.data["message"]);
        if (res.status === 200) {
          sessionStorage.setItem("userId", res.data["username"]);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
      });
  }

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId !== null) {
      navigate("/dashboard");
    }
  }

  useEffect(() => {
    CheckAuth();
  }, []);

  return (
    <Main>
      <Nav>
        <img
          className="nav-img"
          onClick={() => navigate("/")}
          src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
        />
        <Link className="signup" to="/">
          Home
        </Link>
        {/* <Link className="signup" to="/signup">
          Sign Up
        </Link> */}
      </Nav>
      <Body>
        <Left>
          <p>Sign in to your IRCC secure account</p>
        </Left>
        <Right>
          <Form onSubmit={HandleLogin}>
            <h2>Sign In to your Account</h2>
            {errorMsg && <p>{errorMsg}</p>}
            <div className="input-div">
              <span>Username</span>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-div">
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Password"
                required
              />
            </div>
            <div className="input-div">
              <button type="submit">Login</button>
            </div>
          </Form>
        </Right>
      </Body>
    </Main>
  );
}

export default Login;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px auto;
`;

const Nav = styled.div`
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;

  @media screen and (max-width: 500px) {
    width: 100%;

    .signup {
      display: none;
    }

    .nav-img {
      margin-left: 10px !important;
      margin-right: 10px !important;
      width: 100%;
    }
  }

  .nav-img {
    margin-left: 25px;
    height: 35px;
  }

  .signup {
    font-size: 1.25rem;
    margin-right: 25px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100vw;
  }
`;

const Left = styled.div`
  background: url("https://picsum.photos/1000/1000");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(245, 248, 252, 0.25098039215686274);
  border-right: solid 1px rgba(200, 200, 200, 0.5);

  @media screen and (max-width: 600px) {
    display: none;
  }

  p {
    text-align: center;
    margin: 5%;
    margin-top: 5vh;
    font-size: 2rem;
    line-height: 1.75;
    max-width: 50vw;
    font-weight: bold;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
  }
`;

const Right = styled.div`
  display: grid;
  place-content: center;
  background: linear-gradient(to top, #a1ffce, #faffd1);

  @media screen and (max-width: 600px) {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .input-div {
      width: 90vw !important;
    }
  }
`;

const Form = styled.form`
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  p {
    text-align: center;
    font-family: monospace;
    padding: 10px;
    background-color: #333;
    color: #fff;
    margin: 15px 0;
    margin-bottom: 25px;
    border-radius: 5px;
  }

  .input-div {
    display: flex;
    flex-direction: column;
    width: 35vw;
    max-width: 400px;
    margin-bottom: 25px;
  }

  span {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    font-size: 1.25rem;
    outline: none;
    border-radius: 5px;
    border: 1px solid #a0a0a0;
  }

  button {
    font-size: 1.15rem;
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #418af2;
    background-color: #418af2;
    color: white;
  }
`;
