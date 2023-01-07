import Image from '../assets/img-home-section.jpg'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

import '../styles/style.css'



function Home() {

  return (

    <div>
      <Header />

      <Banner >
        <img src={Image} alt='Chez vous, partout et ailleurs' />
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner >

      <Gallery />

      <Footer />
    </div>
  )
}


export default Home
