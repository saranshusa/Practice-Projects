import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

const Container = styled.div`
  background: url("https://cise-egypt.com/wp-content/uploads/2019/09/WELCOME-ST-IVES.jpg");
  background-size: 100%;
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`;

const Dashboard = () => {
  const location = useLocation();

  return (
    <Container>
      <p>{location.state.email}</p>
      <p>Your UID is : {location.state.uid}</p>
    </Container>
  );
};

export default Dashboard;
