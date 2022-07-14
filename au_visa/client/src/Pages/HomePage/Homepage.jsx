import React from "react";
import classes from "./Homepage.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/homelogo.png";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../Components/Footer/Footer";

function Homepage() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.menu}>
          <MenuIcon sx={{ fontSize: 40 }} />
          <span>Menu</span>
        </div>
        <div className={classes.logo}>
          <img src={logo} />
          <span>Immigration and citizenship</span>
        </div>
        <div className={classes.search}>
          <SearchIcon sx={{ fontSize: 40 }} />
        </div>
      </div>
      <div className={classes.afterHeader}>
        <p>ImmiAccount</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => window.location.assign("/enquiry")}
        >
          Visa Entitlement Verification Online (VEVO)
        </p>
        <p>My Tourist Refund Scheme (TRS)</p>
      </div>
      <div className={classes.banner}>
        <div className={classes.banner_title}>
          <p>Check visa details and conditions</p>
        </div>
        <div className={classes.flower} />
      </div>
      <div className={classes.tabs}>
        <p>Overview</p>
        <p style={{ backgroundColor: "white", color: "black" }}>
          Check conditions online (VEVO)
        </p>
        <p>See visa conditions</p>
        <p>Conditions list</p>
      </div>

      <div className={classes.grid}>
        <div className={classes.left}>
          <p>Check conditions online (VEVO)</p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => window.location.assign("/vevo")}
          >
            Visa holders
          </p>
          <p>Organisations</p>
        </div>
        <div>
          <div className={classes.paragraphs}>
            <h2>Check conditions online (VEVO)</h2>
            <p>
              Our Visa Entitlement Verification Online system (VEVO) allows visa
              holders, employers, education providers and other organisations to
              check visa conditions.
            </p>
            <p>
              VEVO can only provide information about people who have their
              details available in our systems. You may not have a searchable
              record if you migrated to Australia before 1990 and have not since
              travelled out of Australia. You may then need to apply for an{" "}
              <a>electronic visa record.</a> Some people may have an{" "}
              <a>ImmiCard</a> issued by us. Government agencies can then use the
              ImmiCard to check their commencement of identity in Australia.
            </p>
            <p>
              Australian citizens have unlimited rights to work or study in
              Australia. You cannot use VEVO to confirm this. You can provide a
              copy of your Australian citizenship certificate or your Australian
              passport to prove your citizenship.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Workplace rights of visa holders</h2>
            <p>
              Everyone working in Australia has basic rights and protections in
              the workplace, including minimum pay and conditions. Learn more
              about <a>workplace rights in Australia.</a>
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Visa holders</h2>
            <p>
              You can use VEVO to{" "}
              <a href="/enquiry">check your visa details and conditions.</a> Use
              VEVO to send proof of your visa conditions to others, for example,
              employers, landlords or the government of a country you would like
              to visit.
            </p>
            <p>
              <a>Learn how to use VEVO</a>
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Organisations</h2>
            <p>
              Registered organisations can <a>check someone's visa details.</a>
            </p>
            <p>
              <a>Register for an ImmiAccount</a> and then use VEVO to see the
              visa conditions of visa holders who have given you permission.
            </p>
            <p>
              Learn how to use <a>VEVO for organisations.</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
