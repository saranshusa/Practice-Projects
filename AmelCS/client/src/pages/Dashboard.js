import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Dashboard() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId === null) {
      navigate("/login");
    } else {
      setEmail(userId);
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
    <Container>
      <Main>
        <div className="lang">Français</div>
        <Nav>
          <img
            className="nav-img"
            src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
          />
        </Nav>
        <div className="navbar">
          <div></div>
          <div className="menu-items">
            <div>Definitions</div>
            <div>Frequently Asked Questions (FAQ)</div>
            <div style={{ borderRight: "1px solid white" }}>Help</div>
          </div>
          <div></div>
        </div>
        <div className="routes">
          <p>Home&nbsp;&nbsp;</p>
          <p>&#129066;&nbsp;&nbsp;</p>
          <p>Welcome {email}</p>
        </div>
        <div className="header">
          <h1>Welcome {email}</h1>
          <div
            style={{
              borderBottom: "1px solid #af3c43",
              marginTop: "5px",
            }}
          />
        </div>

        <Body>
          <Left>
            <p>
              You last signed in with your GCKey on Monday, March 21, 2022 at
              02:05:44 ET.
            </p>
            <p>
              From this page you can <a href="#">Change Your Password,</a>{" "}
              <a href="#">Change Your Recovery Questions</a> or{" "}
              <a href="#">Revoke Your GCKey.</a>
            </p>
            <p>
              To help protect your information, please remember to sign out and
              close your browser before leaving this computer unattended.
            </p>
            <p>
              Please select <strong>Continue</strong> to return to the
              Government of Canada online service.
            </p>
            <div className="btn">
              <button onClick={() => navigate("/termsandconditions")}>
                Continue
              </button>
            </div>
          </Left>
          <Right>
            <p style={{ color: "#333", backgroundColor: "#f5f5f5" }}>Options</p>
            <p>Change Your Password</p>
            <p>Change Your Recovery Questions</p>
            <p>Revoke Your GCKey</p>
            <p>Sign Out</p>
          </Right>
          <p style={{ marginTop: "100px" }}>Date modified: 2020-09-01</p>
        </Body>

        <Footer>
          <div className="links">
            <div className="content">
              <div>
                <p className="content-head">About</p>
                <p>About GCKey</p>
                <p>Enabled Services</p>
                <p>Site Map</p>
              </div>
              <div>
                <p className="content-head">Transparency</p>
                <p>Proactive Disclosure</p>
                <p>Terms and Conditions</p>
                <p>Personal Information Collection Statement</p>
              </div>
              <div>
                <p className="content-head">News</p>
                <p>Recent Project Activity</p>
              </div>
              <div>
                <p className="content-head">Contact Us</p>
                <p>Phone Numbers</p>
              </div>
            </div>
          </div>
          <div className="end" />
        </Footer>
      </Main>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 1200px;

  .lang {
    text-align: right;
    color: #284162;
    text-decoration: underline;
    margin-top: 10px;
  }

  .lang:hover {
    color: #0535d2;
    cursor: pointer;
  }

  .header {
    margin-top: 30px;
    font-size: 20px;
    line-height: 1.5;

    h1 {
      font-size: 34px;
    }
  }

  .navbar {
    background-color: #335075;
    position: absolute;
    left: 0px;
    width: 100vw;
    display: grid;
    grid-template-columns: auto 1200px auto;
    height: 55px;
    place-items: center;

    div {
      color: white;
      width: 100%;
      place-items: center;
    }

    .menu-items {
      display: grid;
      grid-template-columns: 275px auto 225px;
      width: 100%;
      place-items: center;
      text-align: center;

      div {
        display: grid;
        place-items: center;
        border-left: 1px solid white;
        height: 55px;
        width: 100%;
      }
    }
  }

  .routes {
    margin-top: 65px;
    display: flex;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;
  height: 80px;

  @media screen and (max-width: 500px) {
    .nav-img {
      margin-left: 10px !important;
      margin-right: 10px !important;
      width: 100%;
    }
  }

  .nav-img {
    margin-left: 25px;
    height: 25px;
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  margin-top: 10px;
`;

const Left = styled.form`
  padding-right: 27px;

  .btn {
    width: 100%;
    text-align: center;
  }

  button {
    background-color: #335075;
    width: 12em;
    color: white;
    padding: 6px 12px;
    font-size: 16px;
    margin: 5px;
    border: 1px solid #335075;
    border-radius: 5px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 12px;
  }
`;

const Right = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;

  p {
    font-size: 16px;
    padding: 10px 15px;
  }

  p:hover {
    background-color: #666;
    color: #fff;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  margin-top: 25px;

  .links {
    background-color: #e1e4e7;
    width: 100vw;
    position: absolute;
    left: 0px;
    border-bottom: 4px solid #335175;
  }

  .content {
    width: 1200px;
    margin: 25px auto;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    .content-head {
      font-weight: bolder;
      font-size: 18px;
    }

    div {
      width: 100%;

      p {
        margin: 10px 0;
        font-size: 14px;
      }
    }
  }

  .end {
    height: 100px;
    width: 100vw;
    background: url("https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg");
  }
`;
