import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.main}>
      <div className={classes.blue}>
        <p>Tell us what you think of this page</p>
        <p>Last updated: 12 December 2019</p>
        <p>Print this page</p>
      </div>
      <div className={classes.body}>
        <div className={classes.links}>
          <div className={classes.links1}>
            <p>HOME AFFAIRS PORTFOLIO</p>
            <p>TRAVEL AND CROSSING THE BORDER</p>
            <p>IMPORT, EXPORT AND BUYING ONLINE</p>
            <p>NATIONAL SECURITY</p>
            <p>CRIMINAL JUSTICE</p>
            <p>EMERGENCY MANAGEMENT</p>
            <p>CYBER SECURITY</p>
            <p>MULTICULTURAL AFFAIRS</p>
          </div>
          <div className={classes.links2}>
            <p>Who we are</p>
            <p>Our Ministers</p>
            <p>Popular questions</p>
            <p>Glossary</p>
            <p>Forms</p>
            <p>Online services</p>
            <p>Compliments, complaints and suggestions</p>
          </div>
          <div />
          <div className={classes.footerLogo}></div>
        </div>
        <div className={classes.footerAbout}>
          The Department of Home Affairs acknowledges the Traditional Custodians
          of Country throughout Australia and their continuing connection to
          land, sea and community. We pay our respects to all Aboriginal and
          Torres Strait Islander peoples, their cultures and to their elders
          past, present and emerging.
        </div>
        <div className={classes.quickLinks}>
          <p>Conditions of use</p>
          <p>Web privacy statement</p>
          <p>Accessibility of this website</p>
          <p>Freedom of information</p>
          <p>Information publication scheme</p>
          <p>Copyright and disclaimer</p>
          <p>Privacy</p>
        </div>
      </div>
      <div className={`${classes.chatLinks} ${classes.orange}`}>
        Ask a question
      </div>
      <div className={`${classes.chatLinks} ${classes.blues}`}>Feedback</div>
    </div>
  );
}

export default Footer;
