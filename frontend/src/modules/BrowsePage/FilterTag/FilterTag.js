import React from "react";
import { Fab, Grid } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import styles from "./FilterTag.module.scss";

const FilterTag = ({ title, updateFilter }) => {
  const tagClickHandler = () => {
    updateFilter(title, false);
  };
  return (
    <Grid item>
      <Fab
        aria-label={title}
        component="div"
        disableRipple={true}
        size="medium"
        variant="extended"
        onClick={tagClickHandler}
        className={styles.filterTag}
      >
        <div className={styles.filterTagTitle}>{title}</div>
        <Cancel fontSize="small" />
      </Fab>
    </Grid>
  );
};

export default FilterTag;
