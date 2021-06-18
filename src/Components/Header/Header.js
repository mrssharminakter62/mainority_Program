import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import facebook from '../../images/faceb.png';
import twitter from '../../images/twitt.png';
import linkedin from '../../images/linkedin.png'


const Header = () => {
    return ( 
     <Navbar collapseOnSelect expand="lg" bg="light" >
        <Navbar.Brand  style={{color:'white', marginLeft:'5px', fontWeight:'bold', fontFamily:"'Dancing Script', cursive"}} href="./"><img src={logo} style={{maxWidth:'50px'}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="me fw-bold">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/incubator">Incubator</Nav.Link>
        <Nav.Link href="/learn">Learn Page</Nav.Link>
        </Nav> 
        <Nav className="">
        <Nav.Link href="https://www.facebook.com/MinorityProgrammers" target="_blank"><img src={facebook} style={{maxWidth:'20px'}} alt="" /></Nav.Link>
        <Nav.Link href="https://twitter.com/minorityprogram" target="_blank"><img src={twitter} style={{maxWidth:'25px'}} alt="" /></Nav.Link>
        <Nav.Link href="https://www.linkedin.com/company/minority-programmers/" target="_blank"><img src={linkedin} style={{maxWidth:'25px'}} alt="" /></Nav.Link>
        </Nav>
        </Navbar.Collapse>
     </Navbar>  

        
    );
};

export default Header;