import React from "react";
import { IconButton, Grid, Paper, Typography } from "@material-ui/core";
import SortRoundedIcon from "@material-ui/icons/SortRounded";
import FilterTag from "../FilterTag/FilterTag";
import styles from "./FilterBar.module.scss";

const FilterBar = ({ setPopOverAnchor, filterState, updateFilter }) => {
  let tags = Object.keys(filterState).filter(
    (key) => filterState[key] === true
  );

  const iconClickHandler = (e) => {
    e.preventDefault();
    setPopOverAnchor(true);
  };

  return (
    <div className={styles.filterBarDiv}>
      <Paper className={styles.filterBarContainer}>
        <Grid container alignItems="center" wrap="nowrap">
          <IconButton type="submit" onClick={iconClickHandler}>
            <SortRoundedIcon fontSize="default" />
          </IconButton>
          {tags.length === 0 ?
            (<Typography className={styles.filterBarPlaceholder}>Select filters</Typography>) :
            (
              <Grid container item spacing={2} justify="flex-start">
                {tags.map((tag, index) => (
                  <FilterTag key={index} title={tag} updateFilter={updateFilter} />
                ))}
              </Grid>
            )}
        </Grid>
      </Paper>
    </div>
  );
};

export default FilterBar;
