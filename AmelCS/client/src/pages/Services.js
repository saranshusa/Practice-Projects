import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Services = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Main>
        <div className="nav-ctn">
          <Nav>
            <img
              className="nav-img"
              src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
            />
            <div>
              <a onClick={() => navigate("/home")}>Home</a>
              <a>Services</a>
              <a onClick={() => navigate("/employer")}>Employer</a>
              <a onClick={() => navigate("/track")}>Visa Verification</a>
              <button onClick={() => navigate("/track")}>Track_LMIA</button>
            </div>
          </Nav>
        </div>

        <Body>
          <Left>
            <p className="active">Citizenship</p>
            <p>Refugees</p>
            <p>Visa Fee</p>
            <p>Photo Specifications</p>
            <p>LMIA</p>
            <p>Track LMIA</p>
            <p>Security</p>
            <p>Study</p>
            <p>Work Temporarly</p>
          </Left>
          <Right>
            <img src="https://esdc-cic-ca.online/b1.jpg" />
            <h2>Citizenship and Immigration Canada</h2>
            <strong style={{ marginBottom: "5px" }}>Important Notices</strong>
            <p>
              This site provides information on procedures applicable to
              applicant who wish to apply for a visa to travel to Canada. This
              service is available for all Nationals who wish to apply in the
              following categories.
            </p>
            <p style={{ marginBottom: "5px" }}>Visitors</p>
            <p style={{ marginBottom: "5px" }}>Students</p>
            <p style={{ marginBottom: "5px" }}>Workers</p>
            <p>
              Permanent Residents *(only those who need a travel document to
              return to Canada)
            </p>
            <p>
              An interview, if required, can be conveniently scheduled at the
              application centre.
            </p>
            <p>
              All information required to apply for a temporary resident visa
              for Canada is available on this site. Please read the information
              carefully to expedite the processing of your application.
            </p>
            <p>
              (1) If you have already applied for a VISA, you can Track Your
              Application using our visa Application Tracker service
            </p>
            <p>
              (2) if you have already received work permit, you can Track Your
              work permit Status using our work permit Tracker Service
            </p>
            <p>
              (3) if you have received an LMIA from Employment and Social
              Development Canada (ESDC) /Service Canada, you can Track Your LMIA
              Status using our LMIA Tracker Service
            </p>
          </Right>
        </Body>

        <div className="footer">
          <div className="links">
            <a>services</a>
            <a>track Imia</a>
          </div>
          <div className="footer-card">
            <img src="https://esdc-cic-ca.online/images/logo.png" />
            <p>
              Email : (support@esdc-cic-services.online |
              inquiry@esdc-cic-services.online | info@esdc-cic-services.online |
              cra@esdc-cic-services.online)
            </p>
            <span>
              Copyright © 2021 by canadian government escd-cic-services.online
            </span>
          </div>
        </div>
      </Main>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
    font-family: "Montserrat", sans-serif;
  }
`;

const Main = styled.div`
  width: 1200px;

  .nav-ctn {
    position: fixed;
    background-color: #fff;
    width: 100vw;
    border-bottom: 3px solid black;
    left: 0;
  }

  .footer {
    background-color: #f1f3f4;
    width: 100vw;
    position: absolute;
    left: 0;
  }

  .links {
    margin: 50px 0 0 25px;

    a {
      margin-right: 25px;
    }
  }

  .footer-card {
    width: 1200px;
    margin: 0px auto;
    text-align: center;
    margin-bottom: 25px;

    img {
      margin-bottom: 25px;
    }

    p {
      color: #999;
      border-top: 1px solid #dee2e6 !important;
      padding-top: 25px;
      margin-bottom: 50px;
    }
    span {
      color: #999;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;
  height: 80px;
  width: 1200px;
  margin: 0px auto;

  @media screen and (max-width: 500px) {
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

  button {
    background: #ff0043;
    color: #fff;
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 25px;
    font-size: 14px;
  }

  a {
    margin: 0px 25px;
  }

  a:hover {
    color: #ff0043;
    cursor: pointer;
  }
`;

const Body = styled.div`
  margin-top: 150px;
  box-shadow: 0px 15px 60px rgb(62 62 62 / 10%) !important;
  border-radius: 12px !important;
  padding: 50px;
  display: grid;
  grid-template-columns: 20% 80%;
`;

const Left = styled.div`
  border-right: 1px solid #e2e2e2;
  padding-right: 25px;

  p {
    font-size: 18px;
    padding: 20px 10px;
    border-bottom: 1px solid #e2e2e2;
    font-weight: 500;
    color: #222;
  }

  .active {
    color: #ff0043;
    border-left: 1px solid #ff0043;
  }
`;

const Right = styled.div`
  padding: 0 75px;

  img {
    padding-bottom: 40px;
    width: 100%;
  }

  h2 {
    font-size: 42px;
    margin-bottom: 1.5rem;
    font-weight: 500;
    color: #222;
  }

  p {
    font-weight: 400;
    color: #333;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 25px;
  }
`;
