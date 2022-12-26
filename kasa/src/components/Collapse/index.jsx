import React from "react"
import PropTypes from "prop-types"
import { useState } from "react"

import "../../styles/Collapse/index.css"


function Collapse({ title, textArray }) {

  const [isOpen, setIsOpen] = useState(false)

  const updateIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const collapseIcon = `fas fa-chevron-${isOpen ? "up" : "down"}`

  return (

    <section className={`collapse${isOpen ? " is-open" : " is-close"}`}>

      <h2 className="collapseTitle" onClick={updateIsOpen}>
        <span>{title}</span>
        <span className={collapseIcon}></span>
      </h2>

      <ul className={`collapseText ${isOpen ? "is-open" : "is-close"}`}>
        {textArray.map((item, index) => (
          <li key={`item-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  )
}


Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Collapse
