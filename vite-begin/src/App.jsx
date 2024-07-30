import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Contactas from "./components/Contactas";



const App = () => {
  return(
  <div> 
    <Navbar/> 
    <Content/>
    {/* <Contactas/> */}
  </div>
);


}


export default App;