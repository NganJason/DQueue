import React from "react";
import "./CardGrid.scss";

import { Grid } from "@material-ui/core";

import CardItem from "../CardItem/CardItem";
import PageNumSel from "../PageNumSel/PageNumSel";

export default function CardGrid(props) {
  return (
    <div className="card-grid">
      <Grid container spacing={Number(props.spacing)} justify="flex-start ">
        <CardItem
          description="Interesting facts about this restaurant"
          title="Nice Food"
          queue
          info
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
        />
        <CardItem
          description="Interesting facts about this restaurant"
          title="Nice Food"
          queue
          info
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
        />
        <CardItem
          description="Interesting facts about this restaurant"
          title="Nice Food"
          queue
          info
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
        />
        <CardItem
          description="Interesting facts about this restaurant"
          title="Nice Food"
          queue
          info
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
        />
        <CardItem
          description="Interesting facts about this restaurant"
          title="Nice Food"
          queue
          info
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"
        />
      </Grid>
      <PageNumSel />
    </div>
  );
}
