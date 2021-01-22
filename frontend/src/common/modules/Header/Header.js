import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className={styles.navBar}>
      <AppBar className={styles.navBar} position="static">
        <Toolbar>
          <Typography variant="h4" className={styles.navBarTitle}>
            <Link className={styles.navBarHomeLink} to="/">
              DQueue
            </Link>
          </Typography>
          <Button variant="contained" className={styles.navBarBtn}>
            <Link className={styles.navBarHomeLink} to="/signup">
              Login
            </Link>
          </Button>
          <Button variant="contained" className={styles.navBarBtn}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
