import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import styles from "./BasicInfoFields.module.scss";

function CustomTextField(props) {
  return (
    <Grid item className={styles.inputGridItem} xs={12} md={props.width === "full" ? 12 : 6}>
      <TextField
        value={props.merchantInfo[props.id] || ""}
        className={styles.inputField}
        id={props.id}
        variant="outlined"
        label={props.label}
        onChange={props.changeHandler}
        type={props.type}
        classes={props.type === "number" ? {input: styles.numberInput} : {}}
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

function generateFieldProps(label, width, type) {
  return { label, width, type };
}

const fieldPropsPair = {
  "Restaurant Name": ["full", "text"],
  "Address Line 1": ["full", "text"],
  "Address Line 2": ["full", "text"],
  "City": ["half", "text"],
  "State": ["half", "text"],
  "Country": ["half", "text"],
  "Post Code": ["half", "number"],
  "Contact Number": ["full", "number"],
  "Email": ["full", "email"]
}

const fieldProps = Object.keys(fieldPropsPair).map(key => generateFieldProps(key, fieldPropsPair[key][0], fieldPropsPair[key][1]));

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
              type={item.type}
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
