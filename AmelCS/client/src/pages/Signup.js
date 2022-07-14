import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IMAGE from "../assets/bg15-1.svg";
import axios from "axios";

function Signup() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [isAuthGen, setIsAuthGen] = useState(false);

  function HandleLogin(e) {
    e.preventDefault();
    setErrorMsg("Generating...");
    axios
      .post("https://canada-main.herokuapp.com/signup", {
        email: email,
      })
      .then((res) => {
        setErrorMsg(res.data["message"]);
        if (res.status === 201) {
          setUsername(res.data["username"]);
          setPassword(res.data["password"]);
          setIsAuthGen(true);
          sessionStorage.setItem("userId", res.data["username"]);
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
          src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
        />
        <Link className="login" to="/login">
          Log In
        </Link>
      </Nav>
      <Body>
        <Left>
          <p>Create your IRCC secure account</p>
        </Left>
        {!isAuthGen && (
          <Right>
            <Form onSubmit={HandleLogin}>
              <h2>Generate your unique Username & Password</h2>
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
                <button type="submit">Generate</button>
              </div>
            </Form>
          </Right>
        )}
        {isAuthGen && (
          <Right>
            <h2>Welcome!</h2>
            <div className="auth-box">
              <p className="auth-title">Here are your credentials</p>
              <p className="auth-head">
                Username<span>{username}</span>
              </p>
              <p className="auth-head">
                Password<span>{password}</span>
              </p>
              <p className="auth-footer">
                Your login credentials have also been sent to your email
                address.
              </p>
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Go to Dashboard
              </button>
            </div>
          </Right>
        )}
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

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 600px) {
    background: url(${IMAGE});
    background-position: -50px;
    background-size: cover;
    background-repeat: no-repeat;

    .input-div {
      width: 90vw !important;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .auth-box {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    font-size: 1.25rem;
    max-width: 400px;
    border: solid 3px #333;
  }

  .auth-title,
  .auth-footer {
    font-size: 1.1rem;
    font-style: italic;
    margin-bottom: 40px;
  }

  .auth-footer {
    margin-top: 40px;
  }

  .auth-head {
    font-weight: bold;
    margin-bottom: 15px;
    font-family: monospace;
  }

  .auth-head span {
    font-family: monospace;
    padding: 5px 10px;
    background-color: bisque;
    border-radius: 5px;
    margin-left: 20px;
    font-weight: normal;
  }

  button {
    font-size: 1.15rem;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #418af2;
    background-color: #418af2;
    color: white;
    margin-left: 100px;
    margin-right: 100px;
    min-width: max-content;
  }
`;

const Form = styled.form`
  h2 {
    text-align: center;
    margin-bottom: 40px;
    max-width: 400px;
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
