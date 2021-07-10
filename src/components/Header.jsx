import React from "react";

function Header() {
  return (
    <>
      {/* <div className="alert alert-primary main"> 

      
    
     

       
      </div> */}

<div className="col-md ">
<div className="row alert alert-primary">
<div className="col-md-4"> <div className="img_custum">  <img className="rounded mx-auto d-block"  src="https://img.pngio.com/react-logo-png-download-500500-free-transparent-react-png-react-png-900_500.jpg" alt="mypic" className="card_img" /> </div></div>
<div className="col-md-4">  <div className="name"><h1>This Is React</h1> </div> </div>
<div className="col-md-4">  <div className="info"> 
     <div><span> E-mail id : </span><input className="b "  type="email"/> </div> 
     <div> <span>Name :</span> <input className="b" type="text"/> </div> 
      <div> <span>Mobile No :</span> <input className="b" type="text"/> </div> 
      </div></div>

</div>

</div>

    </>
  );
}

export default Header;
