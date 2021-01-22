import React from "react";
import styles from "./CustomTab.module.scss";

import { Tabs, Tab } from "@material-ui/core";

const CustomTab = ({ tabIndex, handleChange, tabs }) => {
  return (
    <div>
      <Tabs
        indicatorColor="primary"
        value={tabIndex}
        onChange={handleChange}
        textColor="primary"
        variant="fullWidth"
        className={styles.tabs}
      >
        {tabs.map((tab) => (
          <Tab label={tab} />
        ))}
      </Tabs>
    </div>
  );
};

export default CustomTab;
