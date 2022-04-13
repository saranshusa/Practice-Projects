import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function Application() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [applicationData, setApplicationData] = useState([]);

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId === null) {
      navigate("/login");
    } else {
      if (sessionStorage.getItem("isValidated") !== "true")
        navigate("/termsandconditions");
      setUsername(userId);
      GetApplications(userId);
    }
  }

  function handleLogout() {
    sessionStorage.clear();
    navigate("/login");
  }

  function GetApplications(userName) {
    axios
      .get(`https://amelcs.herokuapp.com/application/${userName}`)
      .then((res) => {
        if (res.status === 200) {
          setApplicationData(res.data["data"]);
          sessionStorage.setItem("appdata", JSON.stringify(res.data["data"]));
        }
      })
      .catch((error) => {
        alert(error.response.data["message"]);
      });
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
          <p>Home&nbsp;&nbsp;</p>
          <p>&#129066;&nbsp;&nbsp;</p>
          <p>Your Account</p>
        </div>
        <div className="header">
          <h1>Gurtej Singh's account</h1>
          <div
            style={{
              borderBottom: "1px solid #af3c43",
              marginTop: "5px",
            }}
          />
        </div>

        <Body>
          <Applications>
            <h2>View the applications you submitted</h2>
            <p className="review">
              Review, check the status or read messages about your submitted
              application.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontWeight: "700" }}>Search:</p>
              <input type="text" />
              <p>Showing 1 to 4 of 4 entries |</p>
              <p style={{ fontWeight: "700", marginLeft: "5px" }}> Show</p>
              <select style={{ fontWeight: "700", margin: "0px 10px" }}>
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <p style={{ fontWeight: "700" }}>entries</p>
            </div>

            <table style={{ marginTop: "20px", width: "100%" }}>
              <thead>
                <tr className="table_head_rows">
                  <th>Application type</th>
                  <th>Application number</th>
                  <th>Applicant name</th>
                  <th>Date submitted</th>
                  <th>Current status</th>
                  <th>Messages</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td>Online Application</td>
                  <td>W306796475</td>
                  <td>JATINDER SINGH</td>
                  <td>March&nbsp;7,&nbsp;2022</td>
                  <td>Submitted</td>
                  <td>New</td>
                  <td
                    className="link"
                    onClick={() => navigate("/application-status")}
                  >
                    Check full application status
                  </td>
                </tr>
                <tr>
                  <td>Online Application</td>
                  <td>W306796471</td>
                  <td>RAJVIR KAUR</td>
                  <td>March&nbsp;7,&nbsp;2022</td>
                  <td>Submitted</td>
                  <td>New</td>
                  <td>Check full application status</td>
                </tr>
                <tr>
                  <td>Online Application</td>
                  <td>W306796473</td>
                  <td>TANIYA SHARMA</td>
                  <td>March&nbsp;7,&nbsp;2022</td>
                  <td>Application/profile updated</td>
                  <td>New</td>
                  <td>Check full application status</td>
                </tr>
                <tr>
                  <td>Online Application</td>
                  <td>W306796469</td>
                  <td>GURTEJ SINGH SARAON</td>
                  <td>March&nbsp;7,&nbsp;2022</td>
                  <td>Application/profile updated</td>
                  <td>New</td>
                  <td>Check full application status</td>
                </tr> */}

                {applicationData.length > 0 &&
                  applicationData.map((item, key) => (
                    <tr key={key}>
                      <td>{item["atype"]}</td>
                      <td>{item["anumber"]}</td>
                      <td>{item["aname"]}</td>
                      <td>{item["datesubmit"]}</td>
                      <td>{item["currentstatus"]}</td>
                      <td>{item["messages"]}</td>
                      <td
                        className="link"
                        onClick={() => {
                          navigate("/application-status");
                          sessionStorage.setItem("index", key);
                        }}
                      >
                        {item["action"]}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div style={{ margin: "25px 0", textAlign: "center" }}>
              <button>1</button>
            </div>
            <p>
              Did you apply on paper or don't see your online application in
              your account? Add (link) your application to your account to
              access it and check your status online.
            </p>

            <h2>Continue an application you haven't submitted</h2>
            <p className="review">
              Continue working on an application or profile you haven't
              submitted or delete it from your account.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontWeight: "700" }}>Search</p>
              <input type="text" />
              <p>Showing 0 to 0 of 0 entries |</p>
              <p style={{ fontWeight: "700", marginLeft: "5px" }}> Show</p>
              <select style={{ fontWeight: "700", margin: "0px 10px" }}>
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <p>entries</p>
            </div>
            <table style={{ marginTop: "20px", width: "100%" }}>
              <thead>
                <tr className="table_head_rows">
                  <th>Application type</th>
                  <th>Application number</th>
                  <th>Applicant name</th>
                  <th>Date submitted</th>
                  <th>Current status</th>
                  <th>Messages</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    backgroundColor: "transparent",
                    textAlign: "center",
                  }}
                >
                  <td colSpan={7}>No data available in table</td>
                </tr>
              </tbody>
            </table>
          </Applications>

          <Start>
            <h2>Start an application</h2>
            <div style={{ marginTop: "35px" }} className="start_container">
              <div>
                <p className="blue_title">Apply to come to Canada</p>
                <p>
                  Includes applications for visitor visas, work and study
                  permits, Express Entry and International Experience Canada.
                  You will need your personal reference code if you have one.
                </p>
              </div>
              <div>
                <p className="blue_title">
                  Refugees: Apply for temporary health care benefits
                </p>
                <p>
                  Use this application if you are a protected person or refugee
                  claimant who wants to apply for the Interim Federal Health
                  Program.
                </p>
              </div>
              <div>
                <p className="blue_title">
                  Citizenship: Apply for a search or proof of citizenship
                </p>
                <p>
                  Use this application to apply for proof of citizenship
                  (citizenship certificate) or to search citizenship records.
                </p>
              </div>
              <div>
                <p className="blue_title">Students: Transfer schools</p>
                <p>
                  For approved study permit holders only.Tell us if you are
                  changing designated learning institutions. You will need your
                  application number.
                </p>
              </div>
            </div>

            <h2 style={{ marginTop: "50px", marginBottom: "15px" }}>
              Account messages
            </h2>
            <p>
              Read messages related to your account. Messages about a submitted
              application are on your application status page.
            </p>
            <p style={{ marginTop: "15px" }}>You have no messages.</p>
            <button>Report a problem or mistake on this page</button>
          </Start>
        </Body>

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
                <img src="data:image/webp;base64,UklGRvYFAABXRUJQVlA4TOkFAAAveoALEIegqJEkZQ+e51/cKWBmtqG4bRsnufK//ce6Ify63iugNADQBPv/SDIkmcv8BxDgVvfW5dLEXBSchBMwzoUWj/uPQx+9bP3t62lPwIyALNl24zYCJ5B4GPe/XcuSY3f/R/R/AuizfYw5Rqf/bl/7SER61Nlr/CPGXMxr9j+aW1P9Mt0y9az2c51PZXp61F5/ME+4Z8rezMxbwt39rB/jkw5IqZhFnPmhvsM8D89O122s4+55xg+Nky4w0SqYmXjwR+ZxjzMbPZw7xWP9zKwUAUwcCoU4PPYHVrnJok/Okxr8I0NcBQC0REWqBLDcj1ao706fbRya/BsnBYBBd+c4YwWsxJIfLDffdLePfoNohTn/AruKigHOxHlouQlQ6uPWKEumm3OLyFk3aIXH+r4uWiZhMGfauYmzFCj4vrXdN91c4WbmwTdoRUT/Ok6UWYl4LjrJtNMgXrAYNzjttBu9zGAmHvMGbc/9dcdeRPWcSacWbYFABRL8rqv4pJucZoUq8X2ni+T8sqEGmEVsurndBGa+37E7092tJmUi6tVu0Eo7X7bcIJDSPQe1OanNeQyvJu2ql1e/MwomagixWHdou8/v4hQYRMXy0MpqI10NLijBuFruTHd3mJlASs2q31nu+8s8oFVl5ps4D800FMRQZvPqaIw77ZiVmpVCRW81serf0PqYczHvA4jBFJpMOzetdAHqxcdFFz/tDu2UKoNCJDfdZo/5qdbHmGsx731EPC8dYoIQXaPTmIP6ZBfgBVfTk+n2PGYQQNxk3luRfKv1Medi3vsc0XzrOGdv5jVZDSoFnUTUGlGjpYpXk3bBmeserRSgDHCm+6N8tz7mWsx7H1HPazc5ZzPzmnP0RtcjTAowSPVWMWlXCQyA+aEr1/GglwEwaIwH7ZiWRl67yNmbea05Rm/0yWNVahYubbgNKjUrASDJV9ulPyB2gwuC6emLnL2Z15yjN/prToOUFA7NtNYVMAEKHuPquLQn7ZgaXPqjnTLpm7uYaFnFppWHpquIXjC90Wd0TAV66JlX/9Bk3pvXeELsXmKSTJyHlosaIFE23mx/0Oba4gJR2TzbE/nMOp7uGul7PqCToqgSEZMjBgFKLJneJfqNwSfScakaUTzvnDztA32nOVRczDx2uzdOlkMUKLxqCSyZ3rPreDN3uJuYqRQgYgbXPd+045ueD3EzQVWVVFWedovmCYiZqNYLRC12u7E81xWHu72iSgAzM3GL4KuhdlZ/0o67AIhINxMg9z0aJ1zMRKoAM/NgujvD+YLTYLguAAJAzaDBFystE4fXuLMdoojaa7G4GST5HhFXukEBCFLPpNut/LSXY4Z6c6lVBQB+LrY7b8lMPbzGxQxVSHJvY/TGIWqo8YA6H81wz6g96elOnxduULlVeBXYRRc/RH3ylsyMs9eg7SqSTKsya9MKEUl+QkRjrrXW7PR8he8LM1xWXShghirYaUS03Jku+1xbMlNPSVkeWrnXOpvpeJmd9uwP27EYRO04VF7umwAujagdi3H12ubaxxVQXy2ZxmztDHZR0/FFtNI3USuD2DOIwk8nWumbnjZ2iHhfQitz9JwrUZbzm9pBLurHoB8whWh1GuUxHhGHqKEx04kcKwc7xHJ9E60UjCamIs+gEpBOx5Pp+QoTq75W0zy0dxMFTL+LdvoexyTsmUBFa7D7aZ9Ig/kcm3h32oO1AIv5Xe24ngMXPDegVHZoTfrgCFPxTZupr953mAGm/btolDsKnzUoQmPRJ9vxQsRsJ8Kj1nKgfNO3TxhK7BNiEHFf9FlOBYBJk/fq45iiYn0djRNQXJuJmV2UmlnUog/3UjEz37O3wRUCyUM/2HeaQVUVVSVQfTEx5Jn08eUuUERA1dwMpvMXiJakmomYQbTwaqYR3OgP2V3MzAAzSFUs+tHOFQE4xAtXqXvQ33IEXEQBiEQu+t3OO8LdXj1SD0/683Ui7BWeZ9Jvj8X7iMjZe81G39jWlnCP2rPRv7D11uib+5hzNPp2AA==" />
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

