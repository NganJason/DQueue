import React from "react";
import styles from "./CustomTab.module.scss";
import { Link } from "react-router-dom";

import { Tabs, Tab } from "@material-ui/core";

const CustomTab = ({ tabIndex, handleChange, tabs }) => {
  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="fullWidth"
        className={styles.tabs}
        classes={{ root: styles.tabsRoot, indicator: styles.tabsIndicator }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            className={styles.tabStyle}
            classes={{
              root: styles.singleTabRoot,
              wrapper: styles.singleTabWrapper
            }}
            component={Link}
            to={index == 0 ? "/sign/in" : "/sign/up"}
          />
        ))}
      </Tabs>
    </>
  );
};

export default CustomTab;
