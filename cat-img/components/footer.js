import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'


function Footer() {
    return (
        <div>
                  <div className='app'>
      
    
      <Navbar bg="main" varient='dark' 
      expand="lg">
        <Navbar.Brand>
          <div className="img" href="index">
            <a href='#' className="img">
          <Image src='/logo.png' width={200} height={77} href="index" alt=""/>
          </a>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle/>
              
                <a href='signup'>
                <Image src="/facebook.svg" width={200} height={20}/>
                </a>
                <Image src="/google.svg"  width={200} height={20} alt=""/>
                <Image src="/linkedin.svg" width={200} height={20} alt=""/>
                <Image src="/twitter.svg" width={200} height={20} alt=""/>
               
                        
       
      </Navbar>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        </div>
    )
}

export default Footer
