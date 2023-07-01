import React from "react";
import'./Skills.css'
import meter1 from '../image/meter1.svg';
import meter2 from '../image/meter2.svg';
import meter3 from '../image/meter3.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Ski() {
const responsive = {
superLargeDesktop: {
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 3
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 2
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}
};
return (
<> 
<div class="sk" id="Skillx">
<h2>Skills</h2> 
<p class="s">You Can See My Skills Here </p>
<Carousel responsive={responsive} infinite={true}> 


<div class="met1">
<img src={meter1} alt="image" />
<p>FullStack wep Developer</p>
</div>
<div class="met2">
<img src={meter2} alt="image" />
<p>FrontEnd Developer</p>
</div>
<div class="met3">
<img src={meter3} alt="image" />
<p>BackEnd Developer</p>
</div>
<div class="met4">
<img src={meter3} alt="image" />
<p>UX/UI Designer</p>
</div>

</Carousel>
</div>
</>
);
}
export default Ski;