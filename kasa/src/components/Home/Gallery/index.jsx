import React from "react";
import PropTypes from "prop-types";
import { housingsList } from "../../../datas/housingsList.js"
import Thumb from "./Thumb";
import '../../../styles/Home/Gallery/index.css'


function Gallery() {

  return (
    <main className="gallery">
      <ul>
        {housingsList.map(({ id, cover, title, location }) =>
          <div key={id}>
            <Thumb
              id={id}
              cover={cover}
              title={title}
              location={location}
            />
          </div>

        )}
      </ul>
    </main>
  )

}

Gallery.propTypes = {
  housingsList: PropTypes.arrayOf(PropTypes.instanceOf(housingsList))
    .isRequired,
};

export default Gallery;
