import React from "react";
import { Fab, Grid } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import styles from "./FilterTag.module.scss";

const FilterTag = ({ title }) => {
  return (
    <Grid item className={styles.filterTagDiv}>
      <Fab
        variant="extended"
        component="div"
        disableRipple="true"
        size="medium"
        className={styles.filterTag}
      >
        <div className={styles.filterTagTitle}>{title}</div>
        <Cancel fontSize="small" />
      </Fab>
    </Grid>
  );
};

export default FilterTag;
