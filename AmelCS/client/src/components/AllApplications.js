import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EditApplication from "./EditApplication";

function AllApplications() {
  const [applications, setApplications] = useState(null);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://canada-main.herokuapp.com/all-applications`)
      .then((res) => {
        setApplications(res.data.data);
      })
      .catch((error) => {
        alert(error.response.data["message"]);
      });
  }, []);

  console.log(applications);

  return (
    <Main>
      <p style={{ fontFamily: "monospace", padding: "5px" }}>
        Click on username to Edit/Delete application.
      </p>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Application Type</th>
            <th>Application Number</th>
            <th>Applicant Name</th>
            <th>Date Submitted</th>
            <th>Current Status</th>
            <th>Messages</th>
            <th>Action</th>
            <th>UCI</th>
            {/* <th>Passport Number</th>
            <th>Country</th> */}
            <th>Biometrics Number</th>
            <th>Date of Biometrics</th>
            {/* <th>LMIA Validity</th>
            <th>Province of Employment</th> */}
          </tr>
        </thead>
        <tbody>
          {applications &&
            applications.map((item, index) => (
              <tr key={index}>
                <td
                  className="active"
                  onClick={() => {
                    setShow(true);
                    setData(item);
                  }}
                >
                  {item.username}
                </td>
                <td>{item.atype}</td>
                <td>{item.anumber}</td>
                <td>{item.aname}</td>
                <td>{item.datesubmit}</td>
                <td>{item.currentstatus}</td>
                <td>{item.messages}</td>
                <td>{item.action}</td>
                <td>{item.uci}</td>
                {/* <td>{item.pNumber}</td>
                <td>{item.country}</td> */}
                <td>{item.bnumber}</td>
                <td>{item.dobenroll}</td>
                {/* <td>{item.lmia}</td>
                <td>{item.province}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
      {show && <EditApplication data={data} show={setShow} />}
    </Main>
  );
}

export default AllApplications;

const Main = styled.div`
  overflow-x: scroll;

  table {
    font-size: 0.9rem;
    border-collapse: collapse;
  }
  thead,
  tbody {
    border: 2px solid #666;
    border-top: none;
  }
  td,
  th {
    border: 1px solid #ddd;
    padding: 5px;
  }

  .active:hover {
    border: 3px solid #999;
    padding: 3px;
    cursor: pointer;
    font-weight: bold;
  }
`;
