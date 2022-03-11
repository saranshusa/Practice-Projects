import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function App() {
  let navigate = useNavigate();

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId != null) {
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
        <p className="logout" onClick={() => navigate("/login")}>
          Login
        </p>
      </Nav>
      <Container>
        <h1>Sign in to your IRCC secure account</h1>
        <p>
          Your account lets you start an application, submit and pay for your
          application, get messages related to your application, check the
          status of your application and update your information.
        </p>
      </Container>

      <Body>
        <Card>
          <h1>GCKey</h1>
          <p>Sign in with your User ID and Password</p>
          <button onClick={() => navigate("/login")}>Sign in</button>
        </Card>
        <Card>
          <h1>Sign-In Partner</h1>
          <p>
            Sign in with your online Canadian banking information if you have an
            existing account with 1 of our partners.
          </p>
          <button>Sign in with Sign-In Partner</button>
        </Card>
        <Card>
          <h1>Don’t have an account?</h1>
          {/* <p></p> */}
          <button>Register</button>
        </Card>
        <Card>
          <h1>Need Help?</h1>
          {/* <p></p> */}
          <button style={{ backgroundColor: "#bc3331", border: "#bc3331" }}>
            How to sign in or apply online
          </button>
        </Card>
      </Body>
    </Main>
  );
}

export default App;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px 150px auto;
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

  .logout {
    font-size: 1.25rem;
    margin-right: 25px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  .logout:hover {
    color: #333;
    cursor: pointer;
  }
`;

const Body = styled.div`
  background-color: #eff;
  border-top: 3px solid #333;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: auto auto;
  place-content: center;
`;

const Card = styled.div`
  margin: 25px auto;
  display: grid;
  place-content: center;
  width: 450px;
  background-color: #ffeaae;
  border: 2px #999 solid;
  border-radius: 10px;
  padding: 25px 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 1.25rem;
    text-align: center;
    margin: 0 20px;
    line-height: 1.5;
    margin-bottom: 25px;
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

const Container = styled.div`
  display: grid;
  place-content: center;

  h1 {
    text-align: center;
    margin: 15px 10px;
    text-decoration: underline;
    color: #333;
  }

  p {
    max-width: 1000px;
    text-align: justify;
    font-size: 1.25rem;
    margin: 15px 10px;
  }
`;
