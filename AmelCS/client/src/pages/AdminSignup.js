import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IMAGE from "../assets/bg15-1.svg";
import axios from "axios";

function Signup() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  function HandleLogin(e) {
    e.preventDefault();
    setErrorMsg("Authenticating...");
    axios
      .post("https://jackfruitapi.herokuapp.com/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        setErrorMsg(res.data["message"]);
        if (res.status === 201) {
          sessionStorage.setItem("userId", res.data["id"]);
          sessionStorage.setItem("email", email);
          navigate("/");
        }
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
      });
  }

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId !== null) {
      navigate("/admin");
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
          src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
        />
        <Link className="login" to="/adminlogin">
          Admin Log In
        </Link>
      </Nav>
      <Body>
        <Left />
        <Right>
          <Form>
            <h2>Create Admin Account</h2>
            {errorMsg && <p>{errorMsg}</p>}
            <div className="input-div">
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Email"
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
              <button type="submit">Signup</button>
            </div>
          </Form>
        </Right>
      </Body>
    </Main>
  );
}

export default Signup;

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

  .nav-img {
    margin-left: 25px;
    height: 35px;
  }

  .login {
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
  background: url(${IMAGE});
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat;
  background-color: rgba(245, 248, 252, 0.25098039215686274);
  border-right: solid 1px rgba(200, 200, 200, 0.5);

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Right = styled.div`
  display: grid;
  place-content: center;
  background: linear-gradient(to top, #a1ffce, #faffd1);

  @media screen and (max-width: 600px) {
    background: url(${IMAGE});
    background-position: -50px;
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
