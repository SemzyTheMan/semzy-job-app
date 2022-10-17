import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import classes from "./form.module.css";
import * as Unicons from "@iconscout/react-unicons";
import { titleFilter, locationFilter, fulltimeFilter } from "../store/actions";
const Form = (props) => {
  return (
    <div>
      <form className={classes.FormContainer}>
        <div className={classes.Title}>
          <div className={classes.icon}>
            <Unicons.UilSearch size="35" color="white"></Unicons.UilSearch>
          </div>
          <div className={classes.input}>
            <input
              type={"text"}
              placeholder={"Filter by Title"}
              onChange={(event) => {
                props.onTitleChangeHandler(event);
              }}
            ></input>
            <label>Filter by Title</label>
          </div>
        </div>
        <div className={classes.Title}>
          <div className={classes.icon1}>
            <Unicons.UilLocationPoint
              size="35"
              color="blue"
            ></Unicons.UilLocationPoint>
          </div>
          <div className={classes.input}>
            {" "}
            <input
              type={"text"}
              name="location"
              placeholder={"Filter by Location"}
              onChange={(event) => {
                props.onLocationChangeHandler(event);
              }}
            ></input>
            <label>Filter by Location</label>
          </div>
        </div>
        <div className={classes.Title}>
          <input
            className={classes.Checkbox}
            value="Full time"
            type={"checkbox"}
            onChange={(event) => {
              props.onFullTimeChangeHandler(event);
            }}
          ></input>
          <label className={classes.CheckLabel}>Fulltime only</label>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    form: { ...state },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChangeHandler: (event) => dispatch(titleFilter(event)),
    onLocationChangeHandler: (event) => dispatch(locationFilter(event)),
    onFullTimeChangeHandler: (event) => dispatch(fulltimeFilter(event)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
