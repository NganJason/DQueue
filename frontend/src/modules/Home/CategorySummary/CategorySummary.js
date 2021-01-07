import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import styles from "./CategorySummary.module.scss";

const cuisines = ["American", "Mexican", "Italian", "Japanese", "Thai", "Indian"];

function ButtonGridItem(props) {
  return (
    <Grid className={styles.categoryGridItem} item xs={4} sm={3} md={2} xl={1}>
      <Paper className={props.class}>
        <Button
          className={`${props.class} ${styles.categoryBtn}`}
          variant={props.variant}
        >
          <Typography variant="body1">{props.content}</Typography>
        </Button>
      </Paper>
    </Grid>
  );
}

export default function CategorySummary(props) {
  return (
    <div className={styles.categorySummary}>
      <Grid container justify="center" spacing={0} component="div">
        <ButtonGridItem class={styles.topLeft} content="American" variant="outlined" component="button"/>
        <ButtonGridItem class={styles.centerTop} content="Mexican" variant="outlined" component="button"/>
        <ButtonGridItem class={styles.topRight} content="Italian" variant="outlined" component="button"/>
      </Grid>
      <Grid container justify="center" spacing={0} component="div">
        <ButtonGridItem class={styles.bottomLeft} content="Japanese" variant="outlined" component="button"/>
        <ButtonGridItem class={styles.centerBottom} content="Thai" variant="outlined" component="button"/>
        <ButtonGridItem class={styles.bottomRight} content="Indian" variant="outlined" component="button"/>
      </Grid>
    </div>
  );
}
