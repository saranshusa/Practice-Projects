import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Employer = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Main>
        <div className="nav-ctn">
          <Nav>
            <img
              className="nav-img"
              src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
            />
            <div>
              <a onClick={() => navigate("/home")}>Home</a>
              <a onClick={() => navigate("/services")}>Services</a>
              <a>Employer</a>
              <a onClick={() => navigate("/track")}>Visa Verification</a>
              <button onClick={() => navigate("/track")}>Track_LMIA</button>
            </div>
          </Nav>
        </div>

        <Body>
          <Left>
            <h2>Company Details</h2>
            <p className="label bold">Company Name *</p>
            <input type="text" />
            <p className="label bold">Company Address</p>
            <input type="text" />
            <p className="label">Street Address</p>
            <input type="text" />
            <p className="label">Address Line 2</p>
            <input type="text" />
            <p className="label">City</p>
            <input type="text" />
            <p className="label">Province</p>
            <select></select>
            <p className="label">Postal Code</p>
            <input type="text" />
            <p className="label bold">Mailing Address</p>
            <input type="checkbox" style={{ width: "auto" }} /> Same as Business
            Address
            <p className="label">Street Address</p>
            <input type="text" />
            <p className="label">Address Line 2</p>
            <input type="text" />
            <p className="label">City</p>
            <input type="text" />
            <p className="label">Province</p>
            <select></select>
            <p className="label">Postal Code</p>
            <input type="text" />
            <p className="label bold">Company Telephone *</p>
            <input type="text" />
            <p className="label bold">Website</p>
            <input type="text" />
            <p className="label bold">Date Business Started *</p>
            <input type="date" />
            <p className="label bold">CRA Number *</p>
            <input type="text" />
            <p className="label bold">Business Activity *</p>
            <textarea placeholder="Describe your primary business activity" />
            <p className="label bold">Number of Employees *</p>
            <input type="text" />
            <p className="label bold">Number of Foreign Workers *</p>
            <input type="text" />
            <p className="label bold">
              Were any employees laid off in the past 12 months? *
            </p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <p className="label bold">Are you a member of any organization?</p>
            <textarea placeholder="i.e." />
            <p className="label bold">
              Which program are you applying under? *
            </p>
            <input
              type="checkbox"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Canadian Recruitment
            <input
              type="checkbox"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            International Recruitment
            <p className="label bold">How did you hear about us? *</p>
            <select></select>
            <h2 style={{ marginTop: "50px" }}>
              Authorized Company Representative’s Detail
            </h2>
            <p className="label bold">Contact Name *</p>
            <p className="label">First</p>
            <input type="text" />
            <p className="label">Last</p>
            <input type="text" />
            <p className="label bold">Telephone Number *</p>
            <input type="text" />
            <p className="label bold">Fax Number</p>
            <input type="text" />
            <p className="label bold">Email *</p>
            <p className="label">Enter Email</p>
            <input type="text" />
            <p className="label">Confirm Email</p>
            <input type="text" />
            <h2 style={{ marginTop: "50px" }}>Job Requirements</h2>
            <p className="label bold">NOC</p>
            <input type="text" />
            <p className="label">
              Please visit the government of Canada National Occupation
              Classification (NOC) reference page to determine which Job Title
              that best represents NOC CODE
            </p>
            <p className="label bold">Job Title *</p>
            <input type="text" />
            <p className="label bold">Expect Start Date *</p>
            <input type="date" />
            <p className="label bold">Positions Available *</p>
            <input type="text" />
            <p className="label bold">Is a union position? *</p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <p className="label bold">Working Hours *</p>
            <input type="date" />
            <p className="label bold">Base Salary *</p>
            <input type="date" />
            <p className="label bold">Shift Work *</p>
            <input type="date" />
            <p className="label bold">
              Is the job temporary with intent to become permanent? *
            </p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <p className="label bold">Addres of Job *</p>
            <input type="checkbox" style={{ width: "auto" }} /> Same as Business
            Address
            <p className="label">Street Address</p>
            <input type="text" />
            <p className="label">Address Line 2</p>
            <input type="text" />
            <p className="label">City</p>
            <input type="text" />
            <p className="label">Province</p>
            <select></select>
            <p className="label">Postal Code</p>
            <input type="text" />
            <p className="label bold">Main Duties</p>
            <textarea></textarea>
            <h2 style={{ marginTop: "50px" }}>
              Education & Special Requirements
            </h2>
            <p className="label bold">Education/skills requirements? *</p>
            <select></select>
            <p className="label bold">Special licensing required? *</p>
            <select></select>
            <p className="label bold">Experience required to perform job *</p>
            <select></select>
            <p className="label bold">Expected worker qualities *</p>
            <select></select>
            <h2 style={{ marginTop: "50px" }}>Benefits</h2>
            <p className="label bold">
              Will you provide accommodations to the worker? *
            </p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <p className="label bold">
              Is there a rotation or leave policy in place? *
            </p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <p className="label bold">Main Duties</p>
            <textarea></textarea>
            <h2 style={{ marginTop: "50px" }}>Language Skills</h2>
            <p className="label bold">
              Is there any language proficiency that is required? *
            </p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <h2 style={{ marginTop: "50px" }}>Background</h2>
            <p className="label bold">
              Have you filled out a Labour Market Impact Assessment (LMIA)
              application? *
            </p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <p className="label bold">
              Have you advertised your job posting in Canada yet? *
            </p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <p className="label bold">
              Does your company have experience hiring foreign workers? *
            </p>
            <input
              type="radio"
              name="s"
              style={{ width: "auto", marginRight: "25px" }}
            />
            Yes
            <input
              type="radio"
              name="s"
              style={{
                width: "auto",
                marginRight: "25px",
                marginLeft: "100px",
              }}
            />
            No
            <p className="label bold">Eligible Industry *</p>
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            Food Services
            <br />
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            Food & Beverage Processing
            <br />
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            Manufacturing
            <br />
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            Oil & Gas
            <br />
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            Shipbuilding
            <br />
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            Hotel & Lodging
            <br />
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            Truck Driving
            <br />
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            Other
            <br />
            <p className="label bold">
              Please provide any additional information you feel necessary
            </p>
            <textarea />
            <p className="label bold">Terms of Service*</p>
            <textarea />
            <input
              type="checkbox"
              style={{
                width: "auto",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            />
            I agree to the Terms of Service
          </Left>
          <Right>
            <div className="right_1">
              <p className="bold">CANADIAN EMPLOYERS</p>
              <p>
                <span className="bold" style={{ textDecoration: "underline" }}>
                  Canadian Employers
                </span>{" "}
                who wish to Hire Locally, Hire Foreign Workers, Apply for LMIA,
                Hire Francophone Skilled Workers, or Hire a Caregiver complete
                the following form as detailed as possible.
              </p>
              <p>Enter your</p>
              <ul>
                <li>Company Details</li>
                <li>Company Representative Details</li>
                <li>Job Requirements</li>
                <li>Education & Special Requirements</li>
                <li>Benefits</li>
                <li>Language Skills</li>
                <li>Background</li>
              </ul>
              <p>Employer Submission Form: Adobe Acrobat (PDF) version</p>
              <p>
                Download and complete the above Employer Submission form (pdf)
                and send to the email enclosed.
              </p>
              <p>
                NOTE: This form is for employers ONLY, not candidates or
                applicants.
              </p>
              <p className="bold">Job Title, Code, Skill Type</p>
              <p>
                Many of Canada’s immigration programs use the National
                Occupational Classification (NOC) to decide if a job, or type of
                work experience, is valid for that program’s criteria. For
                instance, if a person wants to apply as a skilled worker they
                should check the NOC to see which jobs are considered “skilled”
                (NOC Skill Type 0 or Skill Level A or B). Find your job title,
                code and skill level or type.
              </p>
              <p>
                Use this table to find the NOC information that best matches
                your jobs
              </p>
            </div>
          </Right>
        </Body>

        <div className="footer">
          <div className="links">
            <a>services</a>
            <a>track Imia</a>
          </div>
          <div className="footer-card">
            <img src="https://esdc-cic-ca.online/images/logo.png" />
            <p>
              Email : (support@esdc-cic-services.online |
              inquiry@esdc-cic-services.online | info@esdc-cic-services.online |
              cra@esdc-cic-services.online)
            </p>
            <span>
              Copyright © 2021 by canadian government escd-cic-services.online
            </span>
          </div>
        </div>
      </Main>
    </Container>
  );
};

