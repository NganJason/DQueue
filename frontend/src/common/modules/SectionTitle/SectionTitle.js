import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import styles from "./SectionTitle.module.scss";

export default function SectionTitle(props) {
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <Paper className={styles.sectionTitle} component="div">
            <Typography variant="h5" align="center">
              {props.title}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
