import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNumSel.module.scss";

import { Button, ButtonGroup } from "@material-ui/core";

const pageNums = [1, 2, 3, 4];

export default function PageNumSel(props) {
  return (
    <div className={styles.pageNumDiv}>
      <ButtonGroup className={styles.pageNumGroup} variant="outlined">
        {pageNums.map((num, index) => {
          return <Button key={index}>{num}</Button>;
        })}

        <Button>
          <Link to="browse">View All</Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}
