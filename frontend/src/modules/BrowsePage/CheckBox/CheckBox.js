import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ option, filterState, updateFilter }) => {
  const checkBoxChangeHandler = (e) => {
    updateFilter(e.target.name, e.target.checked);
  };

  return (
    <Grid item md={3} xs={6}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={checkBoxChangeHandler}
            checked={filterState[option]}
            name={option}
            color="primary"
          />
        }
        label={option}
        className={styles.checkBox}
      />
    </Grid>
  );
};

export default CheckBox;