export default Application;

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

const Applications = styled.div`
  h2 {
    color: #333;
    font-size: 26px;
    margin-top: 38px;
    margin-bottom: 10px;
  }

  .review {
    margin: 10px 0px;
  }

  .link {
    color: #2572b4;
    cursor: pointer;
  }

  input {
    border: 2px solid #555;
    margin: 0px 10px;
    padding: 3px;
  }

  .table_head_rows th {
    font-size: 16px;
    color: #333;
    padding: 5px;
    border-bottom: 1px solid #333;
  }

  tbody tr {
    background-color: #f5f5f5;
  }

  tbody tr td {
    padding: 5px;
    border-bottom: 1px solid #999;
  }

  button {
    background-color: #2572b4;
    border: 1px solid #2572b4;
    border-radius: 5px;
    color: #fff;
    cursor: default;
    padding: 10px 16px;
  }
`;

const Start = styled.div`
  margin-top: 50px;

  .start_container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 25px;
  }

  .blue_title {
    font-weight: 700;
    text-decoration: underline;
    color: #284162;
    margin-bottom: 10px;
  }

  button {
    padding: 6px 12px;
    font-size: 16px;
    margin-top: 40px;
    border: 1px solid #335075;
    border-radius: 5px;
    color: #335075;
    background-color: #eaebed;
    border-color: #dcdee1;
  }
`;
