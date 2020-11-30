import { useState } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { FaBars, FaStethoscope, FaHome,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TopNavBar = () =>{
    const [isExpanded , setIsExpanded] = useState(false);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  expanded={isExpanded}>
  <Navbar.Brand href="#home"><img src={`${process.env.PUBLIC_URL}/Asset10_4x.png`} width="auto"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>setIsExpanded(!isExpanded)}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/" className="nav-link" onClick={()=>setIsExpanded(false)}><span><FaHome/></span> Home</Link>
      <Link to="/book-appointment" className="nav-link" onClick={()=>setIsExpanded(false)}><span><FaStethoscope/></span> Book Appointment</Link>
      <Link to="/user" className="nav-link" onClick={()=>setIsExpanded(false)}><span><FaUser/></span> User Profile</Link>
     
    </Nav>
    <Nav>
    <NavDropdown title="Language" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default TopNavBar;