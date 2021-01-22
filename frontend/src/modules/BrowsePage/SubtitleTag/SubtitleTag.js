import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./SubtitleTag.module.scss";

const SubtitleTag = ({ subtitle, header }) => {
  return (
    <Typography variant={header} className={styles.subtitleTag}>
      {subtitle}
    </Typography>
  );
};

export default SubtitleTag;
