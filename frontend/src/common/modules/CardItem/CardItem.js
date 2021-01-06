import React from "react";
import "./CardItem.scss";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

export default function CardItem(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card>
        <CardActionArea>
          {props.image && (
            <CardMedia
              className="card-image"
              component="img"
              image={props.image}
            ></CardMedia>
          )}
          <CardContent>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="body2">{props.description}</Typography>
          </CardContent>
        </CardActionArea>
        {(props.queue || props.info) && (
          <CardActions>
            {props.queue && <Button>Queue</Button>}
            {props.info && <Button>More info</Button>}
          </CardActions>
        )}
      </Card>
    </Grid>
  );
}
