import React from "react";
import Project from "./Project";
import classes from "./WorkSection.module.css";
import redberry1 from "../images/redberry1.png";
import redberry3 from "../images/redberry3.png";
import expense from "../images/expense.png";

function WorkSection() {
  return (
    <section>
      <h2 className={classes.title}>Featured works</h2>
      <Project
        img={redberry1}
        title={"User and Laptop Form"}
        description={
          "This is a project for Redberry bootcamp, Project has two main parts, one for adding new role and the Laptop and in second part you may see  information user added."
        }
        link={"https://musical-sable-9ef8c0.netlify.app/"}
      ></Project>
      <Project
        img={redberry3}
        title={"Food order app"}
        description={"This is a React app for ordering products, with Cart"}
        link={"https://jovial-taffy-734343.netlify.app/"}
      ></Project>
      <Project
        img={expense}
        title={"Expense Tracker"}
        description={
          "This application is for adding expenses and then filter them by date"
        }
        link={"https://heartfelt-torrone-350cb6.netlify.app/"}
      ></Project>
    </section>
  );
}

export default WorkSection;
