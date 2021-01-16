import React from "react";
import styles from "./MerchantSignUp.module.scss";
import { useWindowDimensions } from "../../common/utils";

import DesktopStepper from "./DesktopStepper/DesktopStepper";

export default function MerchantSignUp() {
  //Get width for determining whether to use mobile or desktop stepper for signup page
  const { width } = useWindowDimensions();

  const [merchantInfo, setMerchantInfo] = React.useState({});
  const [operatingHours, setOperatingHours] = React.useState({});
  const [dayFields, setDayFields] = React.useState(1);
  const [imageArr, setImageArr] = React.useState([]);

  return (
    <>
      <DesktopStepper
        width={width}
        merchantInfo={merchantInfo}
        setMerchantInfo={setMerchantInfo}
        operatingHours={operatingHours}
        setOperatingHours={setOperatingHours}
        dayFields={dayFields}
        setDayFields={setDayFields}
        imageArr={imageArr}
        setImageArr={setImageArr}
      />
    </>
  );
}
