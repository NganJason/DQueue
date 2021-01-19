import React from "react";

import styles from "./StepperBar.module.scss";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

export default function StepperBar(props) {
    const { activeStep, stepContent } = props;
    return (
        <div className={styles.formDiv}>
            <div className={styles.formDiv2}>
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
            </div>
        </div>
    )
}