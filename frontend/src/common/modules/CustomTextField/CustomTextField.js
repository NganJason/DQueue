import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./CustomTextField.module.scss";

export default function CustomTextField({value, id, label, type, onChange, disabled, error, helperText, name, required, fullWidth}) {
  return (
    <TextField
    value={value}
    id={id}
    label={label}
    type={type}
    onChange={onChange}
    disabled={disabled}
    error={error}
    fullWidth={fullWidth}
    name={name}
    helperText={helperText}
    required={required}
    
    //Style properties
    variant="outlined"
    className={styles.inputField}
    InputLabelProps={{
        classes: {
        root: styles.labelRoot,
        focused: styles.labelFocusedColor,
        disabled: styles.inputLabelDisabled
        },
    }}
    InputProps={{
        classes: {
        root: styles.inputRoot,
        focused: styles.fieldFocusedColor,
        notchedOutline: styles.notchedOutline,
        disabled: styles.inputDisabled
        },
    }}
    />
  );
}