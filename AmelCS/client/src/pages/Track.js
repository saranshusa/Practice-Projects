import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import countryList from "../components/CountryData";

const Home = () => {
  const navigate = useNavigate();
  const [SFN, setSFN] = useState("");
  const [PN, setPN] = useState("");
  const [Country, setCountry] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://amelcs.herokuapp.com/status", {
        params: {
          uci: SFN,
          pn: PN,
          country: Country,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem("trackData", JSON.stringify(res.data["data"]));
          navigate("/status");
        }
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
        alert(error.response.data["message"]);
      });
  }

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
            <p>You can track your Visa by entering credential detail.</p>
            <table style={{ width: "100%" }}>
              <tr
                style={{
                  backgroundColor: "#ff3369",
                }}
              >
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "#ff3369",
                    padding: "10px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Visa Status Enquiry
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ borderRight: "1px solid #eeeeee" }}>
                  Please complete the following details to view your visa
                  entitlements.<span>* must be required.</span>
                </td>
              </tr>
              <tr>
                <td>Enter your System File Number</td>
                <td style={{ borderRight: "1px solid #eeeeee" }}>
                  <input
                    type="text"
                    placeholder="UCI Number"
                    value={SFN}
                    onChange={(e) => setSFN(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Passport Number</td>
                <td style={{ borderRight: "1px solid #eeeeee" }}>
                  <input
                    type="text"
                    placeholder="Passport Number"
                    value={PN}
                    onChange={(e) => setPN(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Country of Passport</td>
                <td style={{ borderRight: "1px solid #eeeeee" }}>
                  <select
                    value={Country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {countryList.map((country, index) => (
                      <option key={index}>{country}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ borderRight: "1px solid #eeeeee" }}>
                  <button onClick={HandleSubmit}>Submit</button>
                </td>
              </tr>
            </table>
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

const Body = styled.div`
  display: grid;
  place-items: center;
  margin-top: 200px;
  margin-bottom: 100px;
`;

const Form = styled.form`
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
    font-weight: 400;
    color: #333;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 1rem;
  }

  td {
    border-bottom: 1px solid #eeeeee;
    border-left: 1px solid #eeeeee;
    padding: 20px;
    color: #333;
  }

  input,
  select {
    font-weight: 400;
    color: #333;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }

  button {
    background-color: #ff3369;
    color: #fff;
    font-weight: bold;
    height: 30px;
    width: 100px;
  }
`;
