import { useState } from "react";
import { styled } from '@mui/material/styles';
import {
  CardHeader, CardMedia, CardContent, CardActions, Collapse,
  Avatar, IconButton, Typography
} from '@mui/material';
import { Favorite, ExpandMore, Share, MoreVert } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { PaperCSS, CardCSS } from "./book.styles.js";

const Expand = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const BookCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <PaperCSS elevation={20}>
      {data.map(({ id, title, year, genre, name, status, link }) =>
          <CardCSS key={id}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  <Link to={link}/>
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert/>
                </IconButton>
              }
              title={`${title}, ${name}`}
              subheader={`${year} · ${genre} · ${status}`}
            />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt={`${title} - ${name}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite/>
              </IconButton>
              <IconButton aria-label="share">
                <Share/>
              </IconButton>
              <Expand
                expand={expanded}
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMore/>
              </Expand>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </Typography>
              </CardContent>
            </Collapse>
          </CardCSS>
        )}
    </PaperCSS>
  );
};
