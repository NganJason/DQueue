import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import styles from "./BasicInfoFields.module.scss";

function CustomTextField(props) {
  return (
    <Grid item className={styles.inputGridItem} xs={props.width === "full" ? 12 : 12} md={props.width === "full" ? 12 : 6}>
      <TextField
        value={props.merchantInfo[props.id] ? props.merchantInfo[props.id] : ""}
        className={styles.inputField}
        id={props.id}
        variant="outlined"
        label={props.label}
        onChange={props.changeHandler}
        InputLabelProps={{
          classes: {
            root: styles.labelRoot,
            focused: styles.labelFocusedColor,
          },
        }}
        InputProps={{
          classes: {
            root: styles.inputRoot,
            focused: styles.fieldFocusedColor,
            notchedOutline: styles.notchedOutline,
          },
        }}
      />
    </Grid>
  );
}

function generateFieldProps(label, width) {
  return { label: label, width: width };
}

const fieldProps = [
  generateFieldProps("Restaurant Name", "full"),
  generateFieldProps("Address Line 1", "full"),
  generateFieldProps("Address Line 2", "full"),
  generateFieldProps("City", "half"),
  generateFieldProps("State", "half"),
  generateFieldProps("Country", "half"),
  generateFieldProps("Post Code", "half"),
  generateFieldProps("Contact Number", "full"),
  generateFieldProps("Email", "full"),
];

export default function BasicInfoFields(props) {
  const { merchantInfo, setMerchantInfo } = props;
  function changeHandler(event) {
    setMerchantInfo((prevVal) => {
      const newItem = { ...prevVal };
      newItem[event.target.id] = event.target.value;

      return newItem;
    });
  }

  return (
    <div className={styles.basicInfoDiv}>
      <Grid container>
        {fieldProps.map((item, index) => {
          return (
            <CustomTextField
              key={index}
              label={item.label}
              width={item.width}
              id={item.label}
              merchantInfo={merchantInfo}
              setMerchantInfo={setMerchantInfo}
              changeHandler={changeHandler}
            />
          );
        })}
      </Grid>
    </div>
  );
}
