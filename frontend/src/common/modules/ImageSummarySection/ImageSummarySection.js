import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import styles from "./ImageSummarySection.module.scss";

function ImageRow(props) {
  return (
    <div className={styles.imagesRowContainer}>
      <Grid container className={styles.imageRow}>
        {props.images.map((image, index) => {
          if(index >= props.maxNum)
            return undefined;
          return (
            <Grid item xs key={index} className={styles.imageGridItem}>
              <Card elevation={index == props.currTitleImage ? 8 : undefined}>
                <CardActionArea onClick={props.onImageClick} className={index == props.currTitleImage ? styles.selectedImage : undefined}>
                  <CardMedia image={image} component="img" id={index} />
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

function TitleImage(props) {
  return (
    <div className={styles.imagesContainer}>
      <Card elevation={4}>
        <CardActionArea className={styles.titleImageActionArea}>
          <CardMedia image={props.image} component="img" />
        </CardActionArea>
      </Card>
    </div>
  );
}

export default function ImageSummarySection(props) {
  const [currTitleImage, setCurrTitleImage] = React.useState(0);
  function onImageClick(event) {
    setCurrTitleImage(event.target.id);
  }
  const {images} = props;
  return (
    <>
      <TitleImage image={images[currTitleImage]} />
      <ImageRow images={images} currTitleImage={currTitleImage} onImageClick={onImageClick} maxNum={props.maxNum}/>
    </>
  )
}