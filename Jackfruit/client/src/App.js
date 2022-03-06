import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function App() {
  let navigate = useNavigate();
  const [basic, setBasic] = useState("");
  const [LTA, setLTA] = useState("");
  const [HRA, setHRA] = useState("");
  const [FA, setFA] = useState("");
  const [invest, setInvest] = useState("");
  const [rent, setRent] = useState("");
  const [cityType, setCityType] = useState("Metro City");
  const [medclaim, setMedclaim] = useState("");
  const [appHRA, setAppHRA] = useState("");
  const [taxInc, setTaxInc] = useState("");
  const [popup, setPopup] = useState(false);
  const [taxPopup, setTaxPopup] = useState(false);

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

  function CalculateHRA(e) {
    e.preventDefault();

    let result = 0;
    if (cityType === "Metro City") {
      result = Math.min(
        0.5 * parseFloat(basic * 12),
        parseFloat(rent * 12) - 0.1 * parseFloat(basic * 12),
        parseFloat(HRA * 12)
      ).toFixed(2);
    } else {
      result = Math.min(
        0.4 * parseFloat(basic * 12),
        parseFloat(rent * 12) - 0.1 * parseFloat(basic * 12),
        parseFloat(HRA * 12)
      ).toFixed(2);
    }
    setAppHRA(result);
    setPopup(true);
  }

  function CalculateTaxInc() {
    let result =
      parseFloat(basic * 12) +
      parseFloat(LTA * 12) +
      parseFloat(HRA * 12) +
      parseFloat(FA * 12) -
      parseFloat(appHRA) -
      parseFloat(invest) -
      parseFloat(medclaim);

    setTaxInc(result);

    const data = {
      basic: basic * 12,
      LTA: LTA * 12,
      HRA: HRA * 12,
      FA: FA * 12,
      invest: invest,
      rent: rent * 12,
      cityType: cityType,
      medclaim: medclaim,
      appHRA: appHRA,
    };

    axios
      .post("https://jackfruitapi.herokuapp.com/data", {
        email: sessionStorage.getItem("email"),
        id: sessionStorage.getItem("userId"),
        data: data,
      })
      .then((res) => {
        if (res.status === 200) {
          setPopup(false);
          setTaxPopup(true);
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
    <Main>
      <Nav>
        <img
          className="nav-img"
          src="https://jackfruit.one/static/media/Logo.60c1af8e.svg"
        />
        <p className="logout" onClick={handleLogout}>
          Logout
        </p>
      </Nav>

      <Form onSubmit={CalculateHRA}>
        <Left>
          <h2>Fill Salary Details</h2>
          <div className="input-div">
            <span>Basic Salary</span>
            <input
              type="number"
              value={basic}
              onChange={(e) => {
                setBasic(e.target.value);
              }}
              placeholder="Basic Salary"
              required
            />
          </div>
          <div className="input-div">
            <span>LTA</span>
            <input
              type="number"
              value={LTA}
              onChange={(e) => {
                setLTA(e.target.value);
              }}
              placeholder="LTA"
              required
            />
          </div>
          <div className="input-div">
            <span>HRA</span>
            <input
              type="number"
              value={HRA}
              onChange={(e) => {
                setHRA(e.target.value);
              }}
              placeholder="HRA"
              required
            />
          </div>
          <div className="input-div">
            <span>Food Allowance</span>
            <input
              type="number"
              value={FA}
              onChange={(e) => {
                setFA(e.target.value);
              }}
              placeholder="Food Allowance"
              required
            />
          </div>
        </Left>

        <Right>
          <h2>Fill Other Details</h2>
          <div className="input-div">
            <span>Investments under section 80C</span>
            <input
              type="number"
              value={invest}
              onChange={(e) => {
                setInvest(e.target.value);
              }}
              placeholder="Enter Investments"
              required
            />
          </div>
          <div className="input-div">
            <span>Actual Rent</span>
            <input
              type="number"
              value={rent}
              onChange={(e) => {
                setRent(e.target.value);
              }}
              placeholder="Actual Rent"
              required
            />
          </div>
          <div className="input-div">
            <span>City Type</span>
            <select
              value={cityType}
              onChange={(e) => {
                setCityType(e.target.value);
              }}
            >
              <option value="Metro City">Metro City</option>
              <option value="Non Metro City">Non Metro City</option>
            </select>
          </div>
          <div className="input-div">
            <span>Mediclaim Policy Premium</span>
            <input
              type="number"
              value={medclaim}
              onChange={(e) => {
                setMedclaim(e.target.value);
              }}
              placeholder="Mediclaim Policy Premium"
              required
            />
          </div>
        </Right>
        <div className="input-div submit-btn">
          <button type="submit">Compute Applicable HRA</button>
        </div>
      </Form>
      {popup && (
        <Popup>
          <div className="box">
            <div className="row">
              <p className="head">Basic Salary</p>
              <span>₹ {basic}</span>
            </div>
            <div className="row">
              <p className="head">LTA</p>
              <span>₹ {LTA}</span>
            </div>
            <div className="row">
              <p className="head">HRA</p>
              <span>₹ {HRA}</span>
            </div>
            <div className="row">
              <p className="head">Food Allowance</p>
              <span>₹ {FA}</span>
            </div>
            <div className="row">
              <p className="head">Investments</p>
              <span>₹ {invest}</span>
            </div>
            <div className="row">
              <p className="head">Rent</p>
              <span>₹ {rent}</span>
            </div>
            <div className="row">
              <p className="head">City Type</p>
              <span>{cityType}</span>
            </div>
            <div className="row">
              <p className="head">Mediclaim Policy Premium</p>
              <span>₹ {medclaim}</span>
            </div>
            <div className="row">
              <p className="head">Applicable HRA</p>
              <span>₹ {appHRA}</span>
            </div>
            <button
              onClick={(e) => setPopup(false)}
              style={{ backgroundColor: "#f44336", border: "#f44336" }}
            >
              CANCEL
            </button>
            <button onClick={CalculateTaxInc}>SUBMIT</button>
            <span className="submit-text">
              Submit data to Calculate Taxable Income.
            </span>
          </div>
        </Popup>
      )}
      {taxPopup && (
        <Popup>
          <div className="box" style={{ minHeight: "25vh" }}>
            <div className="row">
              <p className="head">Taxable Income</p>
              <span>₹ {taxInc}</span>
            </div>
            <button
              onClick={(e) => setTaxPopup(false)}
              style={{ backgroundColor: "#f44336", border: "#f44336" }}
            >
              CLOSE
            </button>
          </div>
        </Popup>
      )}
    </Main>
  );
}

export default App;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px auto;
`;

const Nav = styled.div`
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;

  .nav-img {
    margin-left: 25px;
    height: 60px;
  }

  .logout {
    font-size: 1.25rem;
    margin-right: 25px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  .logout:hover {
    color: #333;
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 50vw 50vw;
  background: linear-gradient(to top, #a1ffce, #faffd1);

  @media screen and (max-width: 600px) {
    grid-template-columns: 100vw;

    .input-div {
      width: 90vw !important;
    }

    .submit-btn {
      width: 100vw !important;
    }
  }

  h2 {
    text-align: center;
    font-style: italic;
    margin-bottom: 40px;
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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  select {
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

  button:hover {
    cursor: pointer;
  }

  .submit-btn {
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100vw;
  }
`;

const Left = styled.div`
  display: grid;
  place-content: center;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

const Right = styled.div`
  display: grid;
  place-content: center;

  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
  display: grid;
  place-content: center;

  @media screen and (max-width: 600px) {
    .box {
      width: 95vw !important;
      max-height: 95vh !important;
      padding: 10px !important ;
    }

    .row {
      font-size: 1rem !important;
    }
  }

  .box {
    width: 500px;
    min-height: 75vh;
    background-color: White;
    border: 3px solid #333;
    border-radius: 10px;
    display: grid;
    place-content: center;
    padding: 25px 0;
  }

  .row {
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgray;
  }

  p {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: blanchedalmond;
  }

  span {
    float: right;
    margin-left: 20px;
    font-family: monospace;
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
  button:hover {
    cursor: pointer;
  }

  .submit-text {
    text-align: center;
    margin-top: 5px;
  }
`;
