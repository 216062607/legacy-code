
import Head from 'next/head'
import Image from 'next/image'
import LandPage from '../components/LandPage'
import Hero from '../components/hero'
import Hero2 from '../components/hero2'
import Work from '../components/work'
import Car from '../components/carousel'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'
import {location} from '../public/location.svg'


function app(){
  return(
    <div className='app'>
        <Head>
         <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"/>
      </Head>
      
      <LandPage/>
      <Hero/>
      <Hero2/>
      <Work/>
      <Footer/>

    
    </div>
  );
}
export default app;


