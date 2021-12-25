import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/whatsapp.png";

const Main = () => {
  const [number, setNumber] = useState("");

  const BASE_URL1 = "https://api.whatsapp.com/send/?phone=";
  const BASE_URL2 = "&text&app_absent=0";

  function openWhatsApp(e) {
    e.preventDefault();
    let Number = "";

    for (let x in number) {
      if (
        number[x] === "0" ||
        number[x] === "1" ||
        number[x] === "2" ||
        number[x] === "3" ||
        number[x] === "4" ||
        number[x] === "5" ||
        number[x] === "6" ||
        number[x] === "7" ||
        number[x] === "8" ||
        number[x] === "9"
      ) {
        Number = Number + number[x];
      }
    }

    if (Number.length === 10) {
      Number = "91" + Number;
    }

    const URL = BASE_URL1 + Number + BASE_URL2;
    window.location.replace(URL);
  }

  return (
    <Container>
      <img
        src={Logo}
        alt="LOGO"
        style={{
          top: "-15vh",
          position: "relative",
        }}
      />

      <Form onSubmit={openWhatsApp}>
        <Input
          placeholder="+91 965 1128 667"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button onclick={openWhatsApp}>Start Chat</Button>
      </Form>
      <Credits>Developed by Saransh with &#x1F9E1;</Credits>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #128c7e;
  align-items: center;
  height: 100vh;
  justify-content: center;

  > img {
    width: 25vw;
  }

  @media (min-width: 768px) {
    > img {
      width: 175px;
    }
  }
`;

const Form = styled.form`
  width: 90vw;
  text-align: center;
  padding-bottom: 5vh;

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  background-color: #ece5dd;
  outline: none;
`;

const Button = styled.button`
  width: 50%;
  margin-top: 5vh;
  padding: 15px 15px;
  background-color: #075e54;
  font-size: 1.5rem;
  border: none;
  color: white;
  border-radius: 5px;
`;

const Credits = styled.div`
  position: absolute;
  bottom: 5vh;
`;
