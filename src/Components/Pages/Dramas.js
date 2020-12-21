import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MovieItem from './MovieItem'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './Dramas.css'

function Dramas() {
  return (
    <div className="Dra-container">
      <div className="Dra-wrapper">
      <h2>Dramas</h2>
      <GridList className="GridList" cols={3}>
        {MovieItem.map((item) => (
          <GridListTile>
            <Card>
              <CardActionArea>
                <CardMedia className="media" image={item.Image}/>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.shortBrief}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridListTile>
        ))}
      </GridList>
      </div>
    </div>
  );
}

export default Dramas