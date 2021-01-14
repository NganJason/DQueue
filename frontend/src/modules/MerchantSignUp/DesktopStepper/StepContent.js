import React from "react";

import BasicInfoFields from "../BasicInfoFields/BasicInfoFields";
import OpeningHours from "../OpeningHours/OpeningHours";
import UploadPhotos from "../UploadPhotos/UploadPhotos";
import Review from "../Review/Review";

function generateStepContent(title, description, fields) {
    return { title: title, description: description, fields: fields };
}

export function getStepContent(props) {
    const { merchantInfo, setMerchantInfo, operatingHours, setOperatingHours, dayFields, setDayFields } = props;
    const stepContent = [
        generateStepContent("Basic Information", "Tell us more about your restaurant!", <BasicInfoFields merchantInfo={merchantInfo} setMerchantInfo={setMerchantInfo} />),
        generateStepContent(
            "Opening Hours",
            "Your customers hate bad surprises! Let them know when they can visit",
            <OpeningHours operatingHours={operatingHours} setOperatingHours={setOperatingHours} dayFields={dayFields} setDayFields={setDayFields} />),
        generateStepContent("Upload Photos", "Show your customers how good your place looks", <UploadPhotos />),
        generateStepContent("Review", "Make sure everything is correct!", <Review merchantInfo={merchantInfo} operatingHours={operatingHours} />)
    ];

    return stepContent;
}