import React from "react";
import img from "../images/img.jpg";
import classes from "./Section.module.css";
import cv from "../files/Davit nakhutsrishvili.pdf";

function Section() {
  return (
    <section className={classes.section}>
      <div className={classes.cont}>
        <img className={classes.img} src={img} alt="davit"></img>
        <h1 className={classes.title}>
          Hi, I am David, <br />
          Junior Web Developer
        </h1>
      </div>
      <div className={classes.contsec}>
        <p className={classes.paragraph}>
          I first became interested in web development in 2020 after learning
          about the virtually endless possibilities in this industry.
          <br /> In my educational journey, I completed numerous projects in
          HTML, CSS, Javascript, and React.
          <br /> At the moment, I'm honing my abilities and looking for my first
          developer job.
        </p>
        <a href={cv} download="cv-Davit Nakhutsrishvili">
          <button className={classes.btn}>Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Section;
