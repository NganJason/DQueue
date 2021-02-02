import React, { useState } from "react";
import { initObjFromArr } from "../../../common/utils";
import { signupFormConst } from "../../../constants/formConstant";
import styles from "../Login/Login.module.scss";

import CustomButton from "../../../common/modules/CustomButton/CustomButton";
import CustomTextField from "../../../common/modules/CustomTextField/CustomTextField";
import { Typography } from "@material-ui/core";

const SignUp = () => {
  const fieldNames = signupFormConst().map((field) => field.label);
  const [signupDetails, setSignupDetails] = useState(initObjFromArr(fieldNames));

  const changeHandler = (key) => (event) => {
    setSignupDetails({ ...signupDetails, [key]: event.target.value });
  };

  return (
    <div className={styles.formDiv}>
      <Typography variant="h4">Sign up</Typography>
      <Typography variant="h6">Join us now!</Typography>
      <br/>
      <form>
        {signupFormConst().map((obj, index) => {
          return (
            <CustomTextField 
              key={index}
              label={obj.label}
              type={obj.type}
              onChange={changeHandler(obj.label)}
              value={signupDetails[obj.label]}
              className={styles.fieldStyles}
            />
          );
        })}
        <CustomButton title="Sign up" />
      </form>
    </div>
  );
};

export default SignUp;
