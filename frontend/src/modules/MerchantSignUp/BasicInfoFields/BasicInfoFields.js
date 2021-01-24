import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomTextField from "../../../common/modules/CustomTextField/CustomTextField";

import styles from "./BasicInfoFields.module.scss";

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
            <Grid item key={index} className={styles.inputGridItem} xs={12} md={item.width === "full" ? 12 : 6}>
              <CustomTextField
                label={item.label}
                type={item.type}
                id={item.label}
                onChange={changeHandler}
                value={merchantInfo[item.label] || ""}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
