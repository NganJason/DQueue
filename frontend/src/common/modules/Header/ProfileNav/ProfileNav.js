import { useHistory, Link } from "react-router-dom";
import React, { useState } from "react";

import ApiService from "../../../services/api.service";
import { setLogOut } from "../../../../actions/authActions";
import styles from "./ProfileNav.module.scss";

import { AccountCircle } from "@material-ui/icons";
import { Button, Menu, MenuItem } from "@material-ui/core";

const ProfileNav = ({ username }) => {
  let history = useHistory();
  const [anchorEle, setAnchorEle] = useState(null);

  const handleClick = (event) => {
    setAnchorEle(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEle(null);
  };

  const handleLogOut = () => {
    setAnchorEle(null);
    setLogOut();
    ApiService.get("/user/logout");
    history.push("/");
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        disableRipple="true"
        className={styles.profileContainer}
      >
        <AccountCircle classes={{ root: styles.iconRoot }} />
        {username}
      </Button>
      <Menu
        anchorEl={anchorEle}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handleClose}
        open={Boolean(anchorEle)}
        classes={{ paper: styles.menu }}
      >
        <Link to="/user/profile" className={styles.navLink}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileNav;
