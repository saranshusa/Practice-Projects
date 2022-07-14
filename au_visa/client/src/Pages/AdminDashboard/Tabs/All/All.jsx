import React, { useEffect, useState } from "react";
import classes from "./All.module.css";
import { API } from "../../../../API";
import axios from "axios";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { storage } from "../../../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function All() {
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
  const [vConditions, setVConditions] = useState("");
  const [file, setFile] = useState("");
  const [id, setId] = useState("");

  const [data, setData] = useState(null);

  const [showItem, setShowItem] = useState(false);
  const [itemToShow, setItemToShow] = useState(null);
  const [fileChanged, setFileChanged] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/get-all-applications`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function UpdateFileAndSubmit() {
    console.log("FILE");

    let dirName =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const sotrageRef = ref(storage, `files/${dirName}/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => alert(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const VC = [];
          vConditions.split(";").map((item) => VC.push(item.trim(" ")));

          axios
            .post(`${API}/new-application`, {
              fName,
              gName,
              vDesc,
              dNumber,
              country,
              vClass,
              vStream,
              vApplicant,
              vGrantDate,
              vExpiry,
              location,
              vStatus,
              vGrantNumber,
              entries,
              dob,
              aAfter,
              period,
              work,
              workplace,
              study,
              vConditions: VC,
              file: downloadURL,
            })
            .then((res) => {
              Delete();
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
    );
  }

  function SendDataToBackend(e) {
    e.preventDefault();

    const VC = [];
    vConditions.split(";").map((item) => VC.push(item.trim(" ")));

    axios
      .post(`${API}/new-application`, {
        fName,
        gName,
        vDesc,
        dNumber,
        country,
        vClass,
        vStream,
        vApplicant,
        vGrantDate,
        vExpiry,
        location,
        vStatus,
        vGrantNumber,
        entries,
        dob,
        aAfter,
        period,
        work,
        workplace,
        study,
        vConditions: VC,
        file,
      })
      .then((res) => {
        Delete();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Delete() {
    axios
      .post(`${API}/delete`, {
        id,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function HandleFileChange(e) {
    setFile(null);
    const file = e.target.files[0];
    setFile(file);
    setFileChanged(true);
  }

  useEffect(() => {
    if (itemToShow) {
      setFName(itemToShow.fName);
      setGName(itemToShow.gName);
      setVDesc(itemToShow.vDesc);
      setDNumber(itemToShow.dNumber);
      setCountry(itemToShow.country);
      setVClass(itemToShow.vClass);
      setVStream(itemToShow.vStream);
      setVApplicant(itemToShow.vApplicant);
      setVGrantDate(itemToShow.vGrantDate);
      setVExpiry(itemToShow.vExpiry);
      setLocation(itemToShow.location);
      setVStatus(itemToShow.vStatus);
      setVGrantNumber(itemToShow.vGrantNumber);
      setEntries(itemToShow.entries);
      setDob(itemToShow.dob);
      setAAfter(itemToShow.aAfter);
      setPeriod(itemToShow.period);
      setWork(itemToShow.work);
      setWorkplace(itemToShow.workplace);
      setStudy(itemToShow.study);
      setVConditions(itemToShow.vConditions.join(";"));
      setFile(itemToShow.file);
      setId(itemToShow._id);
    }
  }, [itemToShow]);

  return (
    <div className={classes.main}>
      {showItem && (
        <form className={classes.form} onSubmit={SendDataToBackend}>
          <div className={classes.inputCtn}>
            <p>Family name</p>
            <input
              required
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Given name(s)</p>
            <input
              required
              value={gName}
              onChange={(e) => setGName(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa Description</p>
            <input
              required
              value={vDesc}
              onChange={(e) => setVDesc(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Document Number</p>
            <input
              required
              value={dNumber}
              onChange={(e) => setDNumber(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Country of Passport</p>
            <input
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa class / subclass</p>
            <input
              required
              value={vClass}
              onChange={(e) => setVClass(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa stream</p>
            <input
              required
              value={vStream}
              onChange={(e) => setVStream(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa applicant</p>
            <input
              required
              value={vApplicant}
              onChange={(e) => setVApplicant(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa grant date</p>
            <input
              required
              value={vGrantDate}
              onChange={(e) => setVGrantDate(e.target.value)}
              type="date"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa expiry date</p>
            <input
              required
              value={vExpiry}
              onChange={(e) => setVExpiry(e.target.value)}
              type="date"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Location</p>
            <input
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa status</p>
            <input
              required
              value={vStatus}
              onChange={(e) => setVStatus(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa grant number</p>
            <input
              required
              value={vGrantNumber}
              onChange={(e) => setVGrantNumber(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Entries allowed</p>
            <input
              required
              value={entries}
              onChange={(e) => setEntries(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Must not arrive after</p>
            <input
              required
              value={aAfter}
              onChange={(e) => setAAfter(e.target.value)}
              type="date"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Period of stay</p>
            <input
              required
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Work entitlements</p>
            <input
              required
              value={work}
              onChange={(e) => setWork(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Workplace rights</p>
            <input
              required
              value={workplace}
              onChange={(e) => setWorkplace(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Study entitlements</p>
            <input
              required
              value={study}
              onChange={(e) => setStudy(e.target.value)}
              type="text"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Visa condition(s)</p>
            <textarea
              required
              value={vConditions}
              onChange={(e) => setVConditions(e.target.value)}
              placeholder="Use ; to separate lines"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "20px",
                backgroundColor: "#efe",
                fontWeight: "400",
              }}
            >
              {vConditions.split(";").map((item, index) => (
                <li className="tags" key={index}>
                  {item.trim(" ")}
                </li>
              ))}
            </div>
          </div>
          <div className={classes.inputCtn}>
            <p>Date of Birth</p>
            <input
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              type="date"
            />
          </div>
          <div className={classes.inputCtn}>
            <p>Upload file</p>
            <input type="file" onChange={HandleFileChange} />
          </div>
          {fileChanged && (
            <button type="button" onClick={() => UpdateFileAndSubmit()}>
              UPLOAD & UPDATE
            </button>
          )}
          <div
            className={classes.inputCtn}
            style={{ borderBottom: "black 3px solid", paddingBottom: "10px" }}
          >
            <p>Uploaded File</p>
            <button
              style={{ marginTop: "10px", width: "100%" }}
              onClick={() => window.open(file, "_blank")}
              type="button"
            >
              <SimCardDownloadIcon />
              DOWNLOAD FILE
            </button>
          </div>
          <button type="submit">UPDATE</button>
          <button type="button" onClick={() => setShowItem(false)}>
            CLOSE
          </button>
          <button type="button" onClick={() => Delete()}>
            DELETE
          </button>
        </form>
      )}

      <div>
        <marquee>Click on any row to VIEW and EDIT</marquee>
        <div className={classes.tableHead}>
          <p>Family Name</p>
          <p>Document Number</p>
          <p>Visa Grant Number</p>
        </div>
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className={classes.tableBody}
              onClick={() => {
                setItemToShow(item);
                setShowItem(true);
              }}
            >
              <p>{item.fName}</p>
              <p>{item.dNumber}</p>
              <p>{item.vGrantNumber}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default All;
