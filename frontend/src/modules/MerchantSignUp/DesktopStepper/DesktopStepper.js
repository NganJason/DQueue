import React from "react";

import styles from "./DesktopStepper.module.scss";

import Paper from "@material-ui/core/Paper";
import StepperBar from "../../../common/modules/StepperBar/StepperBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const mobileThreshold = 700;

export default function DesktopStepper(props) {
  const { stepContent } = props;
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep < stepContent.length - 1)
        return prevActiveStep + 1;

      else
        return prevActiveStep;
    });
  };

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={styles.formDiv}>
      <Paper
        className={`${styles.formPaper} ${props.width <= mobileThreshold && styles.mobileFormPaper}`}
        elevation={props.width <= 700 ? 0 : undefined}
      >
        <StepperBar activeStep={activeStep} stepContent={stepContent} />
        <br />
        <Typography variant="h5">{stepContent[activeStep].title}</Typography>
        <Typography variant="body1">{stepContent[activeStep].description}</Typography>
        <br />
        {stepContent[activeStep].fields}
        <Button variant="contained" disabled={activeStep === 0} onClick={handleBack} className={`${styles.button} ${props.width <= mobileThreshold && styles.mobileButton}`}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} className={`${styles.button} ${props.width <= mobileThreshold && styles.mobileButton}`}>
          {activeStep === stepContent.length - 1 ? "Finish" : "Next"}
        </Button>
      </Paper>
    </div>
  );
}
