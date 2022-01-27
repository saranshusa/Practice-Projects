import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BG from "./assets/mountains.png";
import Loader from "./assets/loading.svg";
import Kid from "./assets/kid.png";

const Sender = () => {
  const [fact, setFact] = useState();
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentStatus, setSentStatus] = useState(false);

  useEffect(() => {
    GetFact();
  }, []);

  async function GetFact() {
    let Data = await fetch(
      "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com",
          "x-rapidapi-key":
            "c8fbe6b255msh62dd6c752a4afe6p160121jsnb7f4472eb9bd",
        },
      }
    );
    Data = await Data.json();
    setFact(`${Data[0]["fact"]}.`);
  }

  async function SendMail(e) {
    e.preventDefault();
    setLoading(true);
    setSentStatus(false);
    let Response = await fetch(
      `https://dry-crag-58790.herokuapp.com/https://saranshapi.herokuapp.com/sendemail/?to=${to}&from=${from}&subject=Saranify Mail&message=${message}`
    );
    Response = await Response.json();
    if (Response["status"] === "success") {
      setSentStatus(true);
      setLoading(false);
    }
    setTimeout(() => setLoading(false), 5000);
  }

  function NewMail(e) {
    e.preventDefault();
    ResetForm();
    setSentStatus(false);
  }

  function ResetForm() {
    setTo("");
    setFrom("");
    setMessage("");
  }

  return (
    <>
      <Container>
        <Form onSubmit={SendMail}>
          <Input>
            <Label>To</Label>
            <Text
              type="email"
              placeholder="Receiver's email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </Input>
          <Input style={{ height: "32vh" }}>
            <TextArea
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Input>
          <Input>
            <Label>From</Label>
            <Text
              type="text"
              placeholder="Sender's name"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </Input>
          <Button onClick={SendMail}>SEND</Button>
          <Loading loading={loading} />
          {sentStatus && (
            <MailSent>
              <p>Email sent !</p>
              <SendButton onClick={NewMail}>SEND ANOTHER EMAIL</SendButton>
              <img src={Kid} alt="Kid" />
            </MailSent>
          )}
        </Form>
        <Facts>
          <h2>Facts</h2>
          <p>{fact}</p>
        </Facts>
      </Container>
      <Unsupported>Only supported on Desktop or Laptop.</Unsupported>
    </>
  );
};

export default Sender;

const Container = styled.div`
  font-size: 1.8rem;
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  font-family: "Fredoka One", cursive;
  background-image: url(${BG});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const Form = styled.form`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  font-family: "Fredoka One", cursive;
  font-size: 2rem;
  width: calc(40vw - 45px);
  height: calc(100vh - 90px);
  margin: 45px 0 45px 45px;
  background-color: #ffffff;
  border-radius: 28px;
  position: absolute;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 55px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #0085ff;
  height: 90px;
  border-radius: 18px;
  border: none;
  outline: none;
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  font-family: "Fredoka One", cursive;
  font-size: 1.8rem;
  color: white;
  padding-left: 50px;
  padding-right: 50px;

  :hover {
    cursor: pointer;
  }
`;

const Input = styled.div`
  height: 90px;
  display: flex;
  margin-bottom: 25px;
`;

const Text = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  font-family: "Fredoka One", cursive;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  background-color: #dfdfdf;
  border-radius: 18px;
  border: none;
  outline: none;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;

  ::placeholder {
    color: #a5a5a5;
  }
`;

const TextArea = styled.textarea`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  font-family: "Fredoka One", cursive;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  background-color: #dfdfdf;
  border-radius: 18px;
  border: none;
  outline: none;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 10px;

  ::placeholder {
    color: #a5a5a5;
  }
`;

const Label = styled.p`
  height: 90px;
  font-size: 1.8rem;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0085ff;
  width: fit-content;
  border-radius: 18px;
  border: none;
  color: #fff;
  position: absolute;
`;

const Facts = styled.div`
  width: calc(60vw - 130px);
  margin-top: 45px;
  position: absolute;
  left: calc(40vw + 65px);

  h2 {
    font-weight: normal;
    font-size: 4rem;
    color: #ffffff;
  }

  p {
    margin-top: 3vh;
    border-radius: 18px;
    width: 100%;
    background-color: #0085ff;
    padding: 20px;
    color: #ffffff;
    line-height: 1.75;
    text-align: justify;
  }
`;

const Loading = styled.div`
  display: ${(props) => (props.loading ? "block" : "none")};
  background-image: url(${Loader});
  background-size: 25%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
`;

const MailSent = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 15;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    color: #ffffff;
    font-size: 5rem;
  }

  img {
    position: fixed;
    right: 25px;
    bottom: 10px;
    height: 80vh;
  }
`;

const SendButton = styled.button`
  background-color: #0085ff;
  margin-top: 2vh;
  height: 5rem;
  border-radius: 18px;
  border: none;
  outline: none;
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  font-family: "Fredoka One", cursive;
  font-size: 1.8rem;
  color: white;
  padding-left: 40px;
  padding-right: 40px;

  :hover {
    cursor: pointer;
  }
`;

const Unsupported = styled.div`
  color: black;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;

  @media (min-width: 1024px) {
    display: none;
  }
`;
