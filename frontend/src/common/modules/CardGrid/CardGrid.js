import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./CardGrid.module.scss";
import CardItem from "../CardItem/CardItem";

export default function CardGrid(props) {
  return (
    <div className={styles.cardGrid}>
      <Grid container spacing={Number(props.spacing)} justify={props.justify}>
        {props.gridItems.map((item, index) => {
          return (
            <CardItem
              key={index}
              description={item.description}
              title={item.title}
              queue={item.queueButton}
              info={item.infoButton}
              image={item.image}
            />
          );
        })}
      </Grid>
    </div>
  );
}
