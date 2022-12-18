
import React from "react";

import Error from "./Error404";
import Header from '../components/Header/index'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer/index'


class Location extends React.Component {
  render() {

    const { id } = this.props.match.params;
    const housingToDisplay = this.props.housingsList.findById(id);
    console.log(housingToDisplay);
    if (!housingToDisplay) {
      return <Error />;
    }

    const ad = housingToDisplay;
    const ratingScale = [1, 2, 3, 4, 5];

    return (
      <div>
        <Header />
        <Carousel pictures={ad.pictures} />
        <section>
          <header className="Advertisement__header">
            <div className="Advertisement__summary-box">
              <h1 className="Advertisement__title">{ad.title}</h1>

              <h2 className="Advertisement__location">{ad.location}</h2>

              <div className="Advertisement__tags-box">
                {ad.tags.map((tag) => (
                  <span className="Advertisement__tag" key={`tag-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="Advertisement__aside-box">
              <div className="Advertisement__host-box">
                <p className="Advertisement__host-name">{ad.host.name}</p>

                <img
                  className="Advertisement__host-picture"
                  src={ad.host.picture}
                  alt={ad.host.name}
                />
              </div>

              <div className="Advertisement__rating">
                {ratingScale.map((scale) => (
                  <i
                    className={`fas fa-star${scale <= ad.rating ? " colored" : ""
                      }`}
                    key={`star-${scale}`}
                  ></i>
                ))}
              </div>
            </div>
          </header>

          <div className="Advertisement__collapses-box">
            <div className="Advertisement__collapse">
              <Collapse title="Description" textArray={[ad.description]} />
            </div>

            <div className="Advertisement__collapse">
              <Collapse title="Êquipements" textArray={ad.equipments} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Location