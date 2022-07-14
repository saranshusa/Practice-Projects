import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import AllApplications from "../components/AllApplications";

function Admin() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [aNumber, setANumber] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [statusMsg, setStatusMsg] = useState(null);
  const [tabToRender, setTabToRender] = useState(1);
  const [authDetails, setAuthDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [file1, setFile1] = useState({});
  const [file2, setFile2] = useState({});
  const [file3, setFile3] = useState({});
  const [file4, setFile4] = useState({});

  const [reasyForUpload, setReasyForUpload] = useState(false);

  function HandleCreateUser(e) {
    e.preventDefault();
    setErrorMsg("Submitting...");
    axios
      .post("https://canada-main.herokuapp.com/signup", {
        username: username,
        password: password,
      })
      .then((res) => {
        setErrorMsg(res.data["message"]);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
        if (res.status === 201) {
          setAuthDetails(true);
        }
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
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

  function HandleFile1Upload(e) {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file, 1);
  }

  function HandleFile2Upload(e) {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file, 2);
  }

  function HandleFile3Upload(e) {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file, 3);
  }

  function HandleFile4Upload(e) {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file, 4);
  }

  const uploadFiles = (file, fileNumber) => {
    if (!file) return;
    if (username === "") {
      alert("Validate Username first!");
      return;
    }
    const sotrageRef = ref(storage, `files/${username}/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (fileNumber === 1) {
          setFile1({
            progress: prog,
          });
        }
        if (fileNumber === 2) {
          setFile2({
            progress: prog,
          });
        }
        if (fileNumber === 3) {
          setFile3({
            progress: prog,
          });
        }
        if (fileNumber === 4) {
          setFile4({
            progress: prog,
          });
        }
      },
      (error) => alert(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (fileNumber === 1) {
            setFile1({
              name: file.name,
              link: downloadURL,
            });
          }
          if (fileNumber === 2) {
            setFile2({
              name: file.name,
              link: downloadURL,
            });
          }
          if (fileNumber === 3) {
            setFile3({
              name: file.name,
              link: downloadURL,
            });
          }
          if (fileNumber === 4) {
            setFile4({
              name: file.name,
              link: downloadURL,
            });
          }
        });
      }
    );
  };

  const fileData = [
    {
      name: file1.name,
      link: file1.link,
    },
    {
      name: file2.name,
      link: file2.link,
    },
    {
      name: file3.name,
      link: file3.link,
    },
    {
      name: file4.name,
      link: file4.link,
    },
  ];

  function postUserData() {
    if (username === "") {
      return;
    }
    console.log(fileData);
    setStatusMsg("Saving...");
    axios
      .post("https://canada-main.herokuapp.com/data", {
        username: username,
        data: fileData,
      })
      .then((res) => {
        if (res.status === 200) {
          setStatusMsg(res.data["message"]);
        }
      })
      .catch((error) => {
        setStatusMsg(error.response.data["message"]);
      });
    setTimeout(() => {
      setStatusMsg(null);
    }, 5000);
  }

  function getUserData() {
    setFile1({});
    setFile2({});
    setFile3({});
    setFile4({});
    if (username === "" || aNumber === "") {
      return;
    }
    axios
      .get(`https://canada-main.herokuapp.com/links/${username}/${aNumber}`)
      .then((res) => {
        if (res.status === 200) {
          if (res.data["data"].length === 0) {
            setAuthDetails(true);
            setStatusMsg("No files found!");
            return;
          }
          res.data["data"][0]["name"] &&
            setFile1({
              name: res.data["data"][0]["name"],
              link: res.data["data"][0]["link"],
            });
          res.data["data"][1]["name"] &&
            setFile2({
              name: res.data["data"][1]["name"],
              link: res.data["data"][1]["link"],
            });
          res.data["data"][2]["name"] &&
            setFile3({
              name: res.data["data"][2]["name"],
              link: res.data["data"][2]["link"],
            });
          res.data["data"][3]["name"] &&
            setFile4({
              name: res.data["data"][3]["name"],
              link: res.data["data"][3]["link"],
            });
          setAuthDetails(true);
        }
      })
      .catch((error) => {
        setStatusMsg(error.response.data["message"]);
        setReasyForUpload(false);
      });
    setTimeout(() => {
      setStatusMsg(null);
    }, 5000);
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
        {/* <Link className="signup" to="/signup">
          Sign Up
        </Link> */}
      </Nav>

      <Tab>
        <p style={{ borderRight: "none" }} onClick={() => setTabToRender(1)}>
          Create New User
        </p>
        <p style={{ borderRight: "none" }} onClick={() => setTabToRender(2)}>
          Upload New Document
        </p>
        <p style={{ borderRight: "none" }} onClick={() => setTabToRender(3)}>
          All Applications
        </p>
        <p onClick={() => navigate("/admin-applications")}>New Application</p>
      </Tab>

      <Body>
        {tabToRender === 1 && (
          <Form onSubmit={HandleCreateUser}>
            <h2>Create New User Account</h2>
            {errorMsg && <p>{errorMsg}</p>}
            <div className="input-div">
              <span>Username</span>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-div">
              <span>Password</span>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Password"
                required
              />
            </div>
            <div className="input-div">
              <button type="submit">SUBMIT</button>
            </div>

            <Right>
              <div className="auth-box">
                <p className="auth-head">
                  Username<span>{username}</span>
                </p>
                <p className="auth-head">
                  Password<span>{password}</span>
                </p>
              </div>
            </Right>
          </Form>
        )}

        {tabToRender === 2 && (
          <Upload>
            <div className="select-user">
              <div>
                Username
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ marginRight: "100px" }}
                />
                Application Number
                <input
                  type="text"
                  value={aNumber}
                  onChange={(e) => setANumber(e.target.value)}
                />
              </div>
              <button
                onClick={getUserData}
                style={{
                  color: "black",
                  backgroundColor: "chartreuse",
                }}
              >
                Validate
              </button>
              <button
                onClick={() => {
                  setUsername("");
                  setAuthDetails(false);
                  setFile1({});
                  setFile2({});
                  setFile3({});
                  setFile4({});
                }}
              >
                Reset
              </button>
            </div>

            <div className="selected-user">
              Uploading Files for <span>{authDetails && username}</span>
            </div>

            <div>
              <Card>
                <p className="file-number">File 1</p>
                <File onSubmit={HandleFile1Upload}>
                  <input type="file" />
                  <button type="submit">Upload File</button>
                </File>
                <p className="up-percent">{file1 && file1.progress} %</p>
              </Card>
              <Card>
                <p className="file-number">File 2</p>
                <File onSubmit={HandleFile2Upload}>
                  <input type="file" />
                  <button type="submit">Upload File</button>
                </File>
                <p className="up-percent">{file2 && file2.progress} %</p>
              </Card>
              <Card>
                <p className="file-number">File 3</p>
                <File onSubmit={HandleFile3Upload}>
                  <input type="file" />
                  <button type="submit">Upload File</button>
                </File>
                <p className="up-percent">{file3 && file3.progress} %</p>
              </Card>
              <Card>
                <p className="file-number">File 4</p>
                <File onSubmit={HandleFile4Upload}>
                  <input type="file" />
                  <button type="submit">Upload File</button>
                </File>
                <p className="up-percent">{file4 && file4.progress} %</p>
              </Card>
            </div>

            <Status>
              <h3>Status</h3>
              {statusMsg && <p className="status-msg">{statusMsg}</p>}

              {file1 && (
                <div className="file-status">
                  <p>File 1</p>
                  <p>{file1.name}</p>
                  <a href={file1.link}>Download</a>
                </div>
              )}
              {file2 && (
                <div className="file-status">
                  <p>File 2</p>
                  <p>{file2.name}</p>
                  <a href={file2.link}>Download</a>
                </div>
              )}
              {file3 && (
                <div className="file-status">
                  <p>File 3</p>
                  <p>{file3.name}</p>
                  <a href={file3.link}>Download</a>
                </div>
              )}
              {file4 && (
                <div className="file-status">
                  <p>File 4</p>
                  <p>{file4.name}</p>
                  <a href={file4.link}>Download</a>
                </div>
              )}

              <button onClick={postUserData}>Save Changes</button>
            </Status>
          </Upload>
        )}

        {tabToRender === 3 && <AllApplications />}
      </Body>
      {showPopup && (
        <p onClick={() => setShowPopup(false)} className="popup">
          {errorMsg}
        </p>
      )}
    </Main>
  );
}

