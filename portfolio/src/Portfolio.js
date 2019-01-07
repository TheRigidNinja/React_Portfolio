import React, { Component } from 'react'
import Navbar from './Navigation/Navbar'

export class Portfolio extends Component {

  componentDidMount(){
    document.body.addEventListener("mouseenter", this.handleMouseEvent);
    document.body.addEventListener("mousemove", this.handleMouseEvent);
    document.body.addEventListener("click", this.handleSlider);
  }


  handleMouseEvent = (e) => {
    const width = document.body.clientWidth/2;

    if (e.x > width && e.y > 60) {
      document.body.className = "Curight";
    } else if (e.y > 60){
      document.body.className = "Culeft";
    }else{
      document.body.className = "defaultMouse";
    }
  }


  handleSlider = (e) =>{
    return null
  }
  

  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}

export default Portfolio
