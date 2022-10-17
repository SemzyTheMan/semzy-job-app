import React from "react";
import classes from "./jobcard.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getId } from "../../Containers/store/actions";
const JobCard = (props) => {
  return (
    <Link to={"/description"} className={classes.Wrap}>
      <div className={classes.Container}>
        <div
          className={classes.Img}
          style={{ backgroundColor: props.backgroundColor }}
        >
          <img src={props.logoImg}></img>
        </div>

        <p className={classes.Time}>
          <span>{props.timePosted} </span>{" "}
          <span className={classes.Contract}>{props.contract}</span>
        </p>
        <h2
          onClick={() => {
            console.log("i am clicked")
            console.log(props.id)
             return props.onGetId(props.id);
          }}
          className={classes.Role}
        >
          {props.role}
        </h2>
        <p className={classes.Company}>{props.company}</p>
        <p className={classes.Country}>{props.country}</p>
      </div>
    </Link>
  );
};
const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetId: (id) => dispatch(getId(id)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(JobCard);
