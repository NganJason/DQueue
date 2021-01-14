import React from "react";
import { times, days } from "./DaysAndTimes";

import styles from "./OpeningHours.module.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
            id={props.id}
            value={props.value}
            label={props.label}
            name={props.name}
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
  const { operatingHours, setOperatingHours } = props;

  //Should do an array of objects instead with deep copy
  function handleChange(event) {
    setOperatingHours((prevVal) => {
      const newItem = { ...prevVal };
      newItem[event.target.name] = event.target.value;
      
      console.log(newItem);
      return newItem;
    });
  }

  return (
    <>
      <Grid container justify="center" className={styles.dayTimeField}>
        <SelectField
          xs={4}
          md={3}
          changeHandler={handleChange}
          name={`day${props.name}`}
          value={operatingHours[`day${props.name}`] >= 0 ? operatingHours[`day${props.name}`] : ""}
          options={days}
          label="Day"
        />
        <SelectField
          xs={3}
          md={2}
          changeHandler={handleChange}
          name={`day${props.name}Opening`}
          value={operatingHours[`day${props.name}Opening`] ? operatingHours[`day${props.name}Opening`] : ""}
          options={times}
          label="Open"
        />
        <SelectField
          xs={3}
          md={2}
          changeHandler={handleChange}
          name={`day${props.name}Closing`}
          value={operatingHours[`day${props.name}Closing`] ? operatingHours[`day${props.name}Closing`] : ""}
          options={times}
          label="Close"
        />
      </Grid>
    </>
  );
}

export default function OpeningHours(props) {
  const { dayFields, setDayFields, operatingHours, setOperatingHours } = props;
  const fields = new Array(dayFields).fill(0);

  function clickHandler() {
    setDayFields((prevDays) => {
      return prevDays + 1;
    });
  }

  return (
    <div>
      {fields.map((item, index) => {
        return <DayTimeField name={index} key={index} operatingHours={operatingHours} setOperatingHours={setOperatingHours} />;
      })}
      <Button variant="outlined" onClick={clickHandler}>
        Add Day
      </Button>
    </div>
  );
}
