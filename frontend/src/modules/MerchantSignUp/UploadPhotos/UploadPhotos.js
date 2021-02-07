import React from "react";

import Button from "@material-ui/core/Button";
import styles from "./UploadPhotos.module.scss";
import { mobileThreshold } from "../DesktopStepper/DesktopStepper";

import ImageSummarySection from "../../../common/modules/ImageSummarySection/ImageSummarySection";

const maxNumberOfImages = 4;

export default function UploadPhotos(props) {
  const { imageArr, setImageArr } = props;

  function onUpload(event) {
    setImageArr(prevVal => {
      const newImageArr = [...prevVal];
      Array.from(event.target.files).forEach(item => {
        if (newImageArr.length < maxNumberOfImages)
          newImageArr.push(URL.createObjectURL(item))
      })
      console.log(newImageArr);
      return newImageArr;
    })

  }

  return (
    <div>
      <div className={`${styles.imagesDiv} ${props.width <= mobileThreshold ? styles.mobileImagesDiv : undefined}`}>
        <ImageSummarySection images={imageArr} />
      </div>
      <Button variant="contained" component="label" className={styles.uploadButton} disabled={imageArr.length >= maxNumberOfImages}>
        Add Photos
        <input hidden type="file" multiple={true} accept="image/*" onChange={onUpload}></input>
      </Button>
    </div>
  );
}
