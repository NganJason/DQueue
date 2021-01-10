import React from "react";
import { IconButton, Grid, Paper } from "@material-ui/core";
import FilterTag from "../FilterTag/FilterTag";
import SortRoundedIcon from "@material-ui/icons/SortRounded";
import styles from "./FilterBar.module.scss";

const FilterBar = ({ setPopOverAnchor }) => {
  let tags = [
    "American",
    "Japanesese",
    "$$",
    "45mins",
    "American",
    "Japanesese",
    "$$",
    "45mins",
    "Japanesese",
  ];

  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    setPopOverAnchor(e.target);
  };

  return (
    <div className={styles.filterBarDiv}>
      <Paper className={styles.filterBarContainer}>
        <Grid container alignItems="center" justify="flex-start" xs={12}>
          <IconButton type="submit">
            <SortRoundedIcon fontSize="large" onClick={handleClick} />
          </IconButton>
          <Grid container item spacing={2} xs={10} md={11} justify="flex-start">
            {tags.map((tag) => (
              <FilterTag title={tag} />
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FilterBar;
