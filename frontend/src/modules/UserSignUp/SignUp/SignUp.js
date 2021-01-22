import React, { useState } from "react";
import { initObjFromArr } from "../../../common/utils";
import { signupFormConst } from "../../../constants/formConstant";
import styles from "../Login/Login.module.scss";

import CustomButton from "../../../common/modules/CustomButton/CustomButton";
import CustomTextField from "../CustomTextField/CustomTextField";
import SubtitleTag from "../../BrowsePage/SubtitleTag/SubtitleTag";

const SignUp = () => {
  const fieldNames = signupFormConst().map((field) => field.label);

  const [signupDetails, setSignupDetails] = useState(
    initObjFromArr(fieldNames)
  );

  const [visibility, setVisibility] = useState(false);

  const changeHandler = (key) => (event) => {
    setSignupDetails({ ...signupDetails, [key]: event.target.value });
  };

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className={styles.formDiv}>
      <SubtitleTag header="h4" subtitle="Sign up" />
      <SubtitleTag header="h6" subtitle="Join us now!" />
      <form>
        {signupFormConst(visibility, changeVisibility).map((obj) => {
          return (
            <CustomTextField
              attr={obj}
              changeHandler={changeHandler}
              value={signupDetails}
            />
          );
        })}
        <CustomButton title="Sign up" />
      </form>
    </div>
  );
};

export default SignUp;
