import React from "react";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";

import styles from "./Review.module.scss";

const daysName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function operatingHoursDestructure(operatingHours) {
  //structure of operatingHoursArr:
  //top level of array index corresponds to day, monday = 0, sunday = 6
  //under each day is another array, which stores the row number of the field in which this day's opening time was specified, if any
  //For example, if the user's fields are: Monday 9am 10pm (field 0), Wednesday 3am 4am (field 1), Tuesday 4am 5am (field 2)
  //Then the output array:
  //[[{index: 0, opening: 9am, closing: 10pm}], [{}, {}, {index: 2, opening: 4am, closing: 5am}], [{}, {index: 1, opening: 3am, closing: 4am}]]
  //Empty objects are placed inside the inner array to ensure that the field's index corresponds to an empty object
  let operatingHoursArr = [];

  Object.keys(operatingHours).forEach((key) => {
    //params = [dayx, 1, closing/opening]
    const params = _.split(key, "_");
    const [fieldNum, dayNum, closing_opening] = params;
    const dayNumber = Number(dayNum);
    const dayName = daysName[dayNum];

    while(operatingHoursArr.length <= Number(dayNum))
      operatingHoursArr.push({});

    //Opening/closing time key
    if (params.length === 3) {

      if (operatingHoursArr[dayNumber][fieldNum] === undefined) {
        operatingHoursArr[dayNumber][fieldNum] = { opening: "", closing: "" };
      }

      //Find the field that corresponds to the current item's field
      operatingHoursArr[dayNumber][fieldNum][closing_opening] = operatingHours[key];
    }
  })

  console.log(operatingHoursArr);
  return operatingHoursArr;
}

export default function Review(props) {
  const { merchantInfo, operatingHours } = props;
  let operatingHoursArr = operatingHoursDestructure(operatingHours);
  return (
    <div className={styles.informationDiv}>
      {Object.keys(merchantInfo).map((key, index) => {
        return (
          <Typography key={index}>
            {key}: {merchantInfo[key]}
          </Typography>
        );
      })}
      <Typography>Operating Hours</Typography>
      {/* {operatingHoursArr.map((item, index) => {
        return (
          <div key={index}>
            {item.length > 0 && <Typography>{daysName[index]}</Typography>}
            {item.map((subItem, subIndex) => {
              if (subItem.index !== undefined) {
                return (
                  <>
                    <Typography key={subIndex}>
                      {subItem.Opening} - {subItem.Closing}
                    </Typography>
                  </>
                );
              }
            })}
          </div>
        );
      })} */}
    </div>
  );
}
