//import { useState, useEffect } from 'react'
import Header from '../components/Header/index'
import Section1 from '../components/Home/Section1'
//import Body from '../components/Body/index';
//import Footer from '../components/Footer/index';
import '../styles/Home.css';
import '../styles/Header.css';

function Home() {
  return (
    <div>
      <Header className=".header" />
      <Section1 />
    </div>
    
  )
}

export default Home;
