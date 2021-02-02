import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./SubtitleTag.module.scss";

const SubtitleTag = ({ subtitle }) => {
  return (
    <Typography variant="h5" className={styles.subtitleTag}>
      {subtitle}
    </Typography>
  );
};

export default SubtitleTag;
