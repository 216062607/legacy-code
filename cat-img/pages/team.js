import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Card, Button ,Container, Col, Row,Navbar,Nav, NavDropdown} from 'react-bootstrap'

export const team = () => {
    return (
        <div className="content4">
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
          <Nav.Link href="signup">Donate </Nav.Link>
          
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
            </div>
            <div className="text-center mt-2 p-3">

            <h1>MEET THE TEAM </h1>
            </div>
            <div className="oyama">
            <p>The Abafazi team comprises of 6 young, dedicated, talented and hardworking individuals who have dedicated 
                their lives to being philanthropist and taking charge in making South Africa a safe place for all who reside in it. These young individuals seeks to break 
                the status quo of Gender Based Violence by engaging the youth to take charge and break the silence .
            </p>
            </div>
             <Container className="mt-2">
            <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/oyama2.jpeg" width={250} height={250} alt=""/>
                <Card.Body>
                    <Card.Title>Oyama Makapela</Card.Title>
                    <Card.Text>
                        <h6>Product Manager</h6>
                    </Card.Text>
                    <Card.Text>
                    Be the reason the world is a better place
                    <br/>
                    <br/>
                    <br/>
                    </Card.Text>

                    <div className= "icon">
                    
          <a href='http://localhost:3000/' className="img">
                <Image src="/facebook.svg" width={20} height={20} alt=""/>
                <Image src="/google.svg" width={20} height={20} alt=""/>
                <Image src="/linkedin.svg" width={20} height={20} alt=""/>
                <Image src="/twitter.svg" width={200} height={20} alt=""/>
                </a>
                </div>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/Jordan.jpg" width={250} height={250} alt=""/>
                <Card.Body>
                    <Card.Title>Jordan Gallant</Card.Title>
                    <Card.Text>
                        <h6>Chief Operating Officer</h6>
                    </Card.Text>
                    <Card.Text>
                   I think about the future a lot, the advantages that technology has, 
                    the ability and impact it has on our daily lives
                    </Card.Text>
                    <Image src="/facebook.svg" width={20} height={20} alt=''/>
                <Image src="/google.svg" variant='primary' type="submit" href="signup" width={20} height={20}alt=""/>
                <Image src="/linkedin.svg" width={20} height={20} alt=""/>
                <Image src="/twitter.svg" width={200} height={20} alt=""/>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/Yonelisa.jpg" width={250} height={250} alt=""/>
                <Card.Body>
                    <Card.Title>Yonelisa Gudana</Card.Title>
                    <Card.Text>
                        <h6>Chief Finamcial Officer</h6>
                    </Card.Text>
                    <Card.Text>
                   I have always been fascinated about creating awareness regarding GBV.
                   <br/>
                   <br/>
                    </Card.Text>
                    <Image src="/facebook.svg" width={20} height={20}/>
                <Image src="/google.svg" variant='primary' type="submit" href="signup" width={20} height={20} alt=""/>
                <Image src="/linkedin.svg" width={20} height={20} alt=""/>
                <Image src="/twitter.svg" width={200} height={20} alt=""/>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/Zoe manela.jpg" width={250} height={250} alt=""/>
                <Card.Body>
                    <Card.Title>Zoe Manela</Card.Title>
                    <Card.Text>
                        <h6>Marketing Officer</h6>
                    </Card.Text>
                    <Card.Text>
                   Abafazi is a way for us to spread awareness and help those who need help, hope for the hopeles
                   <br/>
                   <br/>
                    </Card.Text>
                    <Image src="/facebook.svg" width={20} height={20} alt=""/>
                <Image src="/google.svg" variant='primary' type="submit" href="signup" width={20} height={20} alt=""/>
                <Image src="/linkedin.svg" width={20} height={20} alt=""/>
                <Image src="/twitter.svg" width={200} height={20} alt=""/>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/Neli.png" width={250} height={250}alt=""/>
                <Card.Body>
                    <Card.Title>Nelisekani Mdluli</Card.Title>
                    <Card.Text>
                        <h6>Social Media Manager</h6>
                    </Card.Text>
                    <Card.Text>
                   I have always wanted to bring awareness to issues affecting woman &
                    I am grateful to be able to work alongside the creative minds that gave birth to Abafazi
                    </Card.Text>
                    <a href='signup'>
                    <Image src="/facebook.svg" width={20} height={20}/>
                    </a>
                <Image src="/google.svg" variant='primary' type="submit" href="signup" width={20} height={20} alt=""/>
                <Image src="/linkedin.svg" width={20} height={20} alt=""/>
                <Image src="/twitter.svg" width={200} height={20} alt=""/>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                <Card.Img variant='top' src="/Rorbeta.jpg" width={250} height={250} alt=""/>
                <Card.Body>
                    <Card.Title>Roberta</Card.Title>
                    <Card.Text>
                        <h6>Research Specialist</h6>
                    </Card.Text>
                    <Card.Text>
                    I am motivated by making a difference within the 
                    community that I live in and I feel as if Abafazi group has the same initiative
                    <br/>
                    <br/>
                    
                    </Card.Text>
                    <div className="socials mt-3">
                        <Image src="/facebook.svg" width={20} height={20}alt=""/>
                        <Image src="/google.svg" variant='primary' type="submit" href="signup" width={20} height={20} alt=""/>
                        <Image src="/linkedin.svg" width={20} height={20} alt=""/>
                        <Image src="/twitter.svg" width={200} height={20} alt=""/>
                    </div>
                                
                </Card.Body>
           
            </Card>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default team;