import React from "react";
import styles from "./CustomTextField.module.scss";

import { TextField } from "@material-ui/core";

const CustomTextField = ({ attr, changeHandler, value }) => {
  return (
    <>
      <TextField
        className={styles.formInput}
        id={attr.label}
        label={attr.label || ""}
        type={attr.type || ""}
        variant="outlined"
        InputProps={attr.InputProps || ""}
        onChange={changeHandler(attr.label)}
        value={value[attr.label]}
      />
    </>
  );
};

export default CustomTextField;
