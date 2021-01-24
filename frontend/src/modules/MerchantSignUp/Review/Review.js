import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from "./Review.module.scss";
import { daysArr as daysName, timeValToText } from "../OpeningHours/DaysAndTimes";

function sortOperatingHours(operatingHours){
  const sortedOperatingHours = [...operatingHours];
  sortedOperatingHours.sort((a, b) => {
    return a.day - b.day || a.opening - b.opening;
  });
  
  const dayIndexedOperatingHours = [];
  dayIndexedOperatingHours.length = 7;
  
  sortedOperatingHours.forEach(item => {
    if(dayIndexedOperatingHours[item.day] === undefined)
      dayIndexedOperatingHours[item.day] = [{opening: item.opening, closing: item.closing}];
    
    else
      dayIndexedOperatingHours[item.day].push({opening: item.opening, closing: item.closing});
  })
  
  return dayIndexedOperatingHours;
}

export default function Review(props) {
  const { merchantInfo, operatingHours } = props;
  let operatingHoursArr = sortOperatingHours(operatingHours);

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
                <TableRow key={index}>
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
            {operatingHoursArr.map((day, index) => {
              if (Object.keys(day).length === 0)
                return (<></>)

              return (
                <TableRow key={index}>
                  <TableCell>{daysName[index]}</TableCell>
                  <TableCell>
                    {day.map((time, subIndex) => {
                      return (
                        <div key={subIndex}>
                          {timeValToText(time.opening)} - {timeValToText(time.closing)}
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