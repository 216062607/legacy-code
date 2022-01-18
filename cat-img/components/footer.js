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
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        </div>
    )
}

export default Footer