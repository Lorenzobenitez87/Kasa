//import { useState, useEffect } from 'react'
import Header from '../components/Header/index'
import SectionImg from '../components/Section/index'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer/index'

import Image from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'

import '../styles/style.css';


const ABOUT_CONTENTS = [
  {
    title: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  return (
    <div>
      <Header />

      <SectionImg >
        <img src={Image} alt="Les montagnes et l'air pure" />
      </ SectionImg >

      <div className="collapses-box">
        {ABOUT_CONTENTS.map(({ title, text }) => (
          <Collapse key={`about-${title}`} title={title} textArray={[text]} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default About