export default Employer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
    font-family: "Montserrat", sans-serif;
  }
`;

const Main = styled.div`
  width: 1200px;

  .nav-ctn {
    position: fixed;
    background-color: #fff;
    width: 100vw;
    border-bottom: 3px solid black;
    left: 0;
  }

  .footer {
    background-color: #f1f3f4;
    width: 100vw;
    position: absolute;
    left: 0;
  }

  .links {
    margin: 50px 0 0 25px;

    a {
      margin-right: 25px;
    }
  }

  .footer-card {
    width: 1200px;
    margin: 0px auto;
    text-align: center;
    margin-bottom: 25px;

    img {
      margin-bottom: 25px;
    }

    p {
      color: #999;
      border-top: 1px solid #dee2e6 !important;
      padding-top: 25px;
      margin-bottom: 50px;
    }
    span {
      color: #999;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;
  height: 80px;
  width: 1200px;
  margin: 0px auto;

  @media screen and (max-width: 500px) {
    .nav-img {
      margin-left: 10px !important;
      margin-right: 10px !important;
      width: 100%;
    }
  }

  .nav-img {
    margin-left: 25px;
    height: 35px;
  }

  button {
    background: #ff0043;
    color: #fff;
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 25px;
    font-size: 14px;
  }

  a {
    margin: 0px 25px;
  }

  a:hover {
    color: #ff0043;
    cursor: pointer;
  }
`;

const Body = styled.div`
  margin-top: 225px;
  display: grid;
  grid-template-columns: 67% 33%;
  margin-bottom: 100px;
`;

const Left = styled.div`
  padding-right: 25px;

  h2 {
    font-size: 26px;
    font-weight: 700;
    padding-bottom: 10px;
    border-bottom: 1px solid #dd3333;
    margin-bottom: 25px;
  }

  .label {
    font-size: 14px;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .bold {
    font-weight: 700;
  }

  input,
  select,
  textarea {
    width: 100%;
    color: #000000;
    background-color: #ededed;
    padding: 10px;
    font-size: 14px;
    outline: none;
    border: none;
  }

  textarea {
    height: 150px;
  }
`;

const Right = styled.div`
  .right_1 {
    padding: 25px;
    background-color: #f4f4f4;
    width: 100%;
    font-size: 16px;
    line-height: 1.8;
  }

  p,
  ul {
    margin-bottom: 25px;
  }

  .bold {
    font-weight: 700;
    margin-bottom: 100px;
  }
`;
