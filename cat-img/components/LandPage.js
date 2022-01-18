import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'


function LandPage() {
    return (
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
        <Navbar.Collapse className="right">
        <Nav>

          <Nav.Link href="product">FEATURES</Nav.Link>
          <Nav.Link href="team"> ABOUT US</Nav.Link>
          <Nav.Link href="products">CAREERS</Nav.Link>
          <Nav.Link href="adduser">SIGN UP</Nav.Link>
          <Col >
          <Button variant="outline-primary" type="submit" href="signup" className='pad'> LOG IN 
          </Button>{''}
          </Col>
          
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
      <div className='content'>

      <Container className="mt-2">
                        <Row>
                            <Col  lg={6} md={6} sm={12} className="text-center mt-2 p-3">
                              <h1>Weza</h1>
                              <h2>e-Neighbourhood Watch </h2>
                              <h3>Safety In Your Pocket</h3>
                              <p>Weza is a geo-location elecronic neighbourhood watch app which allows the user to send disdress 
                                calls and emergenacies Weza is powred by artificial intelligents making it the first of its kind.</p>
                             <Col sm={12}>
                              <Button variant="primary" className="h-60" type="submit" href="product">
                                        View Pricing
                               </Button>{''}
                               </Col>
                               
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img src="/location1.2.svg" className="w-100 "/>
                            </Col>
                        </Row>

                        </Container>

      
                  </div>
    </div>
    )
}

export default LandPage
