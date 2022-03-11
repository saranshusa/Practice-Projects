import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Dashboard() {
  let navigate = useNavigate();

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId === null) {
      navigate("/login");
    }
  }

  function handleLogout() {
    sessionStorage.clear();
    navigate("/login");
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
        <p className="logout" onClick={handleLogout}>
          Logout
        </p>
      </Nav>

      <Body></Body>
    </Main>
  );
}

export default Dashboard;

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
  background-color: darkgray;
`;
