import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import countryList from "../components/CountryData";

function AdminApplications() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [applicationNumber, setApplicationNumber] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [dateOfSubmit, setDateOfSubmit] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [messages, setMessages] = useState("");
  const [action, setAction] = useState("");
  const [UCI, setUCI] = useState("");
  const [country, setCountry] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [biometricsNumber, setBiometricsNumber] = useState("");
  const [DOBEnroll, setDOBEnroll] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [lmia, setLmia] = useState("");
  const [province, setProvince] = useState("");
  const [msg1Subject, setMsg1Subject] = useState("");
  const [msg2Subject, setMsg2Subject] = useState("");
  const [msg3Subject, setMsg3Subject] = useState("");
  const [msg4Subject, setMsg4Subject] = useState("");
  const [msg1sent, setMsg1sent] = useState("");
  const [msg2sent, setMsg2sent] = useState("");
  const [msg3sent, setMsg3sent] = useState("");
  const [msg4sent, setMsg4sent] = useState("");
  const [msg1read, setMsg1read] = useState("");
  const [msg2read, setMsg2read] = useState("");
  const [msg3read, setMsg3read] = useState("");
  const [msg4read, setMsg4read] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [userValidate, setUserValidate] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function SubmitApplication(e) {
    e.preventDefault();
    setErrorMsg("Submitting...");
    axios
      .post("https://canada-main.herokuapp.com/application", {
        username: username,
        atype: applicationType,
        anumber: applicationNumber,
        aname: applicantName,
        datesubmit: dateOfSubmit,
        currentstatus: currentStatus,
        messages: messages,
        action: action,
        uci: UCI,
        pNumber: passportNumber,
        country: country,
        bnumber: biometricsNumber,
        dobenroll: DOBEnroll,
        edate: expiryDate,
        lmia: lmia,
        province: province,
        msg1: [msg1Subject, msg1sent, msg1read],
        msg2: [msg2Subject, msg2sent, msg2read],
        msg3: [msg3Subject, msg3sent, msg3read],
        msg4: [msg4Subject, msg4sent, msg4read],
      })
      .then((res) => {
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
        if (res.status === 201) {
          setErrorMsg(res.data["message"]);
        }
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
      });
  }

  function Validate() {
    axios
      .get(`https://canada-main.herokuapp.com/validate/${username}`)
      .then((res) => {
        if (res.status === 200) {
          setUserValidate(true);
        }
      })
      .catch((error) => {
        alert(error.response.data["message"]);
      });
  }

  function CheckAuth() {
    const adminId = sessionStorage.getItem("adminId");
    if (adminId === null) {
      navigate("/adminlogin");
    }
  }

  function handleLogout() {
    sessionStorage.clear();
    navigate("/adminlogin");
  }

  useEffect(() => {
    CheckAuth();
  }, []);

  return (
    <Main>
      <Nav>
        <img
          className="nav-img"
          onClick={() => navigate("/")}
          src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
        />
        <p className="signup" onClick={handleLogout}>
          Logout
        </p>
      </Nav>

      <Tab>
        <p onClick={() => navigate("/admin")}>&#8617; BACK</p>
      </Tab>

      <Body>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUserValidate(false);
            }}
            placeholder="Enter Username"
          />
          <button className="validate_btn" onClick={Validate}>
            Validate
          </button>
          <button
            className="validate_btn reset_btn"
            onClick={() => {
              setUserValidate(false);
              setUsername("");
            }}
          >
            Reset
          </button>
        </div>
        {userValidate && (
          <div className="form_container">
            <p className="error">{errorMsg}</p>
            <form onSubmit={SubmitApplication}>
              <div className="input_row">
                <p className="label">Username: </p>
                <i>{username}</i>
              </div>
              <div className="input_row">
                <p className="label">Application Type:</p>
                <input
                  type="text"
                  value={applicationType}
                  onChange={(e) => setApplicationType(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Application Number:</p>
                <input
                  type="text"
                  value={applicationNumber}
                  onChange={(e) => setApplicationNumber(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Applicant Name:</p>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Date Submitted:</p>
                <input
                  type="text"
                  value={dateOfSubmit}
                  onChange={(e) => setDateOfSubmit(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Current Status:</p>
                <input
                  type="text"
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Messages:</p>
                <input
                  type="text"
                  value={messages}
                  onChange={(e) => setMessages(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Action:</p>
                <input
                  type="text"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Unique Client Identifier (UCI):</p>
                <input
                  type="text"
                  value={UCI}
                  onChange={(e) => setUCI(e.target.value)}
                />
              </div>
              {/* <div className="input_row">
                <p className="label">Passport Number:</p>
                <input
                  type="text"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Country of Passport:</p>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countryList.map((country, index) => (
                    <option key={index}>{country}</option>
                  ))}
                </select>
              </div> */}
              <div className="input_row">
                <p className="label">Biometrics Number:</p>
                <input
                  type="text"
                  value={biometricsNumber}
                  onChange={(e) => setBiometricsNumber(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Date of Biometrics Enrolment:</p>
                <input
                  type="text"
                  value={DOBEnroll}
                  onChange={(e) => setDOBEnroll(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Expiry Date:</p>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              {/* <div className="input_row">
                <p className="label">LMIA Validity</p>
                <input
                  type="text"
                  value={lmia}
                  onChange={(e) => setLmia(e.target.value)}
                />
              </div> */}
              {/* <div className="input_row">
                <p className="label">Province of Employment</p>
                <input
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div> */}
              <div className="input_row">
                <p className="label">Message 1</p>
                <input
                  type="text"
                  value={msg1Subject}
                  placeholder="Subject"
                  onChange={(e) => setMsg1Subject(e.target.value)}
                />
                <input
                  type="text"
                  value={msg1sent}
                  placeholder="Date Sent"
                  onChange={(e) => setMsg1sent(e.target.value)}
                />
                <input
                  type="text"
                  value={msg1read}
                  placeholder="Date Read"
                  onChange={(e) => setMsg1read(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Message 2</p>
                <input
                  type="text"
                  value={msg2Subject}
                  placeholder="Subject"
                  onChange={(e) => setMsg2Subject(e.target.value)}
                />
                <input
                  type="text"
                  value={msg2sent}
                  placeholder="Date Sent"
                  onChange={(e) => setMsg2sent(e.target.value)}
                />
                <input
                  type="text"
                  value={msg2read}
                  placeholder="Date Read"
                  onChange={(e) => setMsg2read(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Message 3</p>
                <input
                  type="text"
                  value={msg3Subject}
                  placeholder="Subject"
                  onChange={(e) => setMsg3Subject(e.target.value)}
                />
                <input
                  type="text"
                  value={msg3sent}
                  placeholder="Date Sent"
                  onChange={(e) => setMsg3sent(e.target.value)}
                />
                <input
                  type="text"
                  value={msg3read}
                  placeholder="Date Read"
                  onChange={(e) => setMsg3read(e.target.value)}
                />
              </div>
              <div className="input_row">
                <p className="label">Message 4</p>
                <input
                  type="text"
                  value={msg4Subject}
                  placeholder="Subject"
                  onChange={(e) => setMsg4Subject(e.target.value)}
                />
                <input
                  type="text"
                  value={msg4sent}
                  placeholder="Date Sent"
                  onChange={(e) => setMsg4sent(e.target.value)}
                />
                <input
                  type="text"
                  value={msg4read}
                  placeholder="Date Read"
                  onChange={(e) => setMsg4read(e.target.value)}
                />
              </div>

              <button className="submit_btn validate_btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </Body>
      {showPopup && (
        <p onClick={() => setShowPopup(false)} className="popup">
          {errorMsg}
        </p>
      )}
    </Main>
  );
}

export default AdminApplications;

const Main = styled.div`
  width: 100vw;
  display: grid;
  grid-template-rows: 60px 50px auto;

  .popup {
    position: fixed;
    top: 50vh;
    left: 50vw;
    z-index: 10;
    background-color: whitesmoke;
    height: 75vh;
    width: 80vw;
    display: grid;
    place-items: center;
    font-weight: bolder;
    font-size: 1.5rem;
    border-radius: 10px;
    border: 3px solid #444;
    transform: translate(-50%, -50%);
  }
`;

const Nav = styled.div`
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;

  @media screen and (max-width: 500px) {
    .nav-img {
      margin-left: 10px !important;
      margin-right: 10px !important;
    }

    .signup {
      display: none;
    }
  }

  .nav-img {
    margin-left: 25px;
    height: 35px;
  }

  .signup {
    font-size: 1.25rem;
    margin-right: 25px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  .signup:hover {
    cursor: pointer;
  }
`;

const Tab = styled.div`
  display: grid;
  grid-template-columns: auto;

  @media screen and (max-width: 500px) {
    place-items: center;

    p {
      text-align: center;
      font-size: 1rem !important;
    }
  }

  p {
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-weight: 600;
    border: solid 1px black;
  }

  p:hover {
    background-color: #fdcac4;
    cursor: pointer;
  }
`;

const Body = styled.div`
  background-color: whitesmoke;
  display: grid;
  place-items: center;
  padding: 50px 10px;

  .error {
    text-align: center;
    font-family: monospace;
    padding: 10px;
    background-color: #333;
    color: #fff;
    margin: 15px auto;
    margin-bottom: 25px;
    border-radius: 5px;
    width: fit-content;
  }

  .validate_btn {
    font-size: 1rem;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #000;
    color: white;
    margin: 0 15px;
    font-weight: normal;
  }

  .reset_btn {
    background-color: #700415;
    color: #fff;
  }

  .input_row {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .label {
    width: 250px;
    font-weight: 700;
  }

  input,
  select {
    padding: 5px;
    margin-left: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .form_container {
    border: 2px solid #bbb;
    padding: 20px;
    border-radius: 5px;
    margin-top: 30px;
  }

  .submit_btn {
    background-color: #297373;
    margin-left: 0;
    margin-top: 10px;
    cursor: pointer;
  }
`;
