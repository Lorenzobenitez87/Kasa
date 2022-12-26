import React from "react"
import { useParams } from 'react-router-dom'
import { housingsList } from '../datas/housingsList'
import Header from '../components/Header/index'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer/index'
import Error404 from "./Error404"

import '../styles/Housing/index.css'
import '../styles/style.css'


function Housing() {

  // On récupère l'id de la location dans l'URL
  const { id } = new useParams()

  // Fonction qui nous renvoie l'objet dans un tableau grâce à une de ses propriétés
  const housingToDisplay = housingsList.find(housing => housing.id === id)

  if (!housingToDisplay) {
    return <Error404 />
  }

  const ad = housingToDisplay
  const ratingScale = [1, 2, 3, 4, 5]

  return (

    <div>
      <Header />

      <Carousel pictures={ad.pictures} />

      <main >
        <header className="housingHeader">
          <div className="housingSummary-box">
            <h1 className="housingTitle">{ad.title}</h1>

            <h2 className="housingLocation">{ad.location}</h2>

            <div className="housingTags-box">
              {ad.tags.map((tag) => (
                <span className="housingTag" key={`tag-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="housingAside-box">
            <div className="housingHost-box">
              <p className="housingHost-name">{ad.host.name}</p>

              <img
                className="housingHost-picture"
                src={ad.host.picture}
                alt={ad.host.name}
              />
            </div>

            <div className="housingRating">
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

        <div className="housingCollapses-box">
          <div className="housingCollapse">
            <Collapse title="Description" textArray={[ad.description]} />
          </div>

          <div className="housingCollapse">
            <Collapse title="Equipements" textArray={ad.equipments} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Housing