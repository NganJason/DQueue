import React from "react";
import "./PageNumSel.scss";

import { Button, Grid, ButtonGroup } from "@material-ui/core";

const pageNums = [1, 2, 3, 4];

export default function PageNumSel(props) {
  return (
    // <Grid container justify="center">
    <div className="page-num-div">
      <ButtonGroup className="page-num-group" variant="outlined">
        {pageNums.map((num, index) => {
          return <Button key={index}>{num}</Button>;
        })}
        <Button>View All</Button>
      </ButtonGroup>
    </div>
    // {/* </Grid> */}
  );
}
