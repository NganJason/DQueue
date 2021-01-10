import { Grid } from "@material-ui/core";
import React from "react";
import CheckBox from "../CheckBox/CheckBox";

const CheckBoxGrid = ({ options, filterState, updateFilter }) => {
  return (
    <div>
      <Grid container>
        {options.map((option) => {
          return (
            <CheckBox
              option={option}
              filterState={filterState}
              updateFilter={updateFilter}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default CheckBoxGrid;
