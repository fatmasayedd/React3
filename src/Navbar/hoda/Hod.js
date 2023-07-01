import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import './Hoda.css';
function Hos() {
return (
<Navbar expand="xl" className="bg-body-light na"sticky="top" >
<div className='h row justify-content-between m-auto'>
<Navbar.Brand href="#ko" className='logo'>LOGO</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-auto q' variant="light"  />
<Navbar.Collapse id="basic-navbar-nav ">
<Nav className="ml-auto">
<Nav.Link href="#ko" className='text-light lin mr-xl-3'>Home</Nav.Link>
<Nav.Link href="#Skillx" className='text-light lin'>Skills</Nav.Link>
<Nav.Link href="#projects" className='text-light lin'>Projects</Nav.Link>
<div class="word2" >
<Nav.Link class="nav-item " /> 
<div class="face my-2 my-2"><a href="https://www.facebook.com/hoda.sayed.9862273?mibextid=ZbWKwL"><FaFacebookF class="icon3"/></a></div>
<Nav.Link class="nav-item " /> 
<div class="in  mx-3 my-2"><a href="https://www.linkedin.com/in/hoda-sayed-720495247"><FaLinkedinIn class="icon3"/></a></div>
<Nav.Link class="nav-item "/> 
<div class="insta my-2"><a href="#"><FaInstagram class="icon3"/></a> </div>  </div>
<div className="word3">
<Nav.Link className="lets">
<span className="co">Let's Connect</span>
</Nav.Link>
</div>
</Nav>
</Navbar.Collapse>
</div>
</Navbar>
);
}
export default Hos;