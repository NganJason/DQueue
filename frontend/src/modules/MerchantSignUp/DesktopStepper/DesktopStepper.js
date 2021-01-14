import React from "react";

import styles from "./DesktopStepper.module.scss";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import BasicInfoFields from "../BasicInfoFields/BasicInfoFields";
import OpeningHours from "../OpeningHours/OpeningHours";
import UploadPhotos from "../UploadPhotos/UploadPhotos";
import Review from "../Review/Review";

export default function DesktopStepper(props) {
  const { merchantInfo, setMerchantInfo, operatingHours, setOperatingHours, dayFields, setDayFields } = props;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = ["Basic Information", "Opening Hours", "Upload Photos", "Review"];

  const descriptions = [
    "Tell us more about your restaurant!",
    "Your customers hate bad surprises! Let them know when they can visit",
    "Show your customers how good your place looks",
    "Make sure everything is correct!",
  ];
  const generateFields = [
    <BasicInfoFields merchantInfo={merchantInfo} setMerchantInfo={setMerchantInfo} />,
    <OpeningHours operatingHours={operatingHours} setOperatingHours={setOperatingHours} dayFields={dayFields} setDayFields={setDayFields} />,
    <UploadPhotos />,
    <Review merchantInfo={merchantInfo} operatingHours={operatingHours}/>,
  ];

  function getStepContent(step) {
    if (step >= steps.length) return { title: "Unkown Step", description: "How did you get here?" };
    else return { title: steps[step], description: descriptions[step], fields: generateFields[step] };
  }

  return (
    <div className={styles.formDiv}>
      <Paper className={styles.formPaper}>
        <Stepper activeStep={activeStep} alternativeLabel className={styles.stepper}>
          {steps.map((label) => {
            return (
              <Step key={label}>
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
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            //All steps completed
            <div>
              <Typography className={styles.instructions}>All steps completed - you&apos;re finished</Typography>
            </div>
          ) : (
            <>
              <div>
                <Typography variant="h5">{getStepContent(activeStep).title}</Typography>
                <Typography variant="body1">{getStepContent(activeStep).description}</Typography>
              </div>
              {getStepContent(activeStep).fields}
              <div>
                <Button variant="contained" disabled={activeStep === 0} onClick={handleBack} className={styles.button}>
                  Back
                </Button>
                <Button variant="contained" onClick={handleNext} className={styles.button}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </>
          )}
        </div>
      </Paper>
    </div>
  );
}
