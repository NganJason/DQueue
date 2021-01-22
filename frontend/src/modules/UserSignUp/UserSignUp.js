import React, { useState } from "react";
import styles from "./UserSignUp.module.scss";

import CustomTab from "./CustomTab/CustomTab";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import { Grid, Paper } from "@material-ui/core";

const UserSignUp = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (e, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={styles.formContainer}
    >
      <Grid item xs={10} md={4}>
        <Paper className={styles.formGrid}>
          <CustomTab
            tabIndex={tabIndex}
            handleChange={handleChange}
            tabs={["Login", "Signup"]}
          />

          {tabIndex == 0 ? <Login /> : <SignUp />}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserSignUp;
