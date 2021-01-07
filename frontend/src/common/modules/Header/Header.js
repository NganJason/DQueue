import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import styles from "./Header.module.scss";

export default function Header(props) {
  return (
    <div className={styles.navBar}>
      <AppBar className={styles.navBar} position="static">
        <Toolbar>
          <Typography variant="h4" className={styles.navBarTitle}>
            DQueue
          </Typography>
          <Button variant="contained" className={styles.navBarBtn}>Login</Button>
          <Button variant="contained" className={styles.navBarBtn}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
