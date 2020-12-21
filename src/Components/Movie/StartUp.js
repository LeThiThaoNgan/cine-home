import React from 'react'
import MovieItem from './../Pages/MovieItem'

function StartUp(){
    return(
        <div>
            {MovieItem.map((item) =>(
                <div>
                    {item.title} == "Start-Up" ? 
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h3">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                    </CardContent>
                </div>
            ))}
            :
        </div>
    )
}

export default StartUp