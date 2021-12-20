import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Card, Button , Form,Col,Row, Container, ListGroup} from 'react-bootstrap'

function product() {
    return (
    <div>

<div className="NavB">
            <Navbar bg="main" varient='dark' sticky="top"
      expand="lg">
        <Navbar.Brand>
          <div className="img" href="index">
          <a href='http://localhost:3000/' className="img">
          <Image src='/logo.png' width={200} height={77} alt=""/>
          </a>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse className="right">
        <Nav>

          <NavDropdown title="Products">
            <NavDropdown.Item href="products/product 1">Free Tier</NavDropdown.Item>
            <NavDropdown.Item href="products/product 2">Premium</NavDropdown.Item>
            <NavDropdown.Item href="products/product 3">Ultimate</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="About Us">
             <NavDropdown.Item href="About Us/ Background">Background</NavDropdown.Item>
            <NavDropdown.Item href="team">Meet The Team</NavDropdown.Item>
            <NavDropdown.Item href="About Us/Mission Statement">Mission and Vission</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="products">Careers</Nav.Link>
          <Nav.Link href="signup">Log in </Nav.Link>
          
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
            </div>






        <div className="content2">
            <div className="text-center mt-2 p-3">

            <h1>Key Focus Categories</h1>
            
            </div>
            <Container className="mt-2">
            <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/auth1.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Pitch Decks</Card.Title>
                   <ListGroup variant="flush">
                       <ListGroup.Item>Live Location</ListGroup.Item>
                       <ListGroup.Item>Add 3 Members</ListGroup.Item>
                       <ListGroup.Item>2 Emergency Calls</ListGroup.Item>
                       <ListGroup.Item>Social Media Sync</ListGroup.Item>
                       <ListGroup.Item><h6>R29.99/pm</h6></ListGroup.Item>
                   </ListGroup>
                  
                    <Button variant='primary' className="w-100" href="donate"> 
                        Buy
                    </Button>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/liveloc.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Pitch Decks</Card.Title>
                    <ListGroup variant="flush">
                       <ListGroup.Item>Live Location</ListGroup.Item>
                       <ListGroup.Item>Add 5 Members</ListGroup.Item>
                       <ListGroup.Item>10 Emergency Calls</ListGroup.Item>
                       <ListGroup.Item>Social Media Sync</ListGroup.Item>
                       <ListGroup.Item><h6>R59.99/pm</h6></ListGroup.Item>
                   </ListGroup>
                   
                    <Button variant='primary' className="w-100" href="donate"> 
                        Buy
                    </Button>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                <Card.Img variant='top' src="/user2.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Angel Investor</Card.Title>
                    <ListGroup variant="flush">
                       <ListGroup.Item>Live Location</ListGroup.Item>
                       <ListGroup.Item>Add 10 Members</ListGroup.Item>
                       <ListGroup.Item>20 Emergency Calls</ListGroup.Item>
                       <ListGroup.Item>Social Media Sync</ListGroup.Item> 
                       <ListGroup.Item>e-Hailing Sync</ListGroup.Item>
                       <ListGroup.Item>24 hours services</ListGroup.Item>
                       <ListGroup.Item><h6>R89.99/pm</h6></ListGroup.Item>
                       
                   </ListGroup>
                    
                    <Button type="submit" href="dashboard" className="w-100">
                                        Sign Up
                    </Button>
                                
                </Card.Body>
           
            </Card>
            </Col>
        </Row>
        </Container>
        </div>
    </div>
    )
}

export default product 