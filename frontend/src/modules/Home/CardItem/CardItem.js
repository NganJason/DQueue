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
} from "@material-ui/core";

export default function CardItem(props) {
  return (
    <div className="card-item">
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
    </div>
  );
}
