import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <p className="title">Rest API by Saransh</p>
      <p>Contact Us</p>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: #93e1d8;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  border-radius: 0 0 8px 8px;
`;
