import React, { useState } from "react";
import { initObjFromArr } from "../../../common/utils";
import { loginFormConst } from "../../../constants/formConstant";
import styles from "./Login.module.scss";

import CustomButton from "../../../common/modules/CustomButton/CustomButton";
import CustomTextField from "../../../common/modules/CustomTextField/CustomTextField";
import { Typography } from "@material-ui/core";

const Login = () => {
  const fieldNames = loginFormConst().map((field) => field.label);

  const [loginDetails, setLoginDetails] = useState(initObjFromArr(fieldNames));

  const changeHandler = (key) => (event) => {
    setLoginDetails({ ...loginDetails, [key]: event.target.value });
  };

  return (
    <div className={styles.formDiv}>
      <Typography variant="h4">Welcome</Typography>
      <Typography variant="h6">Login to continue</Typography>
      <br/>

      <form>
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
