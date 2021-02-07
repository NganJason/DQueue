import React from "react";
import styles from "./CustomTab.module.scss";

import { Tabs, Tab } from "@material-ui/core";

const CustomTab = ({ tabIndex, handleChange, tabs }) => {
  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="fullWidth"
        className={styles.tabs}
        classes={{root: styles.tabsRoot, indicator: styles.tabsIndicator}}
      >
        {tabs.map((tab, index) => (
          <Tab label={tab} key={index} className={styles.tabStyle} classes={{root: styles.singleTabRoot, wrapper: styles.singleTabWrapper}}/>
        ))}
      </Tabs>
    </>
  );
};

export default CustomTab;
