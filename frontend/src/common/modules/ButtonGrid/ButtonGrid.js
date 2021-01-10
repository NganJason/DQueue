import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import styles from "./ButtonGrid.module.scss";

function ButtonGrid(props) {
  const rows = new Array(props.rows).fill(0);
  return (
    <div className={styles.buttonGrid}>
      {rows.map((item, index) => {
        return (
          <Grid
            container
            justify="center"
            wrap="nowrap"
            spacing={0}
            component="div"
            key={index}
            className={styles.buttonGridRow}
          >
            <ButtonGridRow
              row={index}
              rows={props.rows}
              cols={props.cols}
              items={props.items}
            />
          </Grid>
        );
      })}
    </div>
  );
}

function ButtonGridRow(props) {
  const cols = new Array(props.cols).fill(0);
  return (
    <>
      {cols.map((item, index) => {
        return (
          <ButtonGridItem
            key={index}
            col={index}
            row={props.row}
            rows={props.rows}
            cols={props.cols}
            items={props.items}
          />
        );
      })}
    </>
  );
}

function ButtonGridItem(props) {
  const { row, col, rows, cols } = props;
  let item = props.items[row * cols + col];
  return (
    <Grid item className={styles.buttonGridItem} xs={4} sm={3} md={2} xl={1}>
      <Button className={styles.categoryBtn} variant="outlined">
        <Typography variant="body1">{item}</Typography>
      </Button>
    </Grid>
  );
}

export default ButtonGrid;
