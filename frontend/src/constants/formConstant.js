import { InputAdornment } from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";

export const loginFormConst = (changeVisibility, visibility) => {
  return [
    {
      label: "Email Address",
      type: "text",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      },
    },
    {
      label: "Password",
      type: visibility ? "text" : "password",
      InputProps: {
        startAdornment: (
          <InputAdornment onClick={changeVisibility} position="start">
            {visibility ? <Visibility /> : <VisibilityOff />}
          </InputAdornment>
        ),
      },
    },
  ];
};

export const signupFormConst = (visibility, changeVisibility) => {
  return [
    {
      label: "Email Address",
      type: "text",
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      },
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
      type: "password",
      InputProps: {
        startAdornment: (
          <InputAdornment onClick={changeVisibility} position="start">
            {visibility ? <Visibility /> : <VisibilityOff />}
          </InputAdornment>
        ),
      },
    },
    {
      label: "Confirmed Password",
      type: "password",
      InputProps: {
        startAdornment: (
          <InputAdornment onClick={changeVisibility} position="start">
            {visibility ? <Visibility /> : <VisibilityOff />}
          </InputAdornment>
        ),
      },
    },
  ];
};
