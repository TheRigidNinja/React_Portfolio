import React, { Component } from 'react'
import $ from "jquery";

class bodySlider extends Component {
    state = {
        CurrentObj:0
    }

    componentDidMount() {
        document.body.addEventListener("mouseenter", this.handleMouseEvent);
        document.body.addEventListener("mousemove", this.handleMouseEvent);
        document.body.addEventListener("click", this.handleSlider);
    }


    handleMouseEvent = (e) => {
        const width = document.body.clientWidth / 2;

        if (e.x > width && e.y > 60) {
            document.body.className = "Curight";
        } else if (e.y > 60) {
            document.body.className = "Culeft";
        } else {
            document.body.className = "defaultMouse";
        }
    }


    handleSlider = (e) => {

        if (document.body.className === "Curight" && this.state.CurrentObj <= 4) {

           const nextSlide = (this.state.CurrentObj+1);
           this.setState({ CurrentObj: nextSlide });
           $($(".Slider-Cont").children()[6-nextSlide]).animate({ width: "0px"},800)
           
        } else if (document.body.className === "Culeft" && this.state.CurrentObj >= 1){
            const provSlide = (this.state.CurrentObj-1);
            this.setState({ CurrentObj: provSlide });
            $($(".Slider-Cont").children()[5 - provSlide]).animate({ width: $(window).width() + "px"}, 800);
            console.log(6-provSlide);
        }
        
    }


  render() {
    return (
      <div className="Slider-Cont">
          <div className="Slide grey darken-4">1</div>
          <div className="Slide grey lighten-5">2</div>
          <div className="Slide grey darken-4">3</div>
          <div className="Slide grey grey lighten-5">4</div>
          <div className="Slide grey darken-4">5</div>
          <div className="Slide grey grey lighten-5">6</div>
        
      </div>
    )
  }
}

export default bodySlider