export default Admin;

const Main = styled.div`
  min-height: 100vh;
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
  grid-template-columns: auto auto auto auto;

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
`;

const Form = styled.form`
  @media screen and (max-width: 500px) {
    .input-div {
      width: 100% !important;
      padding: 0 15px;
    }

    h2 {
      max-width: 95% !important;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 40px;
    max-width: 400px;
  }

  p {
    text-align: center;
    font-family: monospace;
    padding: 10px;
    background-color: #333;
    color: #fff;
    margin: 15px 0;
    margin-bottom: 25px;
    border-radius: 5px;
  }

  .input-div {
    display: flex;
    flex-direction: column;
    width: 35vw;
    max-width: 400px;
    margin-bottom: 25px;
  }

  span {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    font-size: 1.25rem;
    outline: none;
    border-radius: 5px;
    border: 1px solid #a0a0a0;
  }

  button {
    font-size: 1.15rem;
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #418af2;
    background-color: #418af2;
    color: white;
  }
`;

const Right = styled.div`
  display: grid;
  place-content: center;
  background: linear-gradient(to top, #a1ffce, #faffd1);

  @media screen and (max-width: 600px) {
    .input-div {
      width: 90vw !important;
    }

    .auth-box {
      width: 90% !important;
      margin: 15px auto;
      min-width: 90vw !important;
    }

    .auth-head {
      display: flex;
      flex-direction: column;
    }

    .auth-head span {
      margin: 10px 0;
      width: 100%;
      margin-left: 0px !important;
    }
  }

  .auth-box {
    width: 35vw;
    max-width: 400px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    font-size: 1.25rem;
    max-width: 400px;
    border: solid 3px #333;
  }

  .auth-head {
    font-weight: bold;
    margin-bottom: 15px;
    font-family: monospace;
    text-align: left;
  }

  .auth-head span {
    font-family: monospace;
    padding: 5px 10px;
    background-color: bisque;
    border-radius: 5px;
    margin-left: 20px;
    font-weight: normal;
    color: black;
  }
`;

