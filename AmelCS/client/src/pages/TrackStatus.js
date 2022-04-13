import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import countryList from "../components/CountryData";

const TrackStatus = () => {
  const [DATA, setData] = useState();

  useEffect(() => {
    const Data = JSON.parse(sessionStorage.getItem("trackData"));
    setData(Data);
  }, []);

  console.log(DATA);

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
              <a>Home</a>
              <a>Services</a>
              <a>Employer</a>
              <a>Visa Verification</a>
              <button>Track_LMIA</button>
            </div>
          </Nav>
        </div>

        <Body>
          <Form>
            <h2>Track LMIA Status</h2>
            {DATA && (
              <div className="details">
                <div className="row">
                  <p>Name:</p>
                  <p className="data">{DATA.aname}</p>
                </div>
                <div className="row">
                  <p>Passport Number:</p>
                  {/* <p className="data">{DATA.PNumber}</p> */}
                </div>
                <div className="row">
                  <p>Nationality:</p>
                  {/* <p className="data">{DATA.Nationality}</p> */}
                </div>
                <div className="row">
                  <p>System File Number:</p>
                  <p className="data">{DATA.uci}</p>
                </div>
                <div className="row">
                  <p>Application status:</p>
                  <p className="data">{DATA.currentstatus}</p>
                </div>
                <div className="row">
                  <p>Passport Expiry Date:</p>
                  {/* <p className="data">{DATA.PED}</p> */}
                </div>
                <div className="row">
                  <p>Date of Birth:</p>
                  {/* <p className="data">{DATA.DOB}</p> */}
                </div>
                <div className="row" style={{ borderBottom: "1px solid #ddd" }}>
                  <p>Application:</p>
                  <p className="data">{DATA.anumber}</p>
                </div>
              </div>
            )}
          </Form>
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

export default TrackStatus;

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
  display: grid;
  place-items: center;
  margin-top: 200px;
  margin-bottom: 100px;
`;

const Form = styled.div`
  box-shadow: 0px 15px 60px rgb(62 62 62 / 10%) !important;
  border-radius: 12px !important;
  padding: 3rem !important;
  width: 920px;

  h2 {
    font-size: 42px;
    color: #222;
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    font-weight: 700;
    color: #333;
    font-size: 16px;
    line-height: 26px;
    padding: 10px;
    width: 200px;
  }

  .row {
    border: #ddd 1px solid;
    display: flex;
    border-bottom: none;
  }

  .data {
    border-left: #ddd 1px solid;
    font-weight: normal;
  }
`;
