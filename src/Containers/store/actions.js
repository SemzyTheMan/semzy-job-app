export const titleFilter = (event) => {
  event.preventDefault();
  return {
    type: "TITLE_FILTER",
    value: event.target.value,
  };
};
export const locationFilter = (event) => {
  event.preventDefault();

  return {
    type: "LOCATION_FILTER",
    value: event.target.value,
  };
};
export const fulltimeFilter = (event) => {
  event.preventDefault();
  if (event.target.checked) {
    return {
      type: "FULLTIME_FILTER",
      value: event.target.value,
    };
  } else {
    return {
      type: "FULLTIME_FILTER",
      value: " ",
    };
  }
};
export const getId = (id) => {
  return {
    type: "GET_ID",
    value:id
  }
}
