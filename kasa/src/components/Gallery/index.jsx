import React from "react";
import Thumb from "../Thumb";
//import PropTypes from "prop-types";

import '../../styles/Gallery/index.css'

import { housingsList } from "../../datas/housingsList.js"


function Gallery() {
 
  return (
    <main className="gallery">
      <ul>
        {housingsList.map(({ id, cover, title, location }) =>
          <li key={id}>
            <Thumb
              id={id}
              cover={cover}
              title={title}
              location={location}
            />
          </li>
          
        )}
      </ul>
    </main>
  )

}



export default Gallery;
