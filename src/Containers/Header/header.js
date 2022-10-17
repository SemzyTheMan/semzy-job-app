import classes from "./header.module.css";

import React from "react";

const Header = (props) => {
  return (
    <div className={classes.Container}>
          {/* <img src={headerImg} className={classes.HeaderImg}></img> */}
          <h2>devjobs</h2>
    </div>
  );
};

export default Header;
