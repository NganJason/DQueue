import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomTextField from "../../../common/modules/CustomTextField/CustomTextField";

import styles from "./BasicInfoFields.module.scss";
import { fieldProps } from "./FieldProperties.js";
import { validateEmail } from "../../../common/utils.js";
import { useSetStepVerifier } from "../UseSetStepVerifier.js";

export default function BasicInfoFields(props) {
  const { merchantInfo, setMerchantInfo, setVerifier } = props;
  const [fieldPropsState, setFieldProps] = React.useState(fieldProps);
  
  /* Setup form verifier */
  const verifier = React.useCallback(() => {
    let allValid = true;
    
    //Inefficient deep copy of old object
    const newFieldPropsState = JSON.parse(JSON.stringify(fieldProps));
    Object.keys(newFieldPropsState).forEach(key => {
      //If field is required, check if merchant info already has the field filled in
      if (newFieldPropsState[key].required) {
        if (merchantInfo[key] === undefined || merchantInfo[key].length === 0) {
          newFieldPropsState[key].error = true;
          allValid = false;
        }
        
        //If filled in but field is email, check that the field is a valid email
        else if (newFieldPropsState[key].type === "email") {
          if (!validateEmail(merchantInfo[key])) {
            newFieldPropsState[key].error = true;
            allValid = false;
          }
        }
      }
    })
    
    setFieldProps(newFieldPropsState);
    return allValid;
  }, [merchantInfo]);

  useSetStepVerifier(verifier, setVerifier);
  
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
        {Object.keys(fieldPropsState).map((item, index) => {
          return (
            <Grid item key={index} className={styles.inputGridItem} xs={12} md={fieldPropsState[item].width === "full" ? 12 : 6}>
              <CustomTextField
                label={item}
                type={fieldPropsState[item].type}
                id={item}
                onChange={changeHandler}
                error={fieldPropsState[item].error}
                value={merchantInfo[item] || ""}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
