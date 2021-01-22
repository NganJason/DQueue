import React, { useState } from "react";
import { initObjFromArr } from "../../../common/utils";
import { loginFormConst } from "../../../constants/formConstant";
import styles from "./Login.module.scss";

import CustomButton from "../../../common/modules/CustomButton/CustomButton";
import CustomTextField from "../CustomTextField/CustomTextField";
import SubtitleTag from "../../BrowsePage/SubtitleTag/SubtitleTag";

const Login = () => {
  const fieldNames = loginFormConst().map((field) => field.label);

  const [loginDetails, setLoginDetails] = useState(initObjFromArr(fieldNames));

  const [visibility, setVisibility] = useState(false);

  const changeHandler = (key) => (event) => {
    setLoginDetails({ ...loginDetails, [key]: event.target.value });
  };

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className={styles.formDiv}>
      <SubtitleTag header="h4" subtitle="Welcome!" />
      <SubtitleTag header="h6" subtitle="Login to continue" />

      <form>
        {loginFormConst(changeVisibility, visibility).map((obj) => {
          return (
            <CustomTextField
              attr={obj}
              changeHandler={changeHandler}
              value={loginDetails}
            />
          );
        })}
        <CustomButton title="Log in" />
      </form>
    </div>
  );
};

export default Login;
