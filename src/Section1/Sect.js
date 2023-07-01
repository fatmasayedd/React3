import React from "react";
import './Sec1.css';
import hea from '../image/hea.svg'
import {BsArrowRightCircle } from "react-icons/bs";
import { Typewriter ,Cursor } from 'react-simple-typewriter';

function Sec() {
const text =  Typewriter ({
words:['FrontEnd Developer' , 'BackEnd Developer' , 'Full Stack Web Developer'],
loop: { } ,
typeSpeed: 400,
} );
return (
<>
<div className="se" id="ko" >
<div className="conte row justify-content-bettwen ">
<div class="mean-big col-lg-6 col-md-12 ">
<div class="mean">
<h3>Welcome All In My Portfolio</h3>
</div>
<h1 >
Hi! I'm Hoda Sayed Heseen ,
<span>
{text}
</span>
<span>
<Cursor cursorStyle='|' />
</span>
</h1>
<p>Hello everyone. i Have 1 year of Experience in Web Development</p>
<a className="letx">Let's Connect <BsArrowRightCircle className="bs"/></a>
</div>
<div className="ima col-lg-6 col-md-12">
<img src={hea} alt="logo" />
</div>
</div>
</div>
</>
);
}
export default Sec;