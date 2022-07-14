import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setName, setPhone } from "../Reducers/User";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import PasswordIcon from "@mui/icons-material/Password";
import SEND from "../WhasApp";

function Home() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [otpSent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");
  const [secret, setSecret] = useState("");

  function HandleLogin(e) {
    e.preventDefault();
    if (user.phone.length === 10) {
      let SECRET = SEND(user.phone);
      setSecret(SECRET);
      setOtpSent(true);

      alert(`Your temporary OTP is ${SECRET}`);
    }
  }
  console.log(secret);
  console.log(OTP);

  function HandleVerify(e) {
    e.preventDefault();
    if (secret == OTP) {
      alert("Success");
    } else {
      alert("Wrong OTP");
    }
  }

  function Add() {
    let DATA = JSON.parse(localStorage.getItem("Data"));
    DATA.push(item);
    localStorage.setItem("Data", JSON.stringify(DATA));
  }

  useEffect(() => {
    !localStorage.getItem("Data") &&
      localStorage.setItem("Data", JSON.stringify([]));
  }, []);

  return (
    <div className={classes.main}>
      <form onSubmit={HandleLogin}>
        <div className={classes.input_ctn}>
          <input
            type="text"
            placeholder="Name"
            required
            disabled={otpSent}
            value={user.name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          <PersonIcon className={classes.icon} />
        </div>
        <div className={classes.input_ctn}>
          <input
            type="tel"
            placeholder="Phone"
            required
            disabled={otpSent}
            value={user.phone}
            onChange={(e) => dispatch(setPhone(e.target.value))}
          />
          <PhoneIcon className={classes.icon} />
        </div>

        {!otpSent && (
          <div className={classes.input_ctn}>
            <button className={classes.button}>Login with WhatsApp</button>
          </div>
        )}
      </form>

      {otpSent && (
        <form onSubmit={HandleVerify}>
          <div className={classes.input_ctn}>
            <input
              type="tel"
              placeholder="OTP"
              required
              maxLength={6}
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
            />
            <PasswordIcon className={classes.icon} />
          </div>
          <div className={classes.input_ctn}>
            <button className={classes.button}>Verify & Login</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Home;
