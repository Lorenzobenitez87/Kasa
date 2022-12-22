import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

import '../../styles/Thumb/index.css'

function Thumb({ id, cover, title, location }) {
  return (

    <Link
      className="thumb-wrapper"
      to={`/housing/${id}`}
      key={`housing-${id}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <article className='thumb'>
        <img
          className='thumbCover'
          src={cover}
          alt={`Une location située en ${location}`}
        />
        <div className='thumbFilter'></div>
        <h2 className='thumbTitle'>{title}</h2>
      </article>
    </Link>

  )
}

Thumb.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
};

export default Thumb