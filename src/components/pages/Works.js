import React from "react";
import Project from "../Project";
import redberry1 from "../../images/redberry1.png";
import redberry3 from "../../images/redberry3.png";
import redberry2 from "../../images/redberry2.png";
import redberry from "../../images/redberry.png";
import expense from "../../images/expense.png";
import Header from "../Header";
import Footer from "../Footer";
import classes from "./Works.module.css";

function Works() {
  return (
    <div>
      <Header></Header>
      <div className={classes.margin}></div>
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

      <Project
        img={redberry}
        title={"Chess Chempionship"}
        description={
          "This application is for Register Players to a Chess Tournament"
        }
        link={"https://deft-faun-d176c0.netlify.app/"}
      ></Project>

      <Project
        img={redberry2}
        title={"Redberry Registration Form"}
        description={
          "Aplication for gathering information for Redberry interns"
        }
        link={"https://relaxed-lamport-b9df3d.netlify.app/"}
      ></Project>
      <Footer></Footer>
    </div>
  );
}

export default Works;
