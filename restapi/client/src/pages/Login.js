import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <Container>
      <Navbar />
      <LoginForm />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-color: #ddfff7;
  height: 100vh;
`;
