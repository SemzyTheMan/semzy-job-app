import React from "react";
const form = {
  title: {
    value: "",
  },
  location: {
    value: "",
  },
  role: {
    value: "",
  },
};
const AuthContext = React.createContext({
  form: {
    title: {
      value: "",
    },
    location: {
      value: "",
    },
    role: {
      value: "",
    },
  },
  setForm: () => {},
});

export default AuthContext;
