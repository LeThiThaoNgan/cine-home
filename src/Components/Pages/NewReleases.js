import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MovieItem from './MovieItem'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import './NewReleases.css'


function NewReleases() {
  return (
    <div className="new-container">
      <div className="new-wrapper">
      <h2>New Releases</h2>
      <GridList className="GridList" cols={3}>
        {MovieItem.map((item) => (
          <div>
            <GridListTile>
            <Card>
              <CardActionArea>
                <CardMedia className="media" image={item.Image}/>
              </CardActionArea>
            </Card>
            <h3>{item.title}</h3>
          </GridListTile>
          </div>
        ))}
      </GridList>
      </div>
    </div>
  );
}

export default NewReleases