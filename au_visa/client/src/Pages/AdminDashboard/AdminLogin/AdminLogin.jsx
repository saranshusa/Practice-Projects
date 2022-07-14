import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AdminLogin.module.css";
import { API } from "../../../API";
import axios from "axios";

function AdminLogin() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function HandleLogin(e) {
    e.preventDefault();
    setErrorMsg("Authenticating...");
    axios
      .post(`${API}/adminlogin`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setErrorMsg(res.data["message"]);
        if (res.status === 200) {
          sessionStorage.setItem("adminId", res.data["id"]);
          navigate("/admin");
        }
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
      });
  }

  return (
    <div className={classes.main}>
      <form onSubmit={HandleLogin} className={classes.login_form}>
        <h2>Admin Login</h2>
        <p>{errorMsg}</p>
        <div className={classes.input_div}>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMsg(null);
            }}
            placeholder="Email"
            required
          />
        </div>
        <div className={classes.input_div}>
          <span>Password</span>
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
        </div>
        <div className={classes.input_div}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
