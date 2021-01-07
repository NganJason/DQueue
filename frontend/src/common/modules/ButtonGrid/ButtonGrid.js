import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import styles from "./ButtonGrid.module.scss";

function getGridItemPosition(row, col, rows, cols) {
  let position = "center";
  if (row === 0) position = "top";
  else if (row === rows - 1) position = "bottom";

  if (col === 0) position += "Left";
  else if (col === cols - 1) position += "Right";
  else position += "Center";

  if(rows === 1) position += "Only";

  return position;
}

function ButtonGrid(props) {
  const rows = new Array(props.rows).fill(0);
  return (
    <div className={styles.buttonGrid}>
      {rows.map((item, index) => {
        return (
          <Grid container justify="center" spacing={0} component="div">
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
    <Grid className={styles.categoryGridItem} item xs={4} sm={3} md={2} xl={1}>
      <Paper className={styles[getGridItemPosition(row, col, rows, cols)]}>
        <Button
          className={`${styles[getGridItemPosition(row, col, rows, cols)]} ${
            styles.categoryBtn
          }`}
          variant="outlined"
        >
          <Typography variant="body1">{item}</Typography>
        </Button>
      </Paper>
    </Grid>
  );
}

export default ButtonGrid;