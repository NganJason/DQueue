import React, { useEffect } from "react";
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

  //Function to verify all filled in operating hours
  const verifier = () => {
    const errorFields = [];

    //i == each day
    for (let i = 0; i < 7; ++i) {
      //Extract fields with same day
      const day = operatingHours.reduce((filtered, operatingHour, index) => {
        if (operatingHour.day === i) {
          //Each field's closing - opening > 0 and not empty, else error
          if (operatingHour.closing - operatingHour.opening <= 0 || operatingHour.closing === "" || operatingHour.opening === "")
            !errorFields.includes(index) && errorFields.push(index);


          const newOperatingHour = { ...operatingHour, index: index };
          filtered.push(newOperatingHour);
        }

        else if (operatingHour.day === "")
          !errorFields.includes(index) && errorFields.push(index);

        return filtered;
      }, []);

      //Sort all by opening time
      const sortedDay = [...day];
      sortedDay.sort((a, b) => {
        return a.opening - b.opening;
      });

      //If previous closing > current opening, set both fields error
      for (let j = 0; j < sortedDay.length - 1; ++j) {
        if (sortedDay[j].closing - sortedDay[j + 1].opening > 0) {
          !errorFields.includes(sortedDay[j].index) && errorFields.push(sortedDay[j].index);
          !errorFields.includes(sortedDay[j + 1].index) && errorFields.push(sortedDay[j + 1].index);
        }
      }
    }

    setErrorFields(errorFields);
    return errorFields.length === 0;
  }

  useSetStepVerifier(verifier, setVerifier, [operatingHours]);


  const clickHandler = () =>{
    setOperatingHours(prevVal => {
      const newVal = [...prevVal];
      newVal.push({ day: "", opening: "", closing: "" });
      return newVal;
    })
  }

  //Add first field if empty
  useEffect(() => {
    if (operatingHours.length === 0)
      clickHandler();
  }, []);

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
