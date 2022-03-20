import styled from "styled-components";
import React from "react";

import DainikLogo from "../assets/dainik.jpg";
import AmarLogo from "../assets/amar.png";
import NavbharatLogo from "../assets/navbharat.jpg";
import RashtriyaLogo from "../assets/rashtriya.png";
import AsianLogo from "../assets/asian.png";
import FinancialLogo from "../assets/financial.png";
import TOILogo from "../assets/toi.png";
import ETLogo from "../assets/et.png";

const Cards = styled.div`
  background-color: aquamarine;
  display: grid;
  padding-top: 10px;
  grid-template-columns: auto;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
`;

const Card = styled.div`
  text-align: center;
  border-radius: 10px;
  font-size: 1.25rem;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  font-family: "Montserrat", monospace;
  border-radius: 25px;
  background-color: white;
  padding: 20px 0;
  margin: 15px 10px;
`;

const Image = styled.div`
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const DainikImage = styled(Image)`
  background-image: url(${DainikLogo});
`;

const AmarImage = styled(Image)`
  background-image: url(${AmarLogo});
`;

const NavbharatImage = styled(Image)`
  background-image: url(${NavbharatLogo});
`;

const RashtriyaImage = styled(Image)`
  background-image: url(${RashtriyaLogo});
`;

const AsianImage = styled(Image)`
  background-image: url(${AsianLogo});
`;

const FinancialImage = styled(Image)`
  background-image: url(${FinancialLogo});
`;

const TOIImage = styled(Image)`
  background-image: url(${TOILogo});
`;

const ETImage = styled(Image)`
  background-image: url(${ETLogo});
`;

const Title = styled.p`
  margin: 0 25px;
  padding: 15px 20px;
  background-color: rgb(161, 255, 255);
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 1.25rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

const Download = styled.button`
  margin: 0 25px;
  padding: 10px 50px;
  background-color: rgb(0, 255, 170);
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 9px #0f9d58;

  :active {
    background-color: rgb(0, 222, 170);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  :after {
    content: "";
    background: #f1f1f1;
    opacity: 0;
    transition: all 0.8s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

const Cardsbody = () => {
  const getLink = async (link) => {
    /* CORS = 'https://dry-crag-58790.herokuapp.com/'; */
    /* const response = await fetch(`${CORS}https://saranshapi.herokuapp.com/epaper/?query=${link}`); */
    const response = await fetch(
      `https://saranshapi.herokuapp.com/epaper/?query=${link}`
    );
    const data = await response.json();
    window.location.replace(data.link);
  };

  return (
    <Cards>
      <Card>
        <DainikImage></DainikImage>
        <Title>Dainik Jagran</Title>
        <Download onClick={() => getLink("dainik-jagran-newspaper-2021")}>
          Download
        </Download>
      </Card>

      <Card>
        <AmarImage></AmarImage>
        <Title>Amar Ujala</Title>
        <Download onClick={() => getLink("amar-ujala-news-paper-today")}>
          Download
        </Download>
      </Card>

      <Card>
        <NavbharatImage></NavbharatImage>
        <Title>Navbharat Times</Title>
        <Download onClick={() => getLink("navbharat-times-epaper")}>
          Download
        </Download>
      </Card>

      <Card>
        <RashtriyaImage></RashtriyaImage>
        <Title>Rashtriya Sahara</Title>
        <Download onClick={() => getLink("rashtriya-sahara-epaper")}>
          Download
        </Download>
      </Card>

      <Card>
        <AsianImage></AsianImage>
        <Title>The Asian Age</Title>
        <Download onClick={() => getLink("the-asian-age-epaper")}>
          Download
        </Download>
      </Card>

      <Card>
        <FinancialImage></FinancialImage>
        <Title>The Financial Express</Title>
        <Download onClick={() => getLink("financial-express-newspaper")}>
          Download
        </Download>
      </Card>

      <Card>
        <TOIImage></TOIImage>
        <Title>The Times of India</Title>
        <Download
          onClick={() => getLink("times-of-india-epaper-pdf-download-2022")}
        >
          Download
        </Download>
      </Card>

      <Card>
        <ETImage></ETImage>
        <Title>The Economics Times</Title>
        <Download onClick={() => getLink("economic-times-newspaper-today")}>
          Download
        </Download>
      </Card>
    </Cards>
  );
};

export default Cardsbody;
