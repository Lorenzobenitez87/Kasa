import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"

import "../../styles/Carousel/index.css"


function Carousel({ pictures }) {

  const [current, setCurrent] = useState(0)

  const length = pictures.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  //if (!Array.isArray(pictures) || pictures.length <= 0) {
  //  return null;
  //}

  return (

    <div className="carousel">

      <div className="carouselPictures-box">
        {pictures.length > 0 ? (
          <img
            className="carouselPicture"
            src={pictures[current]}
            alt="Magnifique location"
          />
        ) : (
          <p className="carouselNo-pic-message">Aucune image disponible</p>
        )}
      </div>

      {pictures.length > 1 ? (
        <nav className="carouselNav">
          <i
            className="fas fa-chevron-left"
            onClick={prevSlide}
          ></i>
          <i
            className="fas fa-chevron-right"
            onClick={nextSlide}
          ></i>
        </nav>
      ) : (
        ""
      )}

      {pictures.length > 1 ? (
        <div className="carouselCounter">
          {current + 1}/{pictures.length}
        </div>
      ) : (
        ""
      )}
    </div>
  )
}


Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
}

export default Carousel
