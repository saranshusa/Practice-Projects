import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ApplicationStatus() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [appData, setAppData] = useState([]);
  const [appDataIndex, setAppDataIndex] = useState([]);

  function CheckAuth() {
    const userId = sessionStorage.getItem("userId");
    if (userId === null) {
      navigate("/login");
    } else {
      setEmail(userId);
    }
  }

  function handleLogout() {
    sessionStorage.clear();
    navigate("/login");
  }

  useEffect(() => {
    CheckAuth();
    setAppData(JSON.parse(sessionStorage.getItem("appdata")));
    setAppDataIndex(JSON.parse(sessionStorage.getItem("index")));
  }, []);

  console.log(appData);

  return (
    <Container>
      <Main>
        <div className="lang">Français</div>
        <Nav>
          <img
            className="nav-img"
            src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
          />
        </Nav>
        <div className="navbar">
          <div></div>
          <div className="menu-items">
            <div>Jobs</div>
            <div>Immigration</div>
            <div>Travel</div>
            <div>Business</div>
            <div>Benefits</div>
            <div>Health</div>
            <div>Taxes</div>
            <div style={{ borderRight: "1px solid white" }}>More Services</div>
          </div>
          <div></div>
        </div>
        <div className="routes">
          <p>Home&nbsp;&nbsp;</p>
          <p>&#129066;&nbsp;&nbsp;</p>
          <p>Your Account</p>
        </div>
        <div className="header">
          <h1>Application status and messages</h1>
          <div
            style={{
              borderBottom: "1px solid #af3c43",
              marginTop: "5px",
            }}
          />
        </div>

        <Body>
          <p>
            Check the status, review the details and read messages for your
            application.{" "}
            <span style={{ color: "#284162", textDecoration: "underline" }}>
              View submitted application or upload documents
            </span>
          </p>
          <p className="notify">
            You have 2{" "}
            <span style={{ color: "#284162", textDecoration: "underline" }}>
              unread message(s).
            </span>
          </p>

          <Grid>
            <div style={{ height: "fit-content" }}>
              <h2>Application status</h2>
              <p>
                We are processing your application. We will send you a message
                when there is an update or if we need more information from you.
              </p>
              <p style={{ fontWeight: "bold" }}>Latest update:</p>
              <p style={{ fontWeight: "bold" }}>
                Biometrics - March 16, 2022:
                <span> Completed.</span>
              </p>
            </div>
            <div>
              <h2>Applicant information</h2>
              <p style={{ fontWeight: "bold" }}>
                Principal Applicant:{" "}
                <span>
                  JATINDER SINGH{" "}
                  {appData.length > 0 && appData[appDataIndex]["aname"]}
                </span>
              </p>
              <p style={{ fontWeight: "bold" }}>
                Unique Client Identifier (UCI):{" "}
                <span>
                  1120399237{" "}
                  {appData.length > 0 && appData[appDataIndex]["uci"]}
                </span>
              </p>
              <p style={{ fontWeight: "bold" }}>
                Application number:{" "}
                <span>
                  W306796475{" "}
                  {appData.length > 0 && appData[appDataIndex]["anumber"]}
                </span>
              </p>
              <p style={{ fontWeight: "bold" }}>
                Date Received:{" "}
                <span>
                  March 7, 2022{" "}
                  {appData.length > 0 && appData[appDataIndex]["datesubmit"]}
                </span>
              </p>
              <p style={{ fontWeight: "bold" }}>Biometrics:</p>
              <div style={{ border: "none", marginLeft: "30px" }}>
                <p style={{ fontWeight: "bold" }}>
                  Biometrics Number:{" "}
                  <span>
                    00054920220314141821{" "}
                    {appData.length > 0 && appData[appDataIndex]["bnumber"]}
                  </span>
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Date of Biometrics Enrolment:{" "}
                  <span>
                    March 14, 2022{" "}
                    {appData.length > 0 && appData[appDataIndex]["dobenroll"]}
                  </span>
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Expiry Date:{" "}
                  <span>
                    March 14, 2032{" "}
                    {appData.length > 0 && appData[appDataIndex]["edate"]}
                  </span>
                </p>
              </div>
            </div>
          </Grid>
          <div
            style={{
              borderBottom: "1px solid #ccc",
              width: "100%",
              margin: "25px 0",
            }}
          />

          <Details>
            <h2 style={{ marginBottom: "10px" }}>
              Details about your application status
            </h2>
            <p>
              When we get your application, there are a series of steps it may
              go through before we make a decision. Use the following table to
              find out the current status of each application step.
            </p>
            <div className="row">
              <p className="row_title">
                <img src="data:image/webp;base64,UklGRngDAABXRUJQVlA4TGwDAAAvHUAHEO8GR5IkSUpU9e4CGiL//yJaW1UGxycguY3kSFJmjl3v/v/GvU5PRgTsSLLjNg1A558icP7x3TaM99aRbbtpoy9jmWnW/S+rHTLXjSQ7Ac0eGAQhAKOZBgCASTPq7H+OmzQSRKLV8m6TaAQBAA8YvEwGJqC6mjiTRiZG2+vJoCNZWPUEokYKh+JOeH2THhIqCUQALxMPuKbtHjsCr2YxplEFk5vVqE6uGgJmqyru+q3KizEI1m5xC2hxx7g9YHQl8KwaEcwep8vhcY3//v8dEAkskn4SN5OpCQsrPJw9j5tNYtw/kwxcNBQtMxmsqhkDTn8lbqyqA6N59h/d0DUgel3Dgcc99tpE4ygYrSoY77gIKJgVI4Je3MfMj6PiwWT2NGAmfR8PAd8zy+6xF4aZ5FWpjoM40BsVR53AafaMAWYLIK8K4Bb1IO71qj7rnkZNoIEGAmDwWlW+j51BAiwuq9qZqMl3nsWAIRUsYNA9ttutxeyps+UkrEMAgAEAAACAAydQQKnX9z3A/5n1AxXU7ind06qGrxq/7imgdk9fNejM+gLtng7cu+f4zJLuqc/z9Xdmdd2zvl3vj8fp0oCcWQTk4/60Ypw+Xp70+fW6PE4XAfb191bAsXt6g0Tbto29ubFt27Zt2zar1MZXu/lTK7UR51dt232a7+LLG5wb0f8JQOSiw1sskdSaeZXXdpzdU2zBZrrp/PjiqAmAgSMTsKhsnO/3p9o8AbA8egI/8m8C4JwOzdGJ8hCHwOt3xLd7TUJCJ+/Z0Byb8Pi/HlZYi60QAEzdt2UQ+ipGXf7i86VIcR9Lvoo/JMGy06d2Iko2xMjWvJ0PL4TQkivz24DvkSInQJZ06TIHzmGfBEPH+VZEyYYYp++yLD3Dd5GcGn6tLNSgE1LdZMEC53xb5FrV3COl/H0EXX+VLOYkACz5OvszTMO45sWDOJrug7ABiTvlHUjs+PalAQUiar36hPAZ8mqKjRcu7hX5zNcStJ+uoxCirccKJgAaFQkEeP2dZrBp1L4EIHaujaD3eDUpqHQEWpH43QdCnSITt3vizi3ilS75KozvM/kfLYz3iRs3yQd+yD+neYX/fqhWwBdzEYCZHaVh+xMFwMw3zz8zijfxGEbdxPpsZwSQ/lyhzpKA0vWjYs1CgH6mEQI=" />
                Review of eligibility
                <i
                  className="fa fa-question-circle"
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </p>
              <p>
                &#9675; Your application is in progress. We will send you a
                message when we start reviewing your eligibility.
              </p>
            </div>
            <div className="row">
              <p className="row_title">
                <img src="data:image/webp;base64,UklGRiYDAABXRUJQVlA4TBkDAAAvHUAHEP8FoZEkR1Kse4/g+XN0M11Fw0EkSYpUS88K3r9H2p0uB5EkKVLdwrOC96+QaafLdWTbafNAMrPD0H8vKSKTL2aUSXoBYKqoilVJJAhVAZIIQFVtowIcAwAbHdDVoQBVpJzokvI0Ye9glQACBFS1VSIACBBA8AVtTAxoTnlrLwYKMGDw0KsE4Wze/7+fA1l1KCSN92o8iaamGhe6KoOA9MCAOqnWWNU9x+7n806ye0g4CSfpogLiY/712dt37T8Dyh4BQRCCKzBJ8n0qpY9dFdGiMFQxFZckmcoDWuADBgjW2GD9/99JYRWIWmf1qeRFSyQJAAt8DW9OAZAkXSVIoqpIu0nStZdOpQXjmvs+lVUFqL1XlOjgK0k5lV+xmlP69/v1AYL67/dT4FXFxhTCVLnKUBXAAKt2TkWgqr6LWSoDEBBGTaMGDKgIjQywSEQAgz8Q4MDzeN5mQF+jm2t0OHuzR9u6t9thf/bGoHi/Hzdfr4s8awKIz97eb7fD+eytPtp2OXuLzt7e9xztx+NkwXD29v9+X7dnb4FCwrZt59e82f0z/tm2bU7NXrOa7TXb9pbtmn/7cL9X+wbP/Sui/xPAFJOS8T93ff6yX1vEvqOfjuz8fHy3q0Lzwx4iqt5GRN0Xe4jSD/YQkdXAsb0hTmePMKPLRIs2Uwm9LcwFbKsEH6MTcoHCtz0lpqqeF+DGxHNDGJd6qkS/xHXBqXxnqaHZBUwvACNGZw8/Xi6bLRn8zjBpZK7ke6n8G5oxbe3lxymE1ra3ZbFJI20F31vhD8YxwSaNLQP8WIWlY0PDf9mkkbdju2XBsvzkfvz+OTUPjBpr7z8gAlGk1Jy4vqqLHyRV3ij0ZGKpWz3CRD35lUJ3PbIbizWddfK5CuDKaRSFa4jqyWl6b09hj565XT+k5J+xoW/dyf5r3WE3L6x5/OSUdUyu4Bz2Xrp3/t3dzWeWPT1c1kEtcgA8nt9YfWL9y02+H2qYWQWX9zg4BryuYMtdVF5xSlMY0BrIhK949m89d25rtOib3YQDX3u0LoLx0zu0pgMAAA==" />
                Review of medical results
                <i
                  className="fa fa-question-circle"
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </p>
              <p>
                &#9675; You do not need a medical exam. We will send you a
                message if this changes.
              </p>
            </div>
            <div className="row">
              <p className="row_title">
                <img src="data:image/webp;base64,UklGRlgBAABXRUJQVlA4TEwBAAAvHUAHECfCqI0kR8Wf6/3ydaLBuG0jR+q/1/vlc2LctpEj9d/r/fI5MQgAsMx42+xfzLYVAHjflyZhk/zb/iSsbQCs27RtYxKtLQPwQPL/v/M8DwPgtqztv63cFrY928r//8NtX1vlOA4HwIBgu5DkABSgAASIpNv2ui16nke2DZLs53nGktjv+7Yksm0J4LeVkqz//6EkcRuzTXye5wWYbTzQtnXbom3XNgi8wA/wSQDwAQ8gABjObds2lpP55T5m2/iQ2+//UtW5N/+N6P8E0Ev6ehP2KCgQmEIwyYvPgW6CORNILwG0iVkw/JziBoywaXHNEFFmB0ZqAX6NyIBn27bdJKLsGtsGc4DGTYfu63tgRUxLoHzEM1pXPOWC55wdVVXVvLwtif5tnm3bQ2m5EwCMpVFEURQlJu/h09ySaJ93gMQ6R6uKV6IcyQ==" />
                Review of additional documents
                <i
                  className="fa fa-question-circle"
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </p>
              <p>&#9675; We do not need additional documents.</p>
            </div>
            <div className="row">
              <p className="row_title">
                <img src="data:image/webp;base64,UklGRrYBAABXRUJQVlA4TKkBAAAvHUAHEB8DoZEkR1Lwp3vmzcxW0oDYNpIjifmne+bNzJYgto3kSGL+6Z55M7MlB5IkmdZ0D9573+b9z2erA/b7+xvbAFaqbBsrwbcZCACVIPyr2GaVg9u80r030bv33v///yfVtxJ++J1zZv///1X98dvmlbZ90cERcBDt8zwH6JzjFVFV/f//t9V/Wx95zrlV9jxPVddti+d5HtvGVcBxgn5/f0dogG2x7Yfvtqb63HsTvXMOzzn76vx6vSbf77e99/L//39777VtqLx6P8/Toff39+eIz+ezroBvFWBlEBwAAEC3te2Y8oyRbTfMrslunO3r/I/iZfwd0f8JkD+/faTzK3afeD7y1/8CMO1tGfXE27xmw1v4Arht9iaNh7Vil2i7Z3sdwuOpVFwaUqmJgMjxG6+nVs03QEkqwGVs7AP4GLVZBHhefwXIbaFu2ywpvKPmFzSrbvp86By4ivp5rPZI0375oFW8PMy0ZLL6dNA0XDSudNxhvo5oGvosO9ewnersS0rbPZbFHau5IneJgc+v+BiSvbplwaFQ3xRHB3GfPLMd9PCPBAA=" />
                Interview
                <i
                  className="fa fa-question-circle"
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </p>
              <p>
                &#9675; You do not need an interview. We will send you a message
                if this changes.
              </p>
            </div>
            <div className="row">
              <p className="row_title">
                <img src="data:image/webp;base64,UklGRmwDAABXRUJQVlA4TF8DAAAvHUAHEPVIrq3t2J7eXvy2+ca2bfy2bdu2bdu2OXo/RPNnnHUVkCZYhZN39BfwVxCPEwGBAQCCyZ5t27Zt27Zt27Zt27Zt27bdBJAX4RaggtHd42I1N81tGmxyMx/c3RtppLCbLG80S/1R/wD1KwAQLhVJ5uYNaOxZRqbL1JLX0rx8ny5rFqN0oTklWbC5/nqEzjj8OqCCSe4aoB8v1qfJzUEsgoQa7J2upRTLJNRgdgJhG+DowbxYBpdyMQ+KO4rbzCdwYLAHzzYEmlvT8GIU8Ars0zCaSTzor1AjUklQzNlMOIYYZKi5A6WjOrIDA7iaJ8ahLng6xKhD4aGIr4beaBCA/uQK8BTMqRZcLujGkb0XSthEdOFTP3I3k/CqB4hWyReQfYHS6dE2rS1ubA6skmEWxt6/ipk4e+J6sYgQU9zMTZaD0dgMtMoRfsxCEEKijGAdTGy8H6b0oVHfMveLEHx3chCh+yADIZZBZjjYuwxs4y9/qLUYK9dITX2yr8NIf1HGvm8MZSx8Okv4x02glu5ID1Jlva1B/YJ5byU+04A0aatI+NndzUSCFk8lC5SOJ6CoF/a9D3WHfZ6BMp5CmvTtfISYO8YiwSTQGi5BLsHwtuX5DhfXWGUc7s8RxOGeRbAdmadFcJMkRBg/SEWCrosTXPxcAuFuz7MKXMk4Dau7ihgd+2DYBxSzU//cKOGmUcF8tAvFvGbxCDM1S0SCAQ9ZgjhVC4PJcTilQ1SwOPnBOrwPhfqRuZmEZO/pz1HE4z0o5DndiFwRvgfpUDppI3wQhf39y+Aa2yjhCDHD9bJSbhhOvaIe6Y9xONV96rcHm+/rmZZmkiALgX6roXFxhMHUCojBPNKkTeNh7/cZhpPtOFA92gDwkUUwk0jq72eExmfmjfrN401QhM76OKzChdBMbhkNO79iYdwqICIvlYN5jVYvZvkDk6BZKK0txGqFm+Jg7xyE4pnQSLkBFK80hCrK3W1fTw19jJrsE27krgPdTcDekXFojX2kSvhZ4lDfFoCIbx7wGnfi14GDDV+zL41Utv7YOzwHrnyKPCEi4Y0M2aswnV0P+58/wzSrGKlP+quScQ34SOt/IukW0AoYsXMB9e1pSvaOwjqISDlSfe9cujghtp5X81dBpfUcBgA=" />
                Biometrics
                <i
                  className="fa fa-question-circle"
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </p>
              <p>&#9675; March 16, 2022 Completed.</p>
            </div>
            <div className="row">
              <p className="row_title">
                <img src="data:image/webp;base64,UklGRtICAABXRUJQVlA4TMUCAAAvHUAHEF/GoG0bQeYP+f/W0GDYtm0Y/n/y1lgM27YNw/9P3hoLgmS7bRv8D7C6+/6HtNMjEkBAtqGSSoAKFSpBIipCqwQrASuvpNJKKkGCQOUVKwAV706rqGybVoAjK+K/qhjbFrKqd0cAX9su771SrW0CVKNa22Yld2dAtataOfq2XSkUDawOLKxtZZu99wDbxorvvVYFHGPbxt52Bqq1LXH+/9/hmNus+qie1a5YSSUw/CC29Uqg2w5cgOqzulWJn20VZ5RtXv3e3Rl6dwf8vefVs/K7a5VA8b8NaNsc+d6r1UT5vk+3zWphb7tv+6sEgUTc3aVqFWH4Rlas8u6wDXc3MLcdFau2TbAqq1r12nYDYNvi//8CQisC0CoR8KqBVcCqgFXEURUAqBIFqASJwEYHKkEiEXB0AAAg0bZtY29WattGaiO129S2beuvm9q2bdt2/3+91n+/8AEi+q+wbdtGspOOT8gTNp6089iN/RnDq2bp1HLXb1X15erqmXf8O/XDlRN3fqh3OmfWBXE9ObgCUH/idX3dI7pj436cQGDZLQnfNo9qvWd+Swco2KIEwDo9kz+CDTodoO9tnw4D8h3RQWErvvBaEaD8A/VNbaDZJw+G9NEpAGmq9gY45PtKAQu1PUDqVzXRCmCapgVs8m9pAFbFTWwFoJeODNjsv1Ik2WF29xQAeuqIgJUm6kKxUbFYP9rFYuPKwGjtFjBGh8Ba9VaV8+oOyPBXakCdL+6FU6rnVC9Q7omXCD3gz07JmMwSnRdBx7g3a24L+3Npl2/eqxwBG/Vi07kPVb06IP2ZbifKkmf18dRaAxevmNm1yfrP6v/5kal2WH2+b/myNUf/qGp8UWQKzHlk6OXJd9V49JEaM05/Vx/uHlqItncz/wSKNmzUgCTb3A0+s2rSMT4rm3lVPIsJPu8Xzjq03nO8P9kVAA==" />
                Background check
                <i
                  className="fa fa-question-circle"
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </p>
              <p>
                &#9675; We are processing your background check. We will send
                you a message if we need more information.
              </p>
            </div>
            <div className="row">
              <p className="row_title">
                <img src="data:image/webp;base64,UklGRrACAABXRUJQVlA4TKQCAAAvHUAHEO8FqY0kQZL5493X9HTG7h0Jx23bCBL7r/deNxvLcds2gsT+673XzcZy5EaSImXk9DLz/9+2V+bdgao9gLZRaZurRFa6d4YB+F9VI857/QpQeRsABaDgWlXw8//3KoOKba469O+dQBX3DhjGABVO1RR+/v8evK1X5ft9YHbvmmq+7bMNdFWpEm01rNhmGL97N94mlHvHNsHoAaze77siEe/3TSrdOyptG927PzYYVafz3nCb4G2BaXWvJuhVsQ18q1nVoa221e/5/6fgvDc+7wmGP7/fAJOq20ZVVwDUWG4TugpENa6MGcDx3i3Atl5VI6ohCipQfd/vG29zJSQMbwNUqgYAvW2BDoFEjdx2ANWtGp73JqASEmWbKldCrzJqZAUAAL1KyH9okQgkOqwAMEi0bdvYmxPbtvHHtp3atm2ktpvablIz9nm6e+/PF9gnov8TQE69do1jnohjnj11hHvqu7ep7vbyXtI/y4J7i7ztEtnHxjORNpSvqKX0Wzx3rHMacnyObyZT5coaQ+k/Htr6kn8vIN+pGR+a/4dfrfoh/5t061n9WE3wmxQQ6j+xulPXrdwvJhNK+pVluu3yXO6GEoCAsQl/AhB6ml/wYU3a1y/ZD+ZalcBRCVQK/w6kPOIGZR9voS6+bd1BXk0L5ZI7oWz4Qxh5XuEOAoJ5OIiAyrn3IeR5g9uo4jofmSeylx9XKQJCyx2+uA44wQ/bj7L5MiFKc0jMfXVDhrluQgFLEqFxyDDbTEt/ab5vIA0IWPxN83M5AVnbzl44t6uIAOTokLH51PmTmzLJVgtLrmJvC4vFEXkOymeBi0T07rnKcm13T7g9PHZ8ZuPARg+b3A6w1fttSnw9OD48q2BkfPBNgi2AV3x0bJyIxETFe5EZ" />
                Final decision
                <i
                  className="fa fa-question-circle"
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </p>
              <p>
                &#9675; Your application is in progress. We will send you a
                message once the final decision has been made.
              </p>
            </div>
          </Details>

          <Messages>
            <h2>Messages about your application</h2>
            <p>(2 New messages)</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <p style={{ fontWeight: "700", marginRight: "10px" }}>Search:</p>
              <input type="text" />
              <p style={{ marginLeft: "10px" }}>
                Showing 1 to 4 of 4 entries |
              </p>
              <p style={{ fontWeight: "700", marginLeft: "5px" }}> Show</p>
              <select style={{ fontWeight: "700", margin: "0px 10px" }}>
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <p style={{ fontWeight: "700" }}>entries</p>
            </div>

            <table style={{ marginTop: "20px", width: "100%" }}>
              <thead>
                <tr className="table_head_rows">
                  <th>Subject</th>
                  <th>Data sent</th>
                  <th>Data read</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Biometrics Collection Lette{" "}
                    {appData.length > 0 &&
                      appData[appDataIndex]["msg1"][0] !== "" &&
                      appData[appDataIndex]["msg1"][0]}
                  </td>
                  <td>March 7, 2022</td>
                  <td>March 10, 2022</td>
                </tr>
                <tr>
                  <td>Submission Confirmation</td>
                  <td>March 7, 2022</td>
                  <td>New Message</td>
                </tr>
                <tr>
                  <td>Confirmation of Online Application Transmission</td>
                  <td>March 7, 2022</td>
                  <td>New Message</td>
                </tr>
                <tr>
                  <td>Online Application</td>
                  <td>March 7, 2022</td>
                  <td>New Message</td>
                </tr>
              </tbody>
            </table>

            <div style={{ margin: "25px 0", textAlign: "center" }}>
              <button>1</button>
            </div>
          </Messages>

          <button className="report">
            Report a problem or mistake on this page
          </button>
        </Body>

        <Footer>
          <div className="links">
            <div className="content">
              <div>
                <p className="content-head">About</p>
                <p>About GCKey</p>
                <p>Enabled Services</p>
                <p>Site Map</p>
              </div>
              <div>
                <p className="content-head">Transparency</p>
                <p>Proactive Disclosure</p>
                <p>Terms and Conditions</p>
                <p>Personal Information Collection Statement</p>
              </div>
              <div>
                <p className="content-head">News</p>
                <p>Recent Project Activity</p>
              </div>
              <div>
                <p className="content-head">Contact Us</p>
                <p>Phone Numbers</p>
              </div>
            </div>
          </div>
          <div className="end" />
        </Footer>
      </Main>
    </Container>
  );
}

