import React from "react";
import { Grid, Popover, Button } from "@material-ui/core";
import CheckBoxGrid from "../CheckBoxGrid/CheckBoxGrid";
import SubtitleTag from "../SubtitleTag/SubtitleTag";
import { filterOptions } from "../../../constants/tempDB";
import styles from "./FilterPopOver.module.scss";

const FilterPopOver = ({
  popOverAnchor,
  setPopOverAnchor,
  filterState,
  updateFilter,
  windowDimensions
}) => {
  const popOverCloseHandler = () => {
    setPopOverAnchor(false);
  };

  return (
    <div>
      <Popover
        open={popOverAnchor}
        onClose={popOverCloseHandler}
        anchorReference="anchorPosition"
        anchorPosition={{ left: windowDimensions.width / 2, top: windowDimensions.height / 2 }}
        transformOrigin={{ vertical: "center", horizontal: "center" }}
      >
        <Button className={styles.closeButton} onClick={popOverCloseHandler}>
          Close
        </Button>
        <Grid
          container
          direction="column"
          justify="flex-start"
          className={`${styles.filterPopOverDiv} ${windowDimensions.width <= 800 ? styles.mobilePopOverDiv : undefined}`}
        >
          {Object.keys(filterOptions).map((key, index) => {
            return (
              <Grid item key={index}>
                <SubtitleTag subtitle={key} />
                <CheckBoxGrid
                  options={filterOptions[key]}
                  filterState={filterState}
                  updateFilter={updateFilter}
                />
                {index < Object.keys(filterOptions).length - 1 && <br />}
              </Grid>
            );
          })}
        </Grid>
      </Popover>
    </div>
  );
};

export default FilterPopOver;
