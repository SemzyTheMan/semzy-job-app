import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./description.module.css";
import { connect } from "react-redux";
const Description = (props) => {
  const [description, setDescription] = useState(null);

  useEffect(() => {
    axios.get("data.json").then((response) => {
      setDescription(response.data);
    });
  }, []);

  let content = "";
  let secondContent = "";
  let footer = "";
  if (description) {
    console.log(description);
    content = (
      <div className={classes.firstContainer}>
        <div
          className={classes.Img}
          style={{
            backgroundColor: description[props.page - 1].logoBackground,
          }}
        >
          <img src={description[props.page - 1].logo}></img>
        </div>
        <div className={classes.head}>
          <h1>{description[props.page - 1].company}</h1>
          <p>{description[props.page - 1].company.toLowerCase() + ".com"}</p>
        </div>
        <button>Company Site</button>
      </div>
    );
    secondContent = (
      <div className={classes.secondContainer}>
        <div className={classes.firstHead}>
          <div className={classes.mainName}>
            <p className={classes.mainNameP}>
              <span>{description[props.page - 1].postedAt}</span>
              <span>{description[props.page - 1].contract}</span>
            </p>
            <h1 style={{ fontSize: "2.5rem", paddingBottom:"1rem"} }>
              {description[props.page - 1].position}
            </h1>
            <p>{description[props.page - 1].location}</p>
          </div>
          <button className={classes.Apply}>Apply Now</button>
        </div>
        <p className={classes.firstP}>
          {description[props.page - 1].description}
        </p>
        <h1>Requirements</h1>
        <p className={classes.firstP}>
          {description[props.page - 1].requirements.content}
        </p>
        <ul>
          {description[props.page - 1].requirements.items.map((el) => {
            return <li key={el}>{el}</li>;
          })}
        </ul>
        <h1>What you will do</h1>
        <p className={classes.firstP}>
          {description[props.page - 1].role.content}
        </p>
        <ol>
          {description[props.page - 1].role.items.map((el) => {
            return <li key={el}>{el}</li>;
          })}
        </ol>
      </div>
    );
    console.log(props.page);
    footer = (
      <div className={classes.Footer}>
        <div>
          <h1>{description[props.page - 1].position}</h1>
          <p>{description[props.page - 1].company}</p>
        </div>
        <button>Apply Now</button>
      </div>
    );
  }
  return (
    <div className={classes.Container}>
      {content}
      {secondContent}
      {footer}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};
export default connect(mapStateToProps)(Description);
