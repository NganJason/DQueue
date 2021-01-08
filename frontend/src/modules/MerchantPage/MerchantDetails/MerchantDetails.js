import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  CardMedia,
  CardActionArea,
  Card,
} from "@material-ui/core";
import styles from "./MerchantDetails.module.scss";

function ImageRow(props) {
  return (
    <div className={styles.imagesRowContainer}>
      <Grid container spacing={3} className={styles.imageRow}>
        {props.images.map((image, index) => {
          if (index === 0) return <></>;
          return (
            <Grid item xs key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia image={image} component="img" />
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
      <Card>
        <CardActionArea>
          <CardMedia image={props.image} component="img" />
        </CardActionArea>
      </Card>
    </div>
  );
}

function MerchantDescription(props) {
  return (
    <div className={styles.merchantDescContainer}>
      <Typography variant="h4">{props.merchantName}</Typography>
      <Typography className={styles.descField} variant="body1">
        Location: {props.info.location}
      </Typography>
      <Typography className={styles.descField} variant="body1">
        Phone: {props.info.phone}
      </Typography>
      <Typography className={styles.descField} variant="body1">
        Current Serving Number: {props.info.currentNumber}
      </Typography>
      <Typography className={styles.descField} variant="body1">
        Average Waiting time: {props.info.averageWaiting} minutes
      </Typography>
      <Button className={styles.queueBtn} variant="contained">
        Queue
      </Button>
    </div>
  );
}

export default function MerchantDetails(props) {
  return (
    <div>
      <Paper className={styles.merchantPaper}>
        <Grid container justify="flex-start">
          <Grid item sm={12} md={6}>
            <TitleImage image={props.images[0]} />
            <ImageRow images={props.images} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MerchantDescription
              info={props.info}
              merchantName={props.merchantName}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
