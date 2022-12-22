import React from "react"
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import '../../styles/Slideshow/index.css'


const proprietes = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    Indicators: true,
    arrows: true,
    easing: "ease",
    counter: (i) => <div className="indicator">{i + 1}</div>
}


function Slideshow({ pictures }) {

    return (

        <div className="containerSlide">
            <Slide {...proprietes}>
                {pictures.map((picture, index) => (
                    <div className="eachSlide" key={index} >
                        <img src={picture} alt="Magnifique location" />
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow