import React, { useState, useEffect } from "react";

import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  const [showNavState, setShowNavState] = useState(true);

  const [width, setWindowWidth] = useState(0);

  //using global width to change responsive state
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
    if (width > 992) {
      setShowNavState(false);
    } else {
      setShowNavState(true);
    }
  };

  const responsive = {
    state: width > 992,
  };
  console.log(responsive.state);
  return (
    <header>
      <nav className={classes.parent}>
        {showNavState ? (
          <div
            onClick={() => {
              setShowNavState(!showNavState);
            }}
            className={classes.bulk}
          >
            <hr className={classes.bulkLini}></hr>
            <hr className={classes.bulkLini}></hr>
            <hr className={classes.bulkLini}></hr>
          </div>
        ) : (
          <div
            onClick={() => {
              setShowNavState(!showNavState);
            }}
            className={classes.close}
          ></div>
        )}
        {!showNavState && (
          <ul className={classes.navbar}>
            <li
              onClick={() => {
                navigate("/");
              }}
              className={classes.link}
            >
              Main
            </li>

            <li
              onClick={() => {
                navigate("/works");
              }}
              className={classes.link}
            >
              Works
            </li>
            <li
              onClick={() => {
                navigate("/contact");
              }}
              className={classes.link}
            >
              Contact
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
