import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";

import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import ProfileNav from "./ProfileNav/ProfileNav";

export default function Header(props) {
  const user = useSelector((state) => state.auth);

  return (
    <div>
      <AppBar className={styles.navBar} position="static">
        <Toolbar>
          <Typography variant="h4" className={styles.navBarTitle}>
            <Link className={styles.navBarHomeLink} to="/">
              DQueue
            </Link>
          </Typography>
          {Object.keys(user).length > 0 ? (
            <ProfileNav username={user.first_name} />
          ) : (
            <>
              <Button
                variant="contained"
                className={styles.navBarBtn}
                component={Link}
                to="/sign/merchant"
              >
                Join as Merchant
              </Button>
              <Button
                variant="contained"
                className={styles.navBarBtn}
                component={Link}
                to="/sign/user"
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
