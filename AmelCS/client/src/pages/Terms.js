import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Terms() {
  let navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [tabs, setTabs] = useState(1);
  const [q, setQ] = useState(0);

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
    if (q === 1 && phone === "67890") {
      navigate("/application");
      return;
    } else alert("Wrong answer!");
    // if (q === 2 && phone === "HarryPotter") navigate("/application");
    if (q === 2 && phone === "BMW") {
      navigate("/application");
      return;
    } else alert("Wrong answer!");
    // if (q === 3 && phone === "Canada") navigate("/application");
  }

  useEffect(() => {
    CheckAuth();
    setQ(Math.floor(Math.random() * (2 - 1 + 1)) + 1);
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
            {q === 1 && (
              <p style={{ fontWeight: "bold", marginTop: "15px" }}>
                * "My Phone number"
                <span style={{ color: "red" }}> (required)</span>
              </p>
            )}
            {/* {q === 2 && (
              <p style={{ fontWeight: "bold", marginTop: "15px" }}>
                * "My Favorite Book Name"
                <span style={{ color: "red" }}> (required)</span>
              </p>
            )} */}
            {q === 2 && (
              <p style={{ fontWeight: "bold", marginTop: "15px" }}>
                * "My Favorite Car"
                <span style={{ color: "red" }}> (required)</span>
              </p>
            )}
            {/* {q === 4 && (
              <p style={{ fontWeight: "bold", marginTop: "15px" }}>
                * "Where I Want Travel"
                <span style={{ color: "red" }}> (required)</span>
              </p>
            )} */}
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
                <p className="content-head">Contact information</p>
                <p>Enquiries</p>
                <p>Help Centre</p>
                <p>IRCC offices</p>
                <p>Media contacts</p>
                <p className="content-head">News</p>
                <p>Newsroom</p>
                <p>News releases</p>
                <p>Media advisories</p>
                <p>Speeches</p>
                <p>Statements</p>
              </div>
              <div>
                <p className="content-head">Government</p>
                <p>How government works</p>
                <p>Departments and agencies</p>
                <p>Prime Minister</p>
                <p>Ministers</p>
                <p>Public service and military</p>
                <p>Treaties, laws and regulations</p>
                <p>Libraries</p>
                <p>Publications</p>
                <p>Statistics and data</p>
                <p>About Canada.ca</p>
              </div>
              <div>
                <p className="content-head">Transparency</p>
                <p>Government-wide reporting</p>
                <p>Open government</p>
                <p>Proactive disclosure</p>
                <p>Terms and conditions</p>
                <p>Privacy</p>
              </div>
              <div>
                <p className="content-head">Feedback</p>
                <img src="data:image/webp;base64,UklGRhYCAABXRUJQVlA4TAoCAAAveoALEEegqJEkNbh88GQ+R6emkSQ0d92DBYb61TaS1Abff+iBPpn/AID/v5JIFt49Z64VR7cW1UGutr1tW+F5rLYCki8AsJ2scUkZxfRR6RmZnlGnnzE9uW+LIJk2R/R/AuC73/77/6b+9/qW696KOKezqf9GqrBb042rGG3JRKJmJjS5ww4RkS8irLKEpF+OEYoIYRKukrCmq0aZp3E+115vbR5e5SrLgSTrqKSbegBgZ4SIuPFHU4eiZK5hhxgAO0SZx/GzYinY49yqQrJ2iNJN48y1JlH64qakZnHT/vu4KzXnjUYweRdWtHtW1OZdNKwxbanizMHvZXyno18OiVFHEPPBpHgHjcq0HpS+A+tBHsk7aElzZtmj9w6gUtCv+gMsaNIl8fz5vsZ534MeuzjGXak4uyt9el0So2EXpjX7JO9gUZy0DyPxSbs4RiXCJCI0zhrxzrskghXhy21CnDzDIvsYiLfGeAFwe3SVA9Q+9NPBEfq0Du6WfNKupWBP0JLJFLDAOgPdTbAU6nEG2oZU9OiwGIgzWHgC/Yg1pnBAFcgAXIGnLdlF5+BewyD0CAFPS+wglj3F3RADCvVCwOmAEBEnl5VRgJ1NvQdM50GgPdrc3DzMYJczBdz9874pZS/MfAEAd1WiCbnK4zxYZ3Mepy0xjQPHceCUziPdRYKTaREnfvvBvr8=" />
                <p className="content-head">Social media</p>
                <img src="data:image/webp;base64,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" />
                <p className="content-head">Mobile centre</p>
                <img src="data:image/webp;base64,UklGRp4BAABXRUJQVlA4TJEBAAAveoALEEegpo0kN3hdrvPdE3o1bSS50WsjgXz3/92rbdvITV6+a+P/r/nzHwDg/x9R+ZT3nrDUucKKaYCc27beqLkEhfb7NIT2XbEkypG+YTFlDiUZymS7JtPKJv5vfRolpzKi/xOAv/psNulNxmZy4gF7Jt8zxrwBuJzUe+LlLrWyr2Oglkx8ZDuqXjnKDcRYw1fEqSnWLgbCmpWTO3yxxq+I3l4KPzdcbDI1lYc5/ZC7grX7ishB8YaLjn74qnwhJHm1VL9UFupXVD6wDP/F2DL5hxNp1/egVUPErTrCbsviv7j9Et3G9W2HP6xR42KbkMdTUjdsuIx2LqVxyXPHRurHczaOFJshU0OmTdO0JcYaNo0Fw4m184q4FXewbr8i+k8TjyfFQXN+LqOUUslMKaXERae+w9wd/K8sy7ZeEZHkLwQk6WJDH59WvkeS+h7AgRhr8Io4d5+RpHbRF6rKxeIAuA2U3UFXSCY9oWbi4zZQFFarKVR66APAnEzTkMdAtsMwJFMaPgC4MPWOXfzVAwA=" />
              </div>
            </div>
          </div>
          <div style={{ height: "410px" }}></div>
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

  .end {
    height: 40px;
    margin-bottom: 20px;
    width: 100vw;
    background: url("https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg");
    /* background-size: contain; */
    background-repeat: no-repeat;
    background-position-x: 70%;
  }

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
`;
