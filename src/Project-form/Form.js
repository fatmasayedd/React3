import React from "react";
import Form from './Form.css';
import contact from '../image/contact-img.svg';
function Fo() {
return (
<>
<div class="big">
<div className="con1 row justify-content-center m-auto">
<div className="imz col-xl-6 col-sm-12"> <img src={contact}  alt="image" width={'100%'} height={'100%'}/> </div>
<div className="imz2 col-xl-6 col-sm-12">
<form>
<h1 className="ti"> Get In Touch</h1>
<input type="text" placeholder="First Name" className="so"/>
<input type="text" placeholder="Last Name" className="so"/>
<br/>
<input type="email" placeholder="Email Address" className="so"/>
<input type="text" placeholder="Phone Na." className="so"/>
<br/>
<textarea placeholder="Message" />
<br/>
<button className="soaa"> <a src="#"> Sent</a> </button>
</form>
</div>
</div>
</div>
</>
);
}
export default Fo;