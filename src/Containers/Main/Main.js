import classes from "./Main.module.css";
import JobCard from "../../Components/JobCard/jobcard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getId } from "../store/actions";
const Main = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("data.json").then((response) => {
      setData(response.data);
      setLoading(true);
    });
  }, []);
  let content = null;
  if (loading == true) {
    console.log(data);
    content = (
      <div className={classes.Container}>
        {data.map((el) => {
          if (
            el.position
              .toLowerCase()
              .includes(props.form.title.value.toLowerCase()) &&
            props.form.location.value === "" &&
            props.form.role.value === ""
          ) {
            return (
              <JobCard
                key={el.id}
                backgroundColor={el.logoBackground}
                id={el.id}
                logoImg={el.logo}
                timePosted={el.postedAt}
                contract={el.contract}
                role={el.position}
                company={el.company}
                country={el.location}
              ></JobCard>
            );
          } else if (
            el.location
              .toLowerCase()
              .includes(props.form.location.value.toLowerCase()) &&
            props.form.title.value === "" &&
            props.form.role.value === ""
          ) {
            return (
              <JobCard
                key={el.id}
                backgroundColor={el.logoBackground}
                id={el.id}
                logoImg={el.logo}
                timePosted={el.postedAt}
                contract={el.contract}
                role={el.position}
                company={el.company}
                country={el.location}
              ></JobCard>
            );
          } else if (
            el.contract
              .toLowerCase()
              .includes(props.form.role.value.toLowerCase()) &&
            props.form.title.value === "" &&
            props.form.location.value === ""
          ) {
            return (
              <JobCard
                key={el.id}
                backgroundColor={el.logoBackground}
                id={el.id}
                logoImg={el.logo}
                timePosted={el.postedAt}
                contract={el.contract}
                role={el.position}
                company={el.company}
                country={el.location}
              ></JobCard>
            );
          } else if (
            el.location
              .toLowerCase()
              .includes(props.form.location.value.toLowerCase()) &&
            el.position
              .toLowerCase()
              .includes(props.form.title.value.toLowerCase()) &&
            el.contract
              .toLowerCase()
              .includes(props.form.role.value.toLowerCase())
          ) {
            return (
              <JobCard
                key={el.id}
                id={el.id}
                backgroundColor={el.logoBackground}
                logoImg={el.logo}
                timePosted={el.postedAt}
                contract={el.contract}
                role={el.position}
                company={el.company}
                country={el.location}
              ></JobCard>
            );
          }
        })}
      </div>
    );
  }
  useEffect(() => {
    console.log(props.page);
  }, [props.form, props.form.page]);
  console.log(loading);
  return <div> {content}</div>;
};

const mapStateToProps = (state) => {
  return {
    form: { ...state },
    page: state.page,
  };
};
const mapDispatchToProps = (dispath) => {
  return {
    onGetId: (id) => dispath(getId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
