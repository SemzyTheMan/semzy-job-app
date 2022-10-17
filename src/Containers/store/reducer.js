const initialForm = {
  title: {
    value: "",
  },
  location: {
    value: "",
  },
  role: {
    value: "",
  },
  page: 1,
};

const reducer = (state = initialForm, action) => {
  if (action.type === "TITLE_FILTER") {
    return {
      ...state,
      title: { value: action.value },
    };
  } else if (action.type === "LOCATION_FILTER") {
    return {
      ...state,
      location: { value: action.value },
    };
  } else if (action.type === "FULLTIME_FILTER") {
    return {
      ...state,
      role: { value: action.value },
    };
  } else if (action.type === "GET_ID") {
    return {
      ...state,
      page: action.value,
    };
  }
  return state;
};

export default reducer;
