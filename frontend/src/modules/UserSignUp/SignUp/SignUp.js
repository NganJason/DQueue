import { useHistory } from "react-router-dom";
import React, { useState } from "react";

import ApiService from "../../../common/services/api.service";
import { initObjFromArr } from "../../../common/utils";
import { setLogIn } from "../../../actions/authActions";
import { signupFormConst } from "../../../constants/formConstant";
import styles from "../Login/Login.module.scss";

import CustomButton from "../../../common/modules/CustomButton/CustomButton";
import CustomTextField from "../../../common/modules/CustomTextField/CustomTextField";
import { Typography } from "@material-ui/core";
import ErrorMsg from "../../../common/modules/ErrorMsg/ErrorMsg";

const SignUp = ({ user }) => {
  let history = useHistory();

  const fieldNames = signupFormConst().map((field) => field.label);

  const [signupDetails, setSignupDetails] = useState(
    initObjFromArr(fieldNames)
  );

  const [error, setError] = useState("");

  const changeHandler = (key) => (event) => {
    setSignupDetails({ ...signupDetails, [key]: event.target.value });
  };

  const registerHandler = async (event) => {
    event.preventDefault();

    if (signupDetails["Confirmed Password"] !== signupDetails["Password"]) {
      setSignupDetails({
        ...signupDetails,
        "Confirmed Password": "",
        Password: "",
      });
      return setError("Password does not match");
    }

    try {
      const payload = {
        email: signupDetails["Email Address"],
        password: signupDetails["Password"],
        first_name: signupDetails["First Name"],
        last_name: signupDetails["Last Name"],
        is_admin: user == "user" ? false : true,
      };

      const { data } = await ApiService.post("/user/signup", payload);

      setLogIn(data.user);

      history.push("/");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className={styles.formDiv}>
      <Typography variant="h4">Sign up</Typography>
      <Typography variant="h6">Join us now!</Typography>
      <br />
      {error && <ErrorMsg msg={error} />}

      <form onSubmit={registerHandler}>
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
