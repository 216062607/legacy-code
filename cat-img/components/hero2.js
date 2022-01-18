import React from "react";
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'



function Hero2 (){
    return(
        <div className='content'>

                <Container className="mt-10">
                  <Row>
                  <Col  lg={6} md={6} sm={12} className="text-center mt-5">
                        <h3>Welcome to the future</h3>
                    <div className="">
                    <p>Weza is a geo-location elecronic neighbourhood watch app which allows the user to send disdress calls and emergenacies
                      Weza is powred by artificial intelligents making it the first of its kind.
                    </p>
                    </div>
                    <Button variant="primary" className="h-60" type="submit" href="product">
                                            DOWNLOAD APP
                    </Button>
                               
                        
                      </Col>

                      <Col  lg={6} md={6} sm={12}className="text-center mt-2">
                      <img src="/bestplace.svg"  className="w-100"/>
                      </Col>
                
                  </Row>

                  </Container>
        </div>

    )
}
export default Hero2