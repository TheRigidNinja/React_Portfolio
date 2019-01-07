import React, { Component } from 'react'
import Navbar from './Navigation/Navbar'
import Sliders from './Foliobody/Slider/bodySlider'
import $ from "jquery";

export class Portfolio extends Component {

  render() {
    return (
      <div>
        <Sliders/>
        <Navbar />
        
      </div>
    )
  }
}

export default Portfolio
