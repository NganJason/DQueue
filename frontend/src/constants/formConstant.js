export const loginFormConst = () => {
  return [
    {
      label: "Email Address",
      type: "text"
    },

    {
      label: "Password",
      type: "password",
    },
  ];
};

export const signupFormConst = () => {
  return [
    {
      label: "Email Address",
      type: "text"
    },
    {
      label: "First Name",
      type: "text",
    },
    {
      label: "Last Name",
      type: "text",
    },
    {
      label: "Password",
      type: "password"
    },
    {
      label: "Confirmed Password",
      type: "password"
    },
  ];
};
