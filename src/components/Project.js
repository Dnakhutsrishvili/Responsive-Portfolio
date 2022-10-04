import React from "react";
import classes from "./Projects.module.css";

function Project(props) {
  return (
    <div className={classes.parent}>
      <a className={classes.link} href={props.link}>
        <img className={classes.img} src={props.img} alt="banner"></img>
      </a>
      <h3>{props.title}</h3>

      <p className={classes.descr}>{props.description}</p>
    </div>
  );
}

export default Project;
