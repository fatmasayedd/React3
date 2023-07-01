import React from "react";
import './Footer.css';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import logo from '../image/logo.svg';
function Fot() {
    return (
      <>
      <div className="foot">
<div className="con2">

<div className="to"> 
<img src={logo} alt="image"/>
</div>

<div class="wo">

<div class="face w"><a href="https://www.facebook.com/hoda.sayed.9862273?mibextid=ZbWKwL"><FaFacebookF class="icon3 icon5"/></a></div>
<div class="in mx-1"><a href="https://www.linkedin.com/in/hoda-sayed-720495247"><FaLinkedinIn class="icon3 icon5"/></a></div>
<div class="insta"><a href="#"><FaInstagram class="icon3 icon5"/></a></div>
</div>

<div className="m"><p>--CopyRights 2023-- All Rights Reserved here By Hoda Sayed Heseen </p></div>
</div>

      </div>
      
      
      </>
    );
}
export default Fot;