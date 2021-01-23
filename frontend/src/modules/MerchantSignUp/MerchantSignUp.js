import React from "react";
import styles from "./MerchantSignUp.module.scss";
import { useWindowDimensions } from "../../common/utils";

import DesktopStepper from "./DesktopStepper/DesktopStepper";
import BasicInfoFields from "./BasicInfoFields/BasicInfoFields";
import OpeningHours from "./OpeningHours/OpeningHours";
import UploadPhotos from "./UploadPhotos/UploadPhotos";
import Review from "./Review/Review";
import { generateStepContent } from "../MerchantSignUp/DesktopStepper/StepContent";

export default function MerchantSignUp() {
  //Get width for determining whether to use mobile or desktop stepper for signup page
  const { width } = useWindowDimensions();
  const [merchantInfo, setMerchantInfo] = React.useState({});
  const [operatingHours, setOperatingHours] = React.useState([]);
  const [dayFields, setDayFields] = React.useState(1);
  const [imageArr, setImageArr] = React.useState([]);

  const stepContent = [
    generateStepContent("Basic Information", "Tell us more about your restaurant!", <BasicInfoFields merchantInfo={merchantInfo} setMerchantInfo={setMerchantInfo} />),
    generateStepContent(
      "Opening Hours",
      "Your customers hate bad surprises! Let them know when they can visit",
      <OpeningHours operatingHours={operatingHours} setOperatingHours={setOperatingHours} dayFields={dayFields} setDayFields={setDayFields} />),
    generateStepContent("Upload Photos", "Show your customers how good your place looks", <UploadPhotos imageArr={imageArr} setImageArr={setImageArr} width={width} />),
    generateStepContent("Review", "Make sure everything is correct!", <Review merchantInfo={merchantInfo} operatingHours={operatingHours} />)
  ];

  return (
    <>
      <DesktopStepper stepContent={stepContent} width={width} />
    </>
  );
}
