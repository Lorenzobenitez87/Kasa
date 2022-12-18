//import { useState, useEffect } from 'react'
import Image from '../assets/img-home-section.jpg'
import Header from '../components/Header'
import Section from '../components/Section'
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import '../styles/index.css';


function Home() {
  return (
    <div>
      <Header />
      
      <Section >
      <img src={Image} alt='Chez vous, partout et ailleurs' />
            <h1>Chez vous, partout et ailleurs</h1>
      </Section >

      <Gallery />

      <Footer />
    </div>

  )
}

export default Home;
