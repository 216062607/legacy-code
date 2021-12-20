
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card, ListGroup, NavLink} from 'react-bootstrap'
import {location} from '../public/location.svg'
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
//require ('dotenv').config();


function app(){
  return(
    <div className='app'>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
      rel="stylesheet"
      />
      </Head>
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

          <Nav.Link href="product">Product</Nav.Link>
          <Nav.Link href="team"> About Us</Nav.Link>
          <Nav.Link href="products">Careers</Nav.Link>
          <Nav.Link href="signup">Donate</Nav.Link>
          <Col >
          <Button className="btn-outline-purple" type="submit" href="signup">Log In
          </Button>
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
                              <Button variant="primary" className="h-60" type="submit" href="product">
                                        View Pricing
                               </Button>
                               
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img src="/location1.2.svg" className="w-100 "/>
                            </Col>
                        </Row>

                        </Container>

      
                  </div>
                  <div className='content5'>

                <Container className="mt-10">
                  <Row>
                      <Col  lg={6} md={6} sm={12}className="text-center mt-2">
                      <img src="/loc.svg"  className="w-100"/>
                      </Col>
                      <Col  lg={6} md={6} sm={12} className="text-center mt-5">
                        <h3>Welcome to the future</h3>
                    <div className="oyama">
                    <p>Weza is a geo-location elecronic neighbourhood watch app which allows the user to send disdress calls and emergenacies
                      Weza is powred by artificial intelligents making it the first of its kind.
                    </p>
                    </div>
                    <Button variant="primary" className="h-60" type="submit" href="product">
                                        DOWNLOAD APP
                    </Button>
                               
                      </Col>
                  </Row>

                  </Container>
        </div>
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
      <div className="content3 text-center mt-2 p-3">
        
      <Container className="mt-2">
      <div className="text-center mt-2 p-3">

      <h1>How Weza Works</h1>

      </div>    
            
            <Row>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/mngani.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Add Wezies</Card.Title>
                    <Card.Text>
                      <div className="">
                      Depending on your subscription, Weza lets you add "Wezies". 
                      Wezies are your emergancy contacts that will be sent an sms 
                      and a whatsapp text message of your current live location 
                      and also the e-hailing ride details whenever your are not safe. 
                      A Wezie can be your mother, father, Friend, Teacher or your pastor. 
                    </div>
                    </Card.Text>
                   
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/homeloc.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Select Primary Location</Card.Title>
                    <Card.Text>
                      <div className="oyama">
                      Weza lets you add more than 1 primary location, it can be your home, work,
                      school or church it is totally up to you. Selecting your primary location enables 
                      Weza to create a safe ecosystem that increases the response time. 
                      Weza will alert other users who are within a radius of your location when you are in danger. 
                    </div>
                    </Card.Text>
                    
                        
                </Card.Body>
            </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/searchloc.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Search for Community</Card.Title>
                    <Card.Text>
                      <div className="oyama">
                      Weza in collaboration with the Community Police Forum (CPF) ar 
                      commited to keeping the community safe. In doing so Weza has an 
                      ecosystem of CPFs across South Africa with every location having an 
                      e-Neighborhood watch community and as a usser you can 
                      search for any community around your urrent location.
                    </div>
                    </Card.Text>
                   
                        
                </Card.Body>
            </Card>
            </Col>

                <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
               <div className="yams">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/data.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Data Science</Card.Title>
                    <Card.Text>
                    <div className="oyama">
                    <p>Weza collects user information such as Location, Age, Gender and Merital Status . 
                      This information is used to clustify which area, age group and gender is a high risk. The data is collected 
                      ,cleaned and converted into csv for data analyses using Machine Learning algorythms. These algorythms   </p>
                    </div>
                    </Card.Text>
                  
                        
                </Card.Body>
               
            </Card>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/AI.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Artificial Intelligence</Card.Title>
                    <Card.Text>
                      <div className="oyama">
                      <p>Weza uses Linear regression to scale the data and use it to make 
                      predictions of high risk areas around you. Weza uses a supervised and a 
                      semi supervised machine learning model to make predictionc based on which 
                      location has the highest distress calls made , which age group has the highest 
                      distress call and which gender has the highest 
                      distress calls. All this information is used to give the user the best experience when it comes to safety .
                      </p> 
                    </div>
                    </Card.Text>
                    
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                <Card.Img variant='top' src="/Uber.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>E-Hailling</Card.Title>
                    <Card.Text>
                    <div className="oyama">
                   Weza premium subscription lets users sync all their e-hailing services such 
                   as Bolt,Uber and Taxify. All the driver information including the place the 
                   ride was requested from up untill the destination will be sent to your weza members. 
                   Using data Weza powered AI will find the safest driver 
                   for you based on the driver ID and ratings, this makes yor trips extra safe . 
                    </div>
                    </Card.Text>
                   
                                
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                
            </Card>
            
            </Col>
        </Row>
        </Container>




        <Carousel>
          <Carousel.Item interval="1000">
            <Image className="d-block w-100" src="/AI.svg"  width={500} height={500} alt="First slide"/>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval="1000">
            <Image className="d-block w-100" src="/uber.svg"  width={500} height={500} alt="First slide"/>
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel.Item interval="1000">
            <Image className="d-block w-100" src="/data.svg"  width={500} height={500} alt="First slide"/>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>


      </div>


    </div>


  );
}
export default app;


