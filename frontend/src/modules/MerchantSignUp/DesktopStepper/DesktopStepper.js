import React from "react";

import styles from "./DesktopStepper.module.scss";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { getStepContent } from "./StepContent";

export const mobileThreshold = 700;

export default function DesktopStepper(props) {
  const stepContent = getStepContent(props);
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
        <Stepper activeStep={activeStep} alternativeLabel className={styles.stepper}>
          {stepContent.map((item) => {
            return (
              <Step key={item.title}>
                <StepLabel
                  StepIconProps={{
                    classes: {
                      root: styles.stepIconInactive,
                      active: styles.stepIconActive,
                      completed: styles.stepIconCompleted,
                      text: styles.stepIconText,
                    },
                  }}
                >
                  {item.title}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === stepContent.length ? (
            //All steps completed
            <div>
              <Typography className={styles.instructions}>All steps completed - you&apos;re finished</Typography>
            </div>
          ) : (
              <>
                <div>
                  <br/>
                  <Typography variant="h5">{stepContent[activeStep].title}</Typography>
                  <Typography variant="body1">{stepContent[activeStep].description}</Typography>
                  <br/>
                </div>
                {stepContent[activeStep].fields}
                <div>
                  <Button variant="contained" disabled={activeStep === 0} onClick={handleBack} className={`${styles.button} ${props.width <= mobileThreshold && styles.mobileButton}`}>
                    Back
                </Button>
                  <Button variant="contained" onClick={handleNext} className={`${styles.button} ${props.width <= mobileThreshold && styles.mobileButton}`}>
                    {activeStep === stepContent.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </>
            )}
        </div>
      </Paper>
    </div>
  );
}
