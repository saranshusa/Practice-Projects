import React, { useEffect, useState } from "react";
import classes from "./VisaDetails.module.css";
import logo from "../../Assets/logostacked.png";
import HelpIcon from "@mui/icons-material/Help";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import InfoIcon from "@mui/icons-material/Info";

function VisaDetails() {
  const [date, setDate] = useState();

  const [fName, setFName] = useState("");
  const [gName, setGName] = useState("");
  const [vDesc, setVDesc] = useState("");
  const [dNumber, setDNumber] = useState("");
  const [country, setCountry] = useState("");
  const [vClass, setVClass] = useState("");
  const [vStream, setVStream] = useState("");
  const [vApplicant, setVApplicant] = useState("");
  const [vGrantDate, setVGrantDate] = useState();
  const [vExpiry, setVExpiry] = useState("");
  const [location, setLocation] = useState("");
  const [vStatus, setVStatus] = useState("");
  const [vGrantNumber, setVGrantNumber] = useState("");
  const [entries, setEntries] = useState("");
  const [dob, setDob] = useState("");
  const [aAfter, setAAfter] = useState("");
  const [period, setPeriod] = useState("");
  const [work, setWork] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [study, setStudy] = useState("");
  const [vConditions, setVConditions] = useState([]);
  const [file, setFile] = useState("");

  useEffect(() => {
    var today = new Date();
    setDate(today.toString());
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setFName(data.fName);
      setGName(data.gName);
      setVDesc(data.vDesc);
      setDNumber(data.dNumber);
      setCountry(data.country);
      setVClass(data.vClass);
      setVStream(data.vStream);
      setVApplicant(data.vApplicant);
      setVGrantDate(data.vGrantDate);
      setVExpiry(data.vExpiry);
      setLocation(data.location);
      setVStatus(data.vStatus);
      setVGrantNumber(data.vGrantNumber);
      setEntries(data.entries);
      setDob(data.dob);
      setAAfter(data.aAfter);
      setPeriod(data.period);
      setWork(data.work);
      setWorkplace(data.workplace);
      setStudy(data.study);
      setVConditions(data.vConditions);
      setFile(data.file);
    }
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <img src={logo} />
        <h1>VEVO for Visa Holders</h1>
      </div>
      <div className={classes.body}>
        <p className={classes.form_title}>Visa Details</p>
        <div className={classes.information}>
          <p className={classes.information_title}>
            <InfoIcon sx={{ fontSize: 15 }} style={{ marginRight: "5px" }} />
            Information
          </p>
          <p className={classes.information_text}>
            The entitlements associated with your current 'in-effect' visa are
            displayed below. If you believe these details are not correct,
            please contact the Department. Please note that visa application
            status and visa grants that are not yet in effect will not be shown
            below.
          </p>
        </div>
        <form
          style={{ paddingBottom: `${vConditions.length}rem` }}
          className={classes.form}
        >
          <div className={classes.dataSet}>
            <p>Current date and time</p>
            <p>{date}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Family name</p>
            <p>{fName}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Given name(s)</p>
            <p>{gName}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa Description</p>
            <p>{vDesc}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Document Number</p>
            <p>{dNumber}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Country of Passport</p>
            <p>{country}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa class / subclass</p>
            <p>{vClass}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa stream</p>
            <p>{vStream}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa applicant</p>
            <p>{vApplicant}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa grant date</p>
            <p>{vGrantDate}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa expiry date</p>
            <p>{vExpiry}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Location</p>
            <p>{location}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa status</p>
            <p>{vStatus}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa grant number</p>
            <p>{vGrantNumber}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Entries allowed</p>
            <p>{entries}</p>
          </div>
          {/* <div className={classes.dataSet}>
            <p>Date of Birth</p>
            <p>{dob}</p>
          </div> */}
          <div className={classes.dataSet}>
            <p>Must not arrive after</p>
            <p>{aAfter}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Period of stay</p>
            <p>{period}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Work entitlements</p>
            <p>{work}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Workplace rights</p>
            <p>{workplace}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Study entitlements</p>
            <p>{study}</p>
          </div>
          <div className={classes.dataSet}>
            <p>Visa condition(s)</p>
            <p>
              {vConditions.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </p>
          </div>
        </form>
        <div className={classes.btn_ctn}>
          <button type="button">New enquiry</button>
          <div>
            <button
              onClick={() => window.location.assign(`${file}`)}
              style={{ marginRight: "10px" }}
            >
              View as PDF
            </button>
            <button>Send Email</button>
          </div>
        </div>
        <div className={classes.footer}>
          <p>Accessibility</p>
          <p>Online Security</p>
          <p>Privacy</p>
          <p>Copyright & Disclaimer</p>
          <p>Change Password</p>
        </div>
      </div>
    </div>
  );
}

export default VisaDetails;
