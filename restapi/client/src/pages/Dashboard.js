import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  let Navigate = useNavigate();
  const [authList, setAuthList] = useState([]);
  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    checkAuth();
    getAuthList();
  }, []);

  function checkAuth() {
    const AuthToken = sessionStorage.getItem("TOKEN");
    if (AuthToken) {
      Navigate("/dashboard");
    } else {
      Navigate("/login");
    }
  }

  function getAuthList() {
    axios.get(`${BASE_URL}/auth/`).then((res) => {
      setAuthList(res.data);
    });
  }

  return (
    <div>
      {/* <Link to="/">HOME</Link> */}
      {authList.length > 0 && (
        <Table>
          <Navbar />
          {authList.map((item, index) => (
            <Row>
              <p>{item["email"]}</p>
              <p>{item["_id"]}</p>
              <p>{item["timestamp"]}</p>
            </Row>
          ))}
        </Table>
      )}
    </div>
  );
};

export default Dashboard;

const Table = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fee1c7;
  font-family: monospace;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  max-width: 95%;
  margin: 5px;
  padding: 10px;
  border: 2px solid grey;
  border-radius: 8px;
`;