const Upload = styled.div`
  display: grid;
  grid-template-rows: 105px 50px auto auto;
  width: 100vw;
  height: 100%;
  place-items: center;

  .select-user {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: auto max-content max-content;
    place-items: center;
    border-bottom: solid 1px black;
    background-color: #ece8ef;
    overflow-y: hidden;

    div {
      font-weight: bold;
      font-size: 1.25rem;
      background-color: #fdf0d5;
      width: 100%;
      padding-left: 50px;
    }

    input {
      margin: 10px;
      margin-left: 25px;
      padding: 5px 10px;
      font-size: 1.1rem;
      outline: none;
      border-radius: 5px;
      border: 1px solid #a0a0a0;
      font-weight: 500;
    }

    button {
      font-size: 1rem;
      padding: 8px 10px;
      border-radius: 5px;
      border: 1px solid #000;
      background-color: #000;
      color: white;
      margin: 0 15px;
      font-weight: bold;
    }
  }

  .selected-user {
    font-weight: bold;

    span {
      text-decoration: underline;
    }
  }
`;

const Card = styled.div`
  width: 100vw;
  border: 3px solid #555;
  display: grid;
  grid-template-columns: 100px auto 100px;
  background-color: #ece8ef;
  place-items: center;
  font-size: 1rem;
  margin: 20px 0;

  .file-number {
    font-weight: bold;
    background-color: #ee964b;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 3px solid #555;
  }

  button {
    background-color: #197278;
    color: #fff;
    border: none;
    font-weight: bold;
    border-left: 3px solid #555;
    border-right: 3px solid #555;
    cursor: pointer;
  }

  .up-percent {
    font-weight: bold;
    background-color: #adf7b6;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const File = styled.form`
  display: grid;
  grid-template-columns: auto 100px;
  width: 100%;
  padding-left: 25px;

  input {
    padding: 10px;
    outline: none;
  }
`;

const Status = styled.div`
  width: 100vw;
  border-top: 3px solid #333;
  padding-top: 20px;
  text-align: center;

  h3 {
    text-align: center;
  }

  .status-msg {
    text-align: center;
    font-family: monospace;
    padding: 10px;
    background-color: #333;
    color: #fff;
    margin: 15px 0;
    margin-bottom: 25px;
    border-radius: 5px;
    max-width: fit-content;
    margin: 10px auto;
  }

  .file-status {
    display: grid;
    place-items: center;
    font-weight: bold;
    grid-template-columns: 100px auto 100px;
    margin: 20px 0;
  }

  p {
    display: grid;
    place-items: center;
  }

  button {
    font-size: 1.15rem;
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #418af2;
    background-color: #418af2;
    color: white;
    cursor: pointer;
  }
`;
