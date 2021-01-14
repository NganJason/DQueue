import React from "react";
import { IconButton, Grid, Paper } from "@material-ui/core";
import SortRoundedIcon from "@material-ui/icons/SortRounded";
import FilterTag from "../FilterTag/FilterTag";
import styles from "./FilterBar.module.scss";

const FilterBar = ({ setPopOverAnchor, filterState, updateFilter }) => {
  let tags = Object.keys(filterState).filter(
    (key) => filterState[key] === true
  );

  const iconClickHandler = (e) => {
    e.preventDefault();
    setPopOverAnchor(e.target);
  };

  return (
    <div className={styles.filterBarDiv}>
      <Paper className={styles.filterBarContainer}>
        <Grid container alignItems="center" justify="flex-start" xs={12}>
          <IconButton type="submit">
            <SortRoundedIcon fontSize="large" onClick={iconClickHandler} />
          </IconButton>
          <Grid container item spacing={2} xs={10} md={11} justify="flex-start">
            {tags.map((tag, index) => (
              <FilterTag key={index} title={tag} updateFilter={updateFilter} />
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FilterBar;
