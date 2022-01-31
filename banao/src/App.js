import { useState } from "react";
import styled from "styled-components";
import Doctor from "./doctor.png";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [line1, setLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [userType, setUserType] = useState("Patient");

  const [dashboardAccess, setDashboardAccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Authenticating...");

  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");

  const API =
    "https://dry-crag-58790.herokuapp.com/https://saranshapi.herokuapp.com/banao/?";

  async function SignupForm(e) {
    e.preventDefault();
    if (password == passwordC) {
      setError(true);
      let Response = await fetch(
        `${API}fname=${fName}&lname=${lName}&user=${username}&email=${email}&pass=${password}&line1=${line1}&city=${city}&state=${state}&pin=${pincode}&role=${userType}&mode=signup`
      );
      Response = await Response.json();
      setErrorMessage(Response["message"]);
      setTimeout(() => {
        setError(false);
        setErrorMessage("Authenticating...");
      }, 10000);
      if (Response["status"] === "success") {
        setDashboardAccess(true);
      }
    } else {
      setErrorMessage("Passwords do not match!");
      setError(true);
    }
  }

  async function LoginForm(e) {
    e.preventDefault();
    setError(true);
    let Response = await fetch(
      `${API}fname=&lname=&user=&email=${email2}&pass=${password2}&line1=&city=&state=&pin=&role=&mode=login`
    );
    Response = await Response.json();
    setErrorMessage(Response["message"]);
    if (Response["status"] === "success") {
      setFName(Response["fname"]);
      setLName(Response["lname"]);
      setUsername(Response["username"]);
      setLine1(Response["line1"]);
      setCity(Response["city"]);
      setState(Response["state"]);
      setPincode(Response["pincode"]);
      setUserType(Response["role"]);
      setDashboardAccess(true);
    }
    setTimeout(() => {
      setError(false);
      setErrorMessage("Authenticating...");
    }, 10000);
  }

  function Logout() {
    setFName("");
    setEmail("");
    setPassword2("");
    setPassword("");
    setEmail2("");
    setLName("");
    setUsername("");
    setLine1("");
    setCity("");
    setState("");
    setPincode("");
    setUserType("");
    setDashboardAccess(false);
  }

  return (
    <Conatainer>
      {!dashboardAccess && (
        <Signup>
          <Form onSubmit={SignupForm}>
            <p>Signup</p>
            <input
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
              placeholder="Last Name"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <input
              type="password"
              value={passwordC}
              onChange={(e) => setPasswordC(e.target.value)}
              required
              placeholder="Confirm Password"
            />
            <label htmlFor="address">Address</label>
            <input
              name="address"
              type="text"
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
              required
              placeholder="Line 1"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="City"
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              placeholder="State"
            />
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
              placeholder="Pincode"
            />
            <label htmlFor="user">Select role</label>
            <select
              name="user"
              value={userType}
              required
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
            </select>
            <label htmlFor="profile">Upload Profile Picture</label>
            <input
              name="profile"
              type="file"
              style={{ marginLeft: "auto", marginRight: "auto", width: "95px" }}
            />
            <Button>Register as {userType}</Button>
          </Form>
        </Signup>
      )}
      {!dashboardAccess && (
        <Login>
          <Form onSubmit={LoginForm}>
            <p>Login</p>
            <input
              type="email"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Password"
              required
            />
            <Button>Login</Button>
          </Form>
        </Login>
      )}
      {dashboardAccess && (
        <Dashboard>
          <h2>
            Welcome to <span>{userType}</span> Dashboard
          </h2>
          <Cards>
            <Card>
              <p>First Name</p>
              <span>{fName}</span>
            </Card>
            <Card>
              <p>Last Name</p>
              <span>{lName}</span>
            </Card>
            <Card>
              <p>Username</p>
              <span>{username}</span>
            </Card>
            <Card>
              <p>Password</p>
              <span>{password}</span>
            </Card>
            <Card>
              <p>Address Line 1</p>
              <span>{line1}</span>
            </Card>
            <Card>
              <p>City</p>
              <span>{city}</span>
            </Card>
            <Card>
              <p>State</p>
              <span>{state}</span>
            </Card>
            <Card>
              <p>Pincode</p>
              <span>{pincode}</span>
            </Card>
            <Card>
              <p>Role</p>
              <span>{userType}</span>
            </Card>
          </Cards>
          <img src={Doctor} />
          <LogoutButton onClick={Logout}>Logout</LogoutButton>
        </Dashboard>
      )}
      {error && (
        <Error
          onClick={() => {
            setError(false);
            setErrorMessage("Authenticating...");
          }}
        >
          <p>{errorMessage}</p>
        </Error>
      )}
    </Conatainer>
  );
}

export default App;

const Conatainer = styled.div`
  display: flex;
  font-family: monospace;
  @import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap");
  font-family: "Mochiy Pop P One", sans-serif;

  @media (max-width: 425px) {
    display: block;
  }
`;

const Signup = styled.div`
  width: 50vw;
  min-height: 100vh;
  background-color: #bad4aa;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 425px) {
    width: 100vw;
  }
`;

const Login = styled.div`
  width: 50vw;
  min-height: 100vh;
  background-color: #d4d4aa;

  @media (max-width: 425px) {
    width: 100vw;
    padding-top: 50px;
    min-height: 40vh;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  input,
  label,
  select {
    width: 80%;
    border: none;
    border-radius: 25px;
    padding: 10px;
    margin: 10px 0;
    outline: none;
    text-align: center;
    font-size: 1rem;
  }

  input,
  select {
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  label {
    margin-bottom: 0px;
    padding-bottom: 2px;
  }

  select {
    padding-right: 20px;
  }
`;

const Button = styled.button`
  padding: 15px 25px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-size: 1rem;
  font-family: monospace;

  :hover {
    opacity: 0.75;
  }
`;

const Error = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);

  p {
    background-color: red;
    padding: 20vh 10vw;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 25px;
    border: 5px solid black;
  }
`;

const Dashboard = styled.div`
  background: linear-gradient(to left, #ffefba, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  h2 {
    font-size: 2.5rem;
    margin: 50px;

    span {
      color: darkslategray;
    }
  }

  img {
    width: 30vw;
    right: 2vw;
    top: 30vh;
    position: absolute;
  }
`;

const Cards = styled.div`
  width: 50%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to left, #e1eec3, #f05053);
  width: fit-content;
  padding: 25px 50px 25px 25px;
  border-radius: 5px;
  margin: 20px;

  p {
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
`;

const LogoutButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 15px;
`;
