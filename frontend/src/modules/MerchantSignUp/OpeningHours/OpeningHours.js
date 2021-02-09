import React from "react";
import { times, days } from "./DaysAndTimes";

import styles from "./OpeningHours.module.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useSetStepVerifier } from "../UseSetStepVerifier.js";

function EmptyComponent() {
  return <></>;
}

function SelectField(props) {
  return (
    <>
      <Grid item xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} className={styles.selectFieldGridItem}>
        <FormControl variant="outlined" className={styles.textField}>
          <TextField
            fullWidth
            variant="outlined"
            select
            error={props.error}
            value={props.value}
            label={props.label}
            SelectProps={{
              IconComponent: EmptyComponent,
              classes: { root: styles.selectRoot, outlined: styles.selectOutlined, select: styles.select },
            }}
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
          >
            {props.options.map((item, index) => {
              return (
                <MenuItem key={index} value={item.value}>
                  {item.text}
                </MenuItem>
              );
            })}
          </TextField>
        </FormControl>
      </Grid>
    </>
  );
}

function DayTimeField(props) {
  const { operatingHours, setOperatingHours, error } = props;

  function handleChange(index, fieldType) {
    return (event) => {
      setOperatingHours(prevVal => {
        const newVal = [...prevVal];
        newVal[index][fieldType] = event.target.value;
        return newVal;
      })
    }
  }

  return (
    <>
      <Grid container justify="center" className={styles.dayTimeField}>
        <SelectField
          xs={4}
          md={3}
          changeHandler={handleChange(props.index, "day")}
          value={operatingHours[props.index] === undefined ? "" : operatingHours[props.index]["day"]}
          options={days}
          error={error}
          label="Day"
        />
        <SelectField
          xs={3}
          md={2}
          changeHandler={handleChange(props.index, "opening")}
          value={operatingHours[props.index] === undefined ? "" : operatingHours[props.index]["opening"]}
          options={times}
          error={error}
          label="Open"
        />
        <SelectField
          xs={3}
          md={2}
          changeHandler={handleChange(props.index, "closing")}
          value={operatingHours[props.index] === undefined ? "" : operatingHours[props.index]["closing"]}
          options={times}
          error={error}
          label="Close"
        />
      </Grid>
    </>
  );
}

export default function OpeningHours(props) {
  const { operatingHours, setOperatingHours, setVerifier } = props;
  const [errorFields, setErrorFields] = React.useState([]);

  /* Setup form verifier */
  const verifier = React.useCallback(() => {
    const errorFields = [];

    const indexedHours = operatingHours.map((item, index) => {
      return {...item, index:index};
    })

    indexedHours.sort((a,b) => {
        return a.day - b.day || a.opening - b.opening;
    })

    for(let i = 0; i < indexedHours.length; ++i){
      //Row specific validation, if current row's closing is < opening, set error
      if(indexedHours[i].closing - indexedHours[i].opening <= 0 || indexedHours[i].opening === "" || indexedHours[i].closing === "")
        !errorFields.includes(indexedHours[i].index) && errorFields.push(indexedHours[i].index);

      if(i + 1 < indexedHours.length && indexedHours[i].day === indexedHours[i+1].day)
      {
        //If previous closing > current opening, set both fields error
        if(indexedHours[i].closing - indexedHours[i + 1].opening > 0)
        {
          !errorFields.includes(indexedHours[i].index) && errorFields.push(indexedHours[i].index);
          !errorFields.includes(indexedHours[i + 1].index) && errorFields.push(indexedHours[i + 1].index); 
        }
      }
    }

    setErrorFields(errorFields);
    return errorFields.length === 0;
  }, [operatingHours]);

  useSetStepVerifier(verifier, setVerifier);

  /* Setup form initial state and click handler */
  const clickHandler = React.useCallback(() =>{
    setOperatingHours(prevVal => {
      const newVal = [...prevVal];
      newVal.push({ day: "", opening: "", closing: "" });
      return newVal;
    })
  }, [setOperatingHours]);

  //Add first field if empty
  React.useEffect(() => {
    if (operatingHours.length === 0)
      clickHandler();
  }, [clickHandler, operatingHours.length]);

  return (
    <div>
      {operatingHours.map((item, index) => {
        return (
          <DayTimeField
            index={index} key={index}
            operatingHours={operatingHours}
            setOperatingHours={setOperatingHours}
            error={errorFields.includes(index)}
          />
        );
      })}
      <Button variant="outlined" onClick={clickHandler}>
        Add Day
      </Button>
    </div>
  );
}
