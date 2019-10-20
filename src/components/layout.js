import React, { Component } from 'react';
import Asaid from "./Asaid";
import Barnav from "./Barnav";
import Footer from "./Footer";
import Section from "./Section";
import Header from "./Header";

 class layout extends Component {
  render() {

    return (
      <div className="Container-Padre-layout"> 
      
      <Asaid/>
      <Barnav/>    
      <Section/>
      <Header/>
      <Footer/>
      
      </div>
    );
  }
}

export default layout;