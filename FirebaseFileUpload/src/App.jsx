import { useEffect, useState } from "react";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [fileDetails, setFileDetails] = useState({});
  const [openUploads, setOpenUploads] = useState(false);
  const [alert, setAlert] = useState(false);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [cleared, setCleared] = useState(false);

  function HandleFileChange(e) {
    const file = e.target.files[0];
    setFile(file);
    setProgress(0);
  }

  function HandleFileUpload() {
    if (!file) return;

    setStarted(true);
    setTimeout(() => {
      setStarted(false);
    }, 2000);

    let dirName =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const sotrageRef = ref(storage, `files/${dirName}/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => alert(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setCompleted(true);
          setTimeout(() => {
            setCompleted(false);
          }, 3000);
          navigator.clipboard.writeText(downloadURL);
          setFileDetails({
            name: file.name,
            link: downloadURL,
          });
          let myLinks = JSON.parse(localStorage.getItem("myLinks"));
          myLinks.push({ name: file.name, link: downloadURL });
          localStorage.setItem("myLinks", JSON.stringify(myLinks));
        });
      }
    );
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      alert("Please enter name!");
      return;
    }
  }

  useEffect(() => {
    let myLinks = [];
    if (!JSON.parse(localStorage.getItem("myLinks")))
      localStorage.setItem("myLinks", JSON.stringify(myLinks));
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(https://picsum.photos/seed/picsum/1600/1000)",
      }}
    >
      {!openUploads ? (
        <div className="main">
          <form onSubmit={HandleSubmit}>
            <input
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="file" onChange={HandleFileChange} />
            <button
              type="button"
              disabled={progress === 100 ? true : false}
              onClick={HandleFileUpload}
            >
              UPLOAD & COPY LINK
            </button>
            <button type="button" onClick={() => setOpenUploads(true)}>
              MY UPLOADS
            </button>
          </form>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
              {progress !== 0 && <p className="percentage">{progress} %</p>}
            </div>
          </div>
          {started && <p className="alert center">Uploading...</p>}
          {completed && (
            <p className="alert center">Link copied to clipboard!</p>
          )}
        </div>
      ) : (
        <div className="main flex">
          <button type="button" onClick={() => setOpenUploads(false)}>
            UPLOAD NEW FILE
          </button>
          <button
            type="button"
            style={{
              marginTop: "20px",
              backgroundColor: "orangered",
            }}
            onClick={() => {
              localStorage.setItem("myLinks", JSON.stringify([]));
              setCleared(true);
              setTimeout(() => {
                setCleared(false);
              }, 2000);
            }}
          >
            CLEAR HISTORY
          </button>
          <div className="links">
            <h2>Tap to copy link</h2>
            {JSON.parse(localStorage.getItem("myLinks"))
              ?.map((item, index) => (
                <div
                  className="row"
                  key={index}
                  onClick={() => {
                    navigator.clipboard.writeText(item.link);
                    setAlert(true);
                    setTimeout(() => {
                      setAlert(false);
                    }, 2000);
                  }}
                >
                  {item.name}
                </div>
              ))
              .reverse()}
          </div>
          {alert && <p className="alert">Copied to clipboard!</p>}
          {cleared && <p className="alert">History cleared!</p>}
        </div>
      )}
    </div>
  );
}

export default App;
