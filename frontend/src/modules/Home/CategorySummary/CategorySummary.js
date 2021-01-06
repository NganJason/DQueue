import React from "react";
import {
  ButtonGroup,
  Button,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import CardItem from "../CardItem/CardItem";
import "./CategorySummary.scss";

function ButtonEdge(props) {
  return (
    <Grid className="category-grid-item" item xs={4} sm={3} md={2} xl={1}>
      <Paper className={props.class}>
        <Button className={[props.class, "category-btn"]} variant={props.variant}>
          <Typography variant="body1">{props.content}</Typography>
        </Button>
      </Paper>
    </Grid>
  );
}

export default function CategorySummary(props) {
  return (
    <div className="category-summary">
      <Grid container justify="center" spacing={0}>
        <ButtonEdge class="top-left" content="American" variant="outlined" />
        <ButtonEdge class="center-top" content="Mexican" variant="outlined" />
        <ButtonEdge class="top-right" content="Italian" variant="outlined" />
      </Grid>
      <Grid container justify="center" spacing={0}>
        <ButtonEdge class="bottom-left" content="Japanese" variant="outlined" />
        <ButtonEdge class="center-bottom" content="Thai" variant="outlined" />
        <ButtonEdge class="bottom-right" content="Indian" variant="outlined" />
      </Grid>
    </div>
  );
}
