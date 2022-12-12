//import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Section1 from '../components/Home/Section1'
import Gallery from '../components/Home/Gallery';
import Footer from '../components/Footer';
import '../styles/index.css';


function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Gallery />
      <Footer />
    </div>

  )
}

export default Home;
