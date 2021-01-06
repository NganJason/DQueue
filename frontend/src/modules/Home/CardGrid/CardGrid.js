import React from "react";
import "./CardGrid.scss";

import { Grid, Button } from "@material-ui/core";

import CardItem from "../CardItem/CardItem";
import PageNumSel from "../PageNumSel/PageNumSel";

export default function CardGrid(props) {
  return (
    <div className="card-grid">
      {/* <Grid container justify="flex-end">
        <Grid item className="view-all-grid-item">
          <Button className="view-all-btn" variant="contained">
            View All
          </Button>
        </Grid>
      </Grid> */}
      <Grid
        container
        spacing={Number(props.spacing)}
        justify="flex-start "
      >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <CardItem
            description="Interesting facts about this restaurant"
            title="Nice Food"
            queue
            info
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <CardItem
            description="Interesting facts about this restaurant"
            title="Nice Food"
            queue
            info
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <CardItem
            description="Interesting facts about this restaurant"
            title="Nice Food"
            queue
            info
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <CardItem
            description="Interesting facts about this restaurant"
            title="Nice Food"
            queue
            info
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <CardItem
            description="Interesting facts about this restaurant"
            title="Nice Food"
            queue
            info
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
          />
        </Grid>
      </Grid>
      <PageNumSel />
    </div>
  );
}
