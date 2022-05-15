import io from "socket.io-client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import IMG from "./send.png";

const socket = io.connect("http://localhost:8000");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [flag, setFlag] = useState(true);
  const [array, setArray] = useState([]);
  const [month, setMonth] = useState([
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const sendMessage = () => {
    if (message === "") return;
    socket.emit("send_message", { message });
    array.push({ message: message, id: "You", date: new Date() });
    setMessage("");
    const d = new Date();
    console.log(d);
    console.log(d.getDate(), d.getMonth(), d.getHours(), d.getMinutes());
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  useEffect(() => {
    array.push({ message: messageReceived, id: "Him", date: new Date() });

    setFlag(!flag);
  }, [messageReceived]);

  return (
    <Main>
      <div className="app">
        <div className="messages">
          {array.map((msg, index) => (
            <div key={index}>
              <p className="msg you">{msg["message"]}wqerwqas as asf</p>
              <div className="info">
                {/* <p>{msg["id"]}</p> */}
                <p>
                  {month[msg["date"].getMonth()]} {msg["date"].getDate()}
                </p>
                <p>
                  {msg["date"].getHours() > 12
                    ? msg["date"].getHours() - 12
                    : msg["date"].getHours()}
                  :{msg["date"].getMinutes()}{" "}
                  {msg["date"].getHours() > 12 ? "PM" : "AM"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>
            <img src={IMG} className="send-icon" />
          </button>
        </div>
      </div>
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: grid;
  place-items: center;

  * {
    font-size: 1.5rem;
    font-family: monospace;
  }

  .msg {
    background-color: aquamarine;
    padding: 10px 15px;
    font-size: 1.25rem;
  }

  .you {
    margin-left: 10px;
    margin-right: 50px;
    border-radius: 25px 25px 25px 0px;
  }

  .him {
    margin-left: 10px;
    margin-right: 50px;
    border-radius: 25px 25px 0px 25px;
  }

  .app {
    width: 100vw;
    height: 100vh;
    max-width: 400px;
    display: grid;
    grid-template-rows: 90% 10%;
  }

  .messages {
    background-color: #eff;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .messages::-webkit-scrollbar {
    display: none;
  }

  .send-icon {
    height: 100%;
  }

  .input {
    display: flex;
    align-items: center;
    border: 3px solid #ddd;
    border-radius: 15px 15px 0 0;
    padding: 10px;
  }

  input {
    height: 100%;
    width: calc(100% - 5vh - 10px);
    border: none;
    outline: none;
  }

  button {
    border: none;
    background-color: none;
    margin: 5px;
    height: 5vh;
    min-height: 30px;
  }
`;
