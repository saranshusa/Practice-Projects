import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  function HandleLogin(e) {
    e.preventDefault();
    setErrorMsg("Authenticating...");
    axios
      .post("https://amelcs.herokuapp.com/login", {
        username: email,
        password: password,
      })
      .then((res) => {
        setErrorMsg(res.data["message"]);
        if (res.status === 200) {
          sessionStorage.setItem("userId", res.data["username"]);
          navigate("/dashboard");
        } else {
          alert(res.data["message"]);
        }
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
        alert(error.response.data["message"]);
      });
  }

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId !== null) {
      navigate("/dashboard");
    }
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
          <p>Login</p>
          <p>&#129066;</p>
          <p>Sign In / Sign Up</p>
        </div>
        <div className="header">
          <h1>Welcome to GCKey</h1>
          <div
            style={{
              borderBottom: "1px solid #af3c43",
              marginTop: "5px",
            }}
          />
        </div>

        <Body>
          <Left>
            <div className="fields">
              <h2>Sign In</h2>
              <p>Username: (required)</p>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Username"
                required
              />
              <p>Password: (required)</p>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Password"
                required
              />
              <a>Forgot your password?</a>
            </div>
            <div className="btn">
              <button onClick={HandleLogin}>Sign In</button>
              <button className="scn-btn">Clear All</button>
            </div>
          </Left>
          <Right>
            <h2>Simple Secure Access</h2>
            <p>
              A simple way to securely access Government of Canada online
              services.
            </p>
            <p>One username.</p>
            <p style={{ marginTop: "0px" }}>One password.</p>
            <button>Sign Up</button>
            <p>
              Your GCKey can be used to access multiple Government of Canada
              online Enabled Services.
            </p>
          </Right>
        </Body>

        <div className="ending">
          <div className="center">
            <p>
              Please select Exit to leave the GCKey service and return to the
              Government of Canada online service.
            </p>
            <button>Exit</button>
          </div>
          <p>Date modified: 2020-09-01</p>
        </div>
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

export default Login;

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

  .ending {
    width: 100%;
    margin-top: 25px;

    .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    button {
      width: 12em;
      padding: 6px 12px;
      font-size: 16px;
      margin: 20px;
      border: 1px solid #335075;
      border-radius: 5px;
      color: #335075;
      background-color: #eaebed;
      border-color: #dcdee1;
    }

    .scn-btn {
    }
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
  grid-template-columns: 70% 30%;
  padding: 27px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
`;

const Left = styled.form`
  padding-right: 27px;
  border-right: 1px solid #ddd;

  .fields {
    h2 {
      font-size: 26px;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 5px;
    }

    input {
      border: 1px solid #ddd;
      padding: 6px 12px;
      width: 100%;
      margin-bottom: 15px;
      font-size: 16px;
      outline: none;
    }
  }

  .btn {
    display: flex;
    width: fit-content;
    margin: 25px auto;

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

    .scn-btn {
      color: #335075;
      background-color: #eaebed;
      border-color: #dcdee1;
    }
  }
`;

const Right = styled.div`
  padding-left: 27px;

  p {
    margin-top: 10px;
  }

  button {
    background-color: #335075;
    width: 12em;
    color: white;
    padding: 6px 12px;
    font-size: 16px;
    border: 1px solid #335075;
    border-radius: 5px;
    margin: 20px auto;
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
