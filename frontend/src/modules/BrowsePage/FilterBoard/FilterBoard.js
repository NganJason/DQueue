import React from "react";
import { Grid, Popover } from "@material-ui/core";
import CheckBoxGrid from "../CheckBoxGrid/CheckBoxGrid";
import SubtitleTag from "../SubtitleTag/SubtitleTag";
import { filterOptions } from "../../../constants/tempDB";
import styles from "./FilterBoard.module.scss";

const FilterBoard = ({
  popOverAnchor,
  setPopOverAnchor,
  filterState,
  updateFilter,
}) => {
  const popOverCloseHandler = () => {
    setPopOverAnchor(null);
  };

  return (
    <div>
      <Popover
        open={Boolean(popOverAnchor)}
        onClose={popOverCloseHandler}
        anchorEl={popOverAnchor}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Grid
          container
          direction="column"
          justify="flex-start"
          className={styles.filterBoardDiv}
        >
          {Object.keys(filterOptions).map((key, index) => {
            return (
              <>
                <SubtitleTag key={index} subtitle={key} />
                <CheckBoxGrid
                  key={index}
                  options={filterOptions[key]}
                  filterState={filterState}
                  updateFilter={updateFilter}
                />
              </>
            );
          })}
        </Grid>
      </Popover>
    </div>
  );
};

export default FilterBoard;
