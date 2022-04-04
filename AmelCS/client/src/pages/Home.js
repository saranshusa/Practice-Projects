import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
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
              <a>Home</a>
              <a onClick={() => navigate("/services")}>Services</a>
              <a onClick={() => navigate("/employer")}>Employer</a>
              <a onClick={() => navigate("/track")}>Visa Verification</a>
              <button onClick={() => navigate("/track")}>Track_LMIA</button>
            </div>
          </Nav>
        </div>
        <Body>
          <Card>
            <div className="visiting">
              <div className="visiting-left">
                <h1>Visiting Canada</h1>
                <p>
                  Canada welcomes you as a tourist, student or temporary worker.
                  Every year, more than 5 million people visit Canada to enjoy
                  the many opportunities our country has to offer. Depending on
                  where you live, and the reason for your visit, you will need
                  to meet certain entry requirements. In some cases, if you plan
                  to stay in Canada for a certain period of time, you will need
                  a Temporary Resident Visa.
                </p>
                <div className="input">
                  <input type="text" placeholder="Search Here..." />
                  <button>Search</button>
                </div>
              </div>
              <div className="visiting-right" />
            </div>
          </Card>

          <Card>
            <div className="eligible">
              <h1>Who is eligible</h1>
              <div className="divider">
                <div className="vertical" style={{ marginRight: "25px" }}>
                  <div className="sub-card">
                    <h3 className="sub-card-h3">To visit Canada, you must:</h3>
                    <ul className="list">
                      <li>have a valid travel document, such as a passport</li>
                      <li>be in good health</li>
                      <li>
                        satisfy an immigration officer that you have ties, such
                        as a job, home and family, that will take you back to
                        your country of origin
                      </li>
                      <li>
                        satisfy an immigration officer that you will leave
                        Canada at the end of your visit and
                      </li>
                      <li>
                        have enough money for your stay. The amount of money you
                        will need can vary with the circumstances of the visit,
                        how long you will stay and whether you will stay in a
                        hotel or with friends or relatives. For more
                        information, ask the Canadian visa office in your
                        country or region.
                      </li>
                    </ul>
                  </div>

                  <div className="sub-card">
                    <h3 className="sub-card-h3">You may also need:</h3>
                    <ul className="list">
                      <li>
                        a Temporary Resident Visa, depending on your citizenship
                        (see Visas and Exemptions below)
                      </li>
                      <li>a medical examination and</li>
                      <li>
                        a letter of invitation from someone who lives in Canada.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="vertical" style={{ marginLeft: "25px" }}>
                  <div className="sub-card">
                    <h3 className="sub-card-h3">Travel documents</h3>
                    <p className="content">
                      Transport companies, such as airlines, must ensure you
                      have proper, valid travel documents when you enter Canada.
                      If you do not have the proper documents, you may be
                      delayed or denied boarding.
                    </p>
                    <p className="content">
                      On March 11, 2010, CIC amended the Immigration and Refugee
                      Protection Regulations to clarify the factors used to
                      determine which travel documents can be used to apply for
                      a visa, and to travel to or enter Canada.
                    </p>
                    <p className="content">
                      Under the new Regulations, the following travel documents
                      are considered unreliable and are not acceptable for entry
                      into Canada:
                    </p>
                    <ul className="list">
                      <li>have a valid travel document, such as a passport</li>
                      <li>be in good health</li>
                      <li>
                        satisfy an immigration officer that you have ties, such
                        as a job, home and family, that will take you back to
                        your country of origin
                      </li>
                      <li>
                        satisfy an immigration officer that you will leave
                        Canada at the end of your visit and
                      </li>
                      <li style={{ listStyleType: "square" }}>
                        have enough money for your stay. The amount of money you
                        will need can vary with the circumstances of the visit,
                        how long you will stay and whether you will stay in a
                        hotel or with friends or relatives. For more
                        information, ask the Canadian visa office in your
                        country or region.
                      </li>
                    </ul>
                    <p className="content">
                      This list is subject to change. Check it regularly for
                      up-to-date information.
                    </p>
                  </div>
                  <div className="sub-card">
                    <h3 className="sub-card-h3">Visas and exemptions</h3>
                    <p className="content">
                      You may or may not need a Temporary Resident Visa to visit
                      Canada, depending on your citizenship. Even if you are
                      exempt, though, there is important information you need to
                      know before you plan your trip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="immigration">
              <div className="immigration-left" />
              <div className="immigration-right">
                <h1>Immigrating to Canada</h1>
                <p>
                  Immigrating to Canada permanently is an exciting opportunity.
                  However, there are several things you should consider before
                  you apply to be a permanent resident. If you want to immigrate
                  to Canada, there are a few different ways to apply. You will
                  need to decide which immigration program will work best for
                  you and your family. Find out about the requirements and the
                  steps to apply in each category:
                </p>
                <div className="input">
                  <button>More Detail</button>
                </div>
              </div>
            </div>
          </Card>
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

export default Home;

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

const Body = styled.div``;

const Card = styled.div`
  margin: 50px 0;

  .visiting {
    display: grid;
    grid-template-columns: 60% 40%;
    padding-top: 80px;
  }

  .input {
    height: 70px;
    width: 100%;
    position: relative;
    box-shadow: 0px 15px 60px rgb(62 62 62 / 10%) !important;
  }

  input {
    width: 100%;
    font-size: 16px;
    height: 100%;
    outline: none;
    border: none;
    padding: 8px 16px;
  }

  button {
    position: absolute;
    right: 11px;
    top: 11px;
    background: #ff0043;
    padding: 15px 30px;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
  }

  h1 {
    font-size: 50px;
    color: #222;
    font-weight: 800;
  }

  p {
    margin-top: 25px;
    margin-bottom: 25px;
    line-height: 26px;
    font-size: 16px;
    color: #333;
    font-weight: 400;
  }

  .visiting-left {
    padding-right: 25px;
  }

  .visiting-right {
    background: url("https://esdc-cic-ca.online/images/banner.jpg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .eligible {
    margin-top: 60px;

    h1 {
      font-size: 42px;
    }

    .divider {
      margin-top: 25px;
      display: grid;
      grid-template-columns: 50% 50%;
    }

    .list {
      padding-left: 16px;
    }

    .list li {
      font-size: 16px;
      line-height: 26px;
      list-style-type: square !important;
      color: #333;
    }

    .sub-card {
      padding: 35px;
      box-shadow: 0px 15px 60px rgb(62 62 62 / 10%) !important;
      border-radius: 12px !important;
    }

    .sub-card-h3 {
      font-size: 22px;
      color: #222;
      margin: 12px 0;
    }
  }

  .immigration {
    display: grid;
    grid-template-columns: 30% 70%;
    padding-top: 80px;
  }

  .immigration-left {
    background: url("https://esdc-cic-ca.online/images/cta-illustration.jpg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 30px;
  }

  .immigration-right {
    margin-left: 50px;
  }

  .immigration-right .input button {
    left: 0;
    right: auto;
  }
`;
