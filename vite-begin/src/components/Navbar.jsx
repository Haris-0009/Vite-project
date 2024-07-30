import React from "react";



const Navbar = () =>{
  return(
    <div>
        <nav className="container"> 
      <div className="logo">
        <img src="/Images/logo.png" alt="logo"/>
      </div>
    <ul>
      <li href="#">HOME</li>
      <li href="#"> LOCATION</li>
      <li href="#">ABOUT</li>
      <li href="#">CONTACT</li>
    </ul>
    <button>LOGIN</button>
    </nav>
   
    </div>
  );

}


export default Navbar;