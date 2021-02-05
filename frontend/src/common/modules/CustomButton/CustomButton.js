import React from "react";
import styles from "./CustomButton.module.scss";

import { Button, Grid } from "@material-ui/core";

const CustomButton = ({ title }) => {
  return (
    <Grid container justify="center" className={styles.buttonDiv}>
      <Button
        variant="contained"
        type="submit"
        className={styles.button}
      >
        {title}
      </Button>
    </Grid>
  );
};

export default CustomButton;
