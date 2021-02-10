import { useHistory } from "react-router-dom";
import React, { useState } from "react";

import ApiService from "../../../common/services/api.service";
import { initObjFromArr } from "../../../common/utils";
import { loginFormConst } from "../../../constants/formConstant";
import { setLogIn } from "../../../actions/authActions";
import styles from "./Login.module.scss";

import CustomButton from "../../../common/modules/CustomButton/CustomButton";
import CustomTextField from "../../../common/modules/CustomTextField/CustomTextField";
import ErrorMsg from "../../../common/modules/ErrorMsg/ErrorMsg";
import { Typography } from "@material-ui/core";

const Login = () => {
  let history = useHistory();
  const fieldNames = loginFormConst().map((field) => field.label);

  const [loginDetails, setLoginDetails] = useState(initObjFromArr(fieldNames));
  const [error, setError] = useState("");

  const changeHandler = (key) => (event) => {
    setLoginDetails({ ...loginDetails, [key]: event.target.value });
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const payload = {
        email: loginDetails["Email Address"],
        password: loginDetails["Password"],
      };

      const { data } = await ApiService.post("/user/login", payload);

      if (data) {
        setLogIn(data.user);
        history.push("/");
      }
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className={styles.formDiv}>
      <Typography variant="h4">Welcome</Typography>
      <Typography variant="h6">Login to continue</Typography>
      <br />

      <form onSubmit={loginHandler}>
        {error && <ErrorMsg msg={error} />}
        {loginFormConst().map((obj, index) => {
          return (
            <CustomTextField
              key={index}
              label={obj.label}
              type={obj.type}
              onChange={changeHandler(obj.label)}
              value={loginDetails[obj.label]}
              className={styles.fieldStyles}
            />
          );
        })}
        <CustomButton title="Login" />
      </form>
    </div>
  );
};

export default Login;
