import React from "react";
import fb from "../images/fb.png";
import classes from "./Footer.module.css";
import Linkedin from "../images/Linkedin.png";
import github from "../images/github.png";

function Footer() {
  return (
    <footer className={classes.footerParent}>
      <div className={classes.logos}>
        <a href="https://github.com/Dnakhutsrishvili">
          <img className={classes.logo} src={fb} alt="fb Logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/%E1%83%93%E1%83%90%E1%83%95%E1%83%98%E1%83%97-%E1%83%9C%E1%83%90%E1%83%AE%E1%83%A3%E1%83%AA%E1%83%A0%E1%83%98%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98-994050238/">
          <img
            className={classes.logo}
            src={Linkedin}
            alt="Linkedin Logo"
          ></img>
        </a>
        <a href="https://github.com/Dnakhutsrishvili">
          <img className={classes.logo} src={github} alt="github Logo"></img>
        </a>
      </div>
      <div>
        <p className={classes.copyright}>©2022 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
