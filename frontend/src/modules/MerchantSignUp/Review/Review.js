import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import _ from "lodash";

import styles from "./Review.module.scss";
import { daysArr as daysName, timeValToText } from "../OpeningHours/DaysAndTimes";

function operatingHoursDestructure(operatingHours) {
  //structure of operatingHoursArr:
  //top level of array index corresponds to day, monday = 0, sunday = 6
  //under each day is an object, which stores an object for each field that has opening and closing times filled. inside each object is the opening and closing time
  //For example, if the user's fields are: Monday 9am 10pm (day0), Wednesday 3am 4am (day1), Tuesday 4am 5am (day2)
  //Then the output array:
  //[{day0: {opening: 9am, closing: 10pm}}, {day2: {opening: 4am, closing 5am}}, {day1: {opening: 3am, closing: 4am}}]
  //Empty objects are placed inside the inner array to ensure that the field's index corresponds to an empty object
  let operatingHoursArr = [];

  Object.keys(operatingHours).forEach((key) => {
    const params = _.split(key, "_");
    const [fieldNum, dayNum, closing_opening] = params;
    const dayNumber = Number(dayNum);

    while (operatingHoursArr.length <= Number(dayNum))
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

  return operatingHoursArr;
}

export default function Review(props) {
  const { merchantInfo, operatingHours } = props;
  let operatingHoursArr = operatingHoursDestructure(operatingHours);
  return (
    <div className={styles.informationDiv}>
      <Paper variant="outlined" elevation={0} className={styles.infoTablePaper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><div className={styles.tableTitle}>Information</div></TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(merchantInfo).map((key, index) => {
              return (
                <TableRow>
                  <TableCell>{key}:</TableCell>
                  <TableCell>{merchantInfo[key]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <Paper variant="outlined" elevation={0} className={styles.infoTablePaper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><div className={styles.tableTitle}>Operating Hours</div></TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {operatingHoursArr.map((item, index) => {
              if (Object.keys(item).length === 0)
                return (<></>)
              return (
                <TableRow key={index}>
                  <TableCell>{daysName[index]}</TableCell>
                  <TableCell>
                    {Object.keys(item).map((key, subIndex) => {
                      return (
                        <div key={subIndex}>
                          {timeValToText(item[key].opening)} - {timeValToText(item[key].closing)}
                        </div>
                      );
                    })}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}