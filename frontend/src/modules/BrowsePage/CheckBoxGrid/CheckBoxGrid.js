import { Grid } from "@material-ui/core";
import React from "react";
import CheckBox from "../CheckBox/CheckBox";

const CheckBoxGrid = ({ options }) => {
  return (
    <div>
      <Grid container>
        {options.map((option) => {
          return <CheckBox option={option} />;
        })}
      </Grid>
    </div>
  );
};

export default CheckBoxGrid;
