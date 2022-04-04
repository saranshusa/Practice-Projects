import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Terms() {
  let navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [tabs, setTabs] = useState(1);

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

  function handleVerification() {
    sessionStorage.setItem("isValidated", "true");
    if (phone === "1234567890") navigate("/application");
    else alert("Inccorrect answer!");
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
            <div>Jobs</div>
            <div>Immigration</div>
            <div>Travel</div>
            <div>Business</div>
            <div>Benefits</div>
            <div>Health</div>
            <div>Taxes</div>
            <div style={{ borderRight: "1px solid white" }}>More Services</div>
          </div>
          <div></div>
        </div>
        <div className="routes">
          <p>Home</p>
        </div>
        <div className="header">
          {tabs === 1 && <h1>Terms and Conditions</h1>}
          {tabs === 2 && <h1>Identity Validation</h1>}
          <div
            style={{
              borderBottom: "1px solid #af3c43",
              marginTop: "5px",
            }}
          />
        </div>

        {tabs === 1 && (
          <Body>
            <p style={{ marginBottom: "10px" }}>
              By accessing your account, you are agreeing to abide by the
              following Terms and Conditions of Use:
            </p>
            <ul>
              <li>
                &#9679; You agree to keep your identification number(s)
                confidential and to not share it (them) with anyone. If you
                suspect that others have obtained your identification number(s),
                contact us immediately by clicking on the "Report a problem or
                mistake on this page" button.
              </li>
              <li>
                &#9679; You certify that any information provided by you is
                true, accurate and complete.
              </li>
              <li>
                &#9679; You understand and accept that as a security measure for
                administrative reasons, we can revoke your access if you fail to
                abide by the Terms and Conditions of Use.
              </li>
              <li>
                &#9679; You understand and accept that we are not responsible
                for any losses or damages incurred by anyone because of:
              </li>
              <ol type="1">
                <li>1. The use of the information available in your account</li>
                <li>
                  2. Any restrictions, delay, malfunction, or unavailability of
                  your account
                </li>
              </ol>
              <li>
                &#9679; You understand and accept that by using your account and
                applying online, we can communicate with you (or your
                representative, if applicable) via e-mail.
              </li>
              <li>
                &#9679; To continue, choose "I Accept" to indicate your
                acceptance of these Terms and Conditions. If you do not agree
                with these Terms and Conditions, choose "I Do Not Accept". Note,
                you will not be able to access your account unless you accept
                the Terms and Conditions.
              </li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              If you use another type of browser software you should check with
              your software supplier to make sure that your browser has 128-bit
              secure socket layer encryption capability. Note: We are not
              responsible for any difficulties in downloading and installing
              software. Software suppliers are responsible for providing
              technical support. It is important that you sign out and close
              your browser before leaving this computer unattended. This will
              prevent unauthorized access to your personal information.
            </p>
            <button onClick={() => setTabs(2)} className="accept_btn">
              I Accept
            </button>
            <button>I Do Not Accept</button>
            <div style={{ marginTop: "25px" }}>
              <button>Report a problem or mistake on this page</button>
            </div>
          </Body>
        )}

        {tabs === 2 && (
          <Body>
            <p style={{ margin: "10px 0px" }}>
              For security reasons, additional identification is required to
              access your account.
            </p>
            <p>Please answer the following secret question:</p>
            <p style={{ fontWeight: "bold", marginTop: "15px" }}>
              * "My Phone number"
              <span style={{ color: "red" }}> (required)</span>
            </p>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div>
              <button onClick={handleVerification} className="accept_btn">
                Continue
              </button>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div style={{ marginTop: "25px" }}>
              <button>Report a problem or mistake on this page</button>
            </div>
          </Body>
        )}

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

export default Terms;

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
      grid-template-columns: auto auto auto auto auto auto auto auto;
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
  margin-top: 10px;

  li {
    margin: 5px 0px;
    margin-left: 25px;
  }

  ol {
    margin-left: 75px;
  }

  button {
    padding: 6px 12px;
    font-size: 16px;
    margin-top: 20px;
    border: 1px solid #335075;
    border-radius: 5px;
    color: #335075;
    background-color: #eaebed;
    border-color: #dcdee1;
  }

  input {
    border: 1px solid #bbb;
    padding: 6px 12px;
    width: 40%;
    margin-bottom: 15px;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    margin-top: 10px;
  }

  .accept_btn {
    background-color: #335075;
    border-color: #335075;
    color: white;
    margin-right: 10px;
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
