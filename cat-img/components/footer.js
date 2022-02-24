import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'


function Footer() {
    return (
        <div className='footer' >
          <div className='socialmedia'>
        
                <Image src="/facebook.svg" width={20} height={20}/>
                <Image src="/google.svg" width={20} height={20} alt=""/>
                <Image src="/linkedin.svg" width={20} height={20} alt=""/>
                <Image src="/twitter.svg" width={20} height={20} alt=""/> 
      </div>                                                                    
      <p>&copy; Designed and Developed By Weza 2022</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
       </div>
    )
}

export default Footer
