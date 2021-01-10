import {
  Checkbox,
  FormControlLabel,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ option }) => {
  return (
    <Grid item md={3} xs={6}>
      <FormControlLabel
        control={<Checkbox checked={false} name={option} color="primary" />}
        label={option}
        className={styles.checkBox}
      />
    </Grid>
  );
};

export default CheckBox;
