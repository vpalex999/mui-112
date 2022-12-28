import React from 'react';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyle = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type CoffeCardProps = {
  avatarSrc: string;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
};

const CoffeCard = (props: CoffeCardProps) => {
  // const classes = useStyle();
  const { avatarSrc, title, subtitle, description, imgSrc } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc}>R</Avatar>}
        action={
          <IconButton arial-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: '200px' }} image={imgSrc} title='Paella dish' />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>BUY NOW</Button>
        <Button size='small'>OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
