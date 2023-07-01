import React from "react";
import './Ima.css';
import project1 from '../image/project1.png';
import project2 from '../image/project2.png';
import project3 from '../image/project3.png';
import Fo from '../Project-form/Form.js';
function Im() {
    return (
      <>
      
<div className="im"> 
<div className="con row justify-content-around">


<div className="proj1 col-lg-4 col-md-6 col-sm-12">
    <div className="img1 "><img src={project1} alt="image" width={`100%`} height={450}/></div>
    <div className="inf1 "> 
        <h2>Business Statup</h2>
        <p>Design & Development</p>
        </div>
</div>

<div className="proj2 proj1 col-lg-4 col-md-6 col-sm-12">
    <div className="img2"><img src={project2} alt="image"  width={`100%`} height={450}/></div>
    <div className="inf2"> 
        <h2>Business Statup</h2>
        <p>Design & Development</p>
        </div>
</div>

<div className="proj3 proj1 col-lg-4 col-md-6 col-sm-12">
    <div className="img3"><img src={project3} alt="image"  width={`100%`} height={450}/></div>
    <div className="inf3"> 
        <h2>Business Statup</h2>
        <p>Design & Development</p>
        </div>
</div>

<div className="proj1 e col-lg-4 col-md-6 col-sm-12">
    <div className="img1"><img src={project1} alt="image"  width={`100%`} height={450}/></div>
    <div className="inf1"> 
        <h2>Business Statup</h2>
        <p>Design & Development</p>
        </div>
</div>

<div className="proj2 e col-lg-4 col-md-6 col-sm-12">
    <div className="img2"><img src={project2} alt="image"  width={`100%`} height={450}/></div>
    <div className="inf2"> 
        <h2>Business Statup</h2>
        <p>Design & Development</p>
        </div>
</div>

<div className="proj3 e col-lg-4 col-md-6 col-sm-12">
    <div className="img3"><img src={project3} alt="image"  width={`100%`} height={450}/></div>
    <div className="inf3"> 
        <h2>Business Statup</h2>
        <p>Design & Development</p>
        </div>
</div>


</div>
</div>
  
  <Fo/>
      </>
    );
}
export default Im;
