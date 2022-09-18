import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';

export default function Cards({ img, name, language, desc, onClickShowMore, genres }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='540'
          image={img}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {`${name} ${language ? `-${language}` : ''}`}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {genres?.map(genre => `${genre} `)}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {desc != null
              ? desc.replace(/(<([^>]+)>)/gi, '')
              : 'No Description available'}
          </Typography>
        </CardContent>
      </CardActionArea>
      {onClickShowMore ? (
        <CardActions>
          <Button size='small' color='primary' onClick={onClickShowMore}>
            Show More
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}
