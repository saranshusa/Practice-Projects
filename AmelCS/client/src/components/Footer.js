import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Main>
      <div className="grid">
        <SubDiv>
          <a href="#">Contact us</a>
          <a href="#">News</a>
          <a href="#">Prime Minister</a>
          <a href="#">Departments and agencies</a>
          <a href="#">Treaties, laws and regulations</a>
          <a href="#">About government</a>
          <a href="#">Public service and military</a>
          <a href="#">Government-wide reporting</a>
          <a href="#">Open government</a>
        </SubDiv>
      </div>
      <div className="grid-row">
        <div className="subgrid">
          <a href="#">Social media &#8226; </a>
          <a href="#">Mobile applications &#8226;</a>
          <a href="#">About Canada.ca &#8226;</a>
          <a href="#">Terms and conditions &#8226;</a>
          <a href="#">Privacy</a>
          <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" />
        </div>
      </div>
    </Main>
  );
}

export default Footer;

const Main = styled.div`
  width: 100vw;
  font-size: 0.75rem;
  position: absolute;
  left: 0px;

  .grid {
    width: 100vw;
    background: #26374a
      url("https://www.canada.ca/etc/designs/canada/wet-boew/assets/landscape.png")
      no-repeat right bottom;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      width: 100%;
      color: white;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 500px) {
      .grid {
        padding: 35px 0px !important;
      }

      a {
        padding-left: 0px !important;
      }
    }
  }

  .grid-row {
    .subgrid {
      width: 950px;
      display: grid;
      grid-template-columns: max-content max-content max-content max-content max-content auto;
      place-items: center;
      gap: 10px;
      position: relative;
      height: 50px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;

    a {
      padding-right: 5px;
      width: 100%;
      text-decoration: none;
      color: black;
    }

    a:hover {
      text-decoration: underline;
    }

    img {
      height: 35px;
      position: absolute;
      right: 0px;
    }

    @media screen and (max-width: 500px) {
      .grid-row {
        padding: 35px 0px !important;
      }

      a {
        padding-left: 0px !important;
      }
    }
  }
`;

const SubDiv = styled.div`
  display: grid;
  width: 950px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  place-items: center;
  padding: 35px 0px;
  gap: 10px;
`;