export default ApplicationStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 1200px;

  .lang {
    text-align: right;
    color: #284162;
    text-decoration: underline;
    margin-top: 10px;
  }

  .lang:hover {
    color: #0535d2;
    cursor: pointer;
  }

  .header {
    margin-top: 30px;
    font-size: 20px;
    line-height: 1.5;

    h1 {
      font-size: 34px;
    }
  }

  .navbar {
    background-color: #335075;
    position: absolute;
    left: 0px;
    width: 100vw;
    display: grid;
    grid-template-columns: auto 1200px auto;
    height: 55px;
    place-items: center;

    div {
      color: white;
      width: 100%;
      place-items: center;
    }

    .menu-items {
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto auto;
      width: 100%;
      place-items: center;
      text-align: center;

      div {
        display: grid;
        place-items: center;
        border-left: 1px solid white;
        height: 55px;
        width: 100%;
      }
    }
  }

  .routes {
    margin-top: 65px;
    display: flex;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;
  height: 80px;

  @media screen and (max-width: 500px) {
    .nav-img {
      margin-left: 10px !important;
      margin-right: 10px !important;
      width: 100%;
    }
  }

  .nav-img {
    margin-left: 25px;
    height: 25px;
  }
`;

const Body = styled.div`
  margin-top: 10px;

  .notify {
    border-left: 4px solid #ddd;
    margin-bottom: 23px;
    padding: 15px;
    margin-top: 15px;
  }

  .report {
    padding: 6px 12px;
    font-size: 16px;
    margin-top: 40px;
    border: 1px solid #335075;
    border-radius: 5px;
    color: #335075;
    background-color: #eaebed;
    border-color: #dcdee1;
  }
`;

const Footer = styled.div`
  margin-top: 25px;

  .links {
    background-color: #e1e4e7;
    width: 100vw;
    position: absolute;
    left: 0px;
    border-bottom: 4px solid #335175;
  }

  .content {
    width: 1200px;
    margin: 25px auto;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    .content-head {
      font-weight: bolder;
      font-size: 18px;
    }

    div {
      width: 100%;

      p {
        margin: 10px 0;
        font-size: 14px;
      }
    }
  }

  .end {
    height: 100px;
    width: 100vw;
    background: url("https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg");
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 25px;

  div {
    border-radius: 3px;
    border: 1px solid #ddd;
    padding-bottom: 10px;
  }

  h2 {
    color: #333;
    background-color: #f5f5f5;
    padding: 10px 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
  }

  p {
    margin-left: 15px;
    margin-bottom: 5px;
  }

  span {
    font-weight: normal;
  }
`;

const Details = styled.div`
  .row {
    margin: 10px 0;
  }

  .row_title {
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  img {
    margin-right: 5px;
  }
`;

const Messages = styled.div`
  table {
    border: 2px solid #ddd;
    border-collapse: collapse;
  }

  h2 {
    margin: 30px 0px 10px 0px;
  }

  .table_head_rows th {
    font-size: 16px;
    color: #333;
    padding: 5px;
    border: 2px solid #ddd;
    border-bottom: 2px solid #333;
  }

  tbody tr {
    background-color: #f5f5f5;
  }

  tbody tr td {
    padding: 5px;
    border: 2px solid #ddd;
  }

  button {
    background-color: #2572b4;
    border: 1px solid #2572b4;
    border-radius: 5px;
    color: #fff;
    cursor: default;
    padding: 10px 16px;
  }
`;
