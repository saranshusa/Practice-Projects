import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

function Home() {
  let navigate = useNavigate();
  const [ip, setIP] = useState("");

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId != null) {
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
          <div className="search-container">
            <input type="text" placeholder="Search IRCC" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </Nav>
        <div
          style={{
            borderBottom: "2px #333 solid",
            width: "100vw",
            position: "absolute",
            left: "0px",
          }}
        />
        <div className="menu">MENU</div>
        <div className="nav-routes">
          <p>Canada.ca</p>
          <p style={{ textDecoration: "none" }}>{" > "}</p>
          <p>Immigration and citizenship</p>
          <p style={{ textDecoration: "none" }}>{" > "}</p>
          <p>My immigration or citizenship application</p>
        </div>
        <div className="header">
          <h1>Sign in to your IRCC secure account</h1>
          <div
            style={{
              borderBottom: "1px solid #af3c43",
              marginTop: "5px",
            }}
          />
          <p className="title">
            Your account lets you start an application, submit and pay for your
            application, get messages related to your application, check the
            status of your application and update your information.
          </p>
          <div className="list">
            <p>Due to the impacts of COVID-19</p>
            <ul>
              <li>we can’t process applications normally</li>
              <ul>
                <li>
                  We’re prioritizing applications from people who are{" "}
                  <span className="blue hover-blue">
                    exempt from travel restrictions.
                  </span>
                </li>
              </ul>
              <li>
                depending on your application type, you may not have heard from
                us or seen changes in your application status
              </li>
              <ul>
                <li>
                  If you’ve had a{" "}
                  <span className="blue hover-blue">medical exam </span> or
                  given <span className="blue hover-blue"> biometrics,</span>{" "}
                  they won’t show in your account{" "}
                  <span className="bold"> until we process them.</span>
                </li>
                <li>
                  We currently have a backlog of medical exams to process, but
                  when we do process them,
                  <span className="bold">
                    {" "}
                    you’ll see them in your account.
                  </span>
                </li>
              </ul>
            </ul>
          </div>
          <p className="footer">
            <span className="bold"> If you’ve already applied, </span>learn how
            we’re processing applications during the pandemic.
          </p>
        </div>

        <Body>
          <Card>
            <h2>Option 1: GCKey</h2>
            <p>Sign in with your User ID and Password</p>
            <button onClick={() => navigate("/login")}>
              Sign in with GCKey
            </button>
          </Card>
          <Card>
            <h2>Option 2: Sign-In Partner</h2>
            <p>
              Sign in with your online Canadian banking information if you have
              an existing account with 1 of our partners.
            </p>
            <button>Sign in with Sign-In Partner</button>
          </Card>
          <Card
            style={{ backgroundColor: "transparent", border: "1px solid #999" }}
          >
            <h2>Don’t have an account?</h2>
            <button>Register</button>
          </Card>
          <Card
            style={{ backgroundColor: "transparent", border: "1px solid #999" }}
          >
            <h2>Need Help?</h2>
            <button style={{ backgroundColor: "#bc3331", border: "#bc3331" }}>
              How to sign in or apply online
            </button>
          </Card>
        </Body>
        <div className="ending">
          <div className="flex">
            <button>Report a problem or mistake on this page</button>
            <button>Share this page</button>
          </div>
          <p>Date modified: 2022-01-06</p>
        </div>
        <Footer />
      </Main>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 1200px;

  .ending {
    margin-bottom: 25px;
    margin-top: 25px;

    .flex {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;

      button {
        width: fit-content;
        padding: 6px 12px;
        font-size: 16px;
        border: 1px solid #335075;
        border-radius: 5px;
        color: #335075;
        background-color: #eaebed;
        border-color: #dcdee1;
      }
    }
  }

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

  .menu {
    background-color: #26374a;
    width: fit-content;
    padding: 10px 20px;
    font-size: 20px;
    color: white;
    margin-top: 3px;
  }

  .nav-routes {
    display: flex;
    margin: 15px 0;

    p {
      font-size: 14px;
      color: #284162;
      padding: 5px 10px;
      text-decoration: underline;
    }

    p:hover {
      color: #0535d2;
      cursor: pointer;
    }
  }

  .header {
    margin-top: 30px;
    font-size: 20px;
    line-height: 1.5;

    .title {
      margin: 10px 0;
    }

    .list {
      border-left: 3px solid #d3080c;
      padding: 20px 30px;

      .hover-blue:hover {
        color: #0535d2;
        cursor: pointer;
      }

      .blue {
        color: #284162;
        text-decoration: underline;
      }

      .bold {
        font-weight: bolder;
      }

      * {
        color: #000;
      }

      ul {
        margin-left: 20px;
      }

      p {
        margin-bottom: 10px;
      }
    }

    .footer {
      margin: 20px 0;
      .bold {
        font-weight: bold;
      }
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;
  height: 80px;

  .search-container {
    width: 300px;
    height: 30px;

    input {
      width: 260px;
      height: 30px;
      padding: 5px 10px;
      border: 1px solid #e0e0e0;
      outline: none;
    }

    button {
      width: 30px;
      height: 30px;
      border: none;
      background-color: #26374a;
      cursor: pointer;
    }

    i {
      color: white;
    }
  }

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
  grid-template-columns: 49% 49%;
  grid-template-rows: auto auto;
  place-content: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto;
  }
`;

const Card = styled.div`
  margin: 25px auto;
  margin-top: 0px;
  display: grid;
  place-items: center;
  width: 100%;
  background-color: #f5f5f5;
  padding: 5px;
  text-align: center;
  min-height: 200px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  gap: 10px;

  h2 {
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 36px;
  }

  @media screen and (max-width: 500px) {
    width: 90vw !important;
  }

  p {
    text-align: justify;
    margin: 0 20px;
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 20px;
  }

  button {
    margin-bottom: 25px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid;
    color: #fff;
    background-color: #26374a;
    border-color: #26374a;
    font-size: 18px;
    width: fit-content;
  }

  button:hover {
    background-color: #2572b4;
    cursor: pointer;
  }
`;
