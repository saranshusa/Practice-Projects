import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const Container = styled.div`
  p {
    margin: 0 0 4vh 0;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
  }

  button {
    padding: 10px 15px;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid;

    :hover {
      border-radius: 5px 0 5px 0;
    }
  }
`;

const Section = styled.section`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = styled(Section)`
  background-color: aquamarine;
`;
const Signup = styled(Section)`
  background-color: #f1d9a7;
`;

const Homepage = ({ isLoggedIn }) => {
  return (
    <Container>
      {isLoggedIn && <Navigate to="/dashboard" />}
      <Login>
        <p>Already Registered!</p>
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
      </Login>
      <Signup>
        <p>New User!</p>
        <Link to="/signup">
          <button>SIGNUP</button>
        </Link>
      </Signup>
    </Container>
  );
};

export default Homepage;
