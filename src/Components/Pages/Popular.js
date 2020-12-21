import React from 'react'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './Popular.css'

const slideImages = [
    'moviePoster/Start-up.jpg',
    'moviePoster/emily-in-paris.jpg',
    'moviePoster/Queen.jpg'
];

const Popular = () =>{

    return(
        <div className="slide-container">
            <div className="slide-wrapper">
            <Slide>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}> </div>
                </div>

                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
                </div>

                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
                </div>
            </Slide>
            </div>
        </div>
    )
}

export default Popular