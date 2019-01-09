import React, { Component } from 'react'
import { connect } from "react-redux";
import $ from "jquery";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";



import Aboutme from './Slider/Aboutme'
import Home from './Slider/Home'
import Project1 from './Slider/Project1'
import Project2 from './Slider/Project2'
import Project3 from './Slider/Project3'
import Project4 from './Slider/Project4'
import Project5 from './Slider/Project5'
import Project6 from './Slider/Project6'
import Project7 from './Slider/Project7'
import Project8 from './Slider/Project8'
import './sliderStyle.css'
import { pageUpdate } from "../Action/pageUpdate";
import { ThemeChange } from "../Themes/ThemeChange";

class bodySlider extends Component {
  state = {
    Objects: [
      ".Home",
      ".Project1",
      ".Project2",
      ".Project3",
      ".Project4",
      ".Project5",
      ".Project6",
      ".Project7",
      ".Project8",
      ".Aboutme",
    ],
    CurrentObj: 0
  };

  componentDidMount() {
    $("html").bind("mouseenter", this.handleMouseEvent);
    $("html").bind("mousemove", this.handleMouseEvent);
    $("html").bind("click", this.handleSlider);
  }

  handleMouseEvent = e => {
    if (e.pageX > $(window).width() / 2) {
      $("html")
        .removeClass("Culeft")
        .addClass("Curight");
    } else {
      $("html")
        .removeClass("Curight")
        .addClass("Culeft");
    }
    // } else {
    //   $("html").addClass("defaultMouse");
    // }
  };

  handleSlider = e => {
    let pageClassTag;
    
    if ( $("html").hasClass("Curight") && this.state.CurrentObj <= this.state.Objects.length - 3) {
      const nextSlide = this.state.CurrentObj + 1;
      pageClassTag = this.state.Objects[this.state.Objects.length - nextSlide];

      this.setState({ CurrentObj: nextSlide });
      $(pageClassTag).animate({ width: "0px" }, 800);

    } else if ($("html").hasClass("Culeft") && this.state.CurrentObj >= 1) {

      const nextSlide = this.state.CurrentObj - 1;
      pageClassTag = this.state.Objects[this.state.Objects.length - nextSlide];

      this.setState({ CurrentObj: nextSlide });
      $(pageClassTag).animate({ width: `${$(window).width()}` }, 800);
    }


    // updatePage;
    this.props.pageUpdate(this.state.CurrentObj);

    // Change theme
    this.props.ThemeChange(pageClassTag);
  };

  // <Button color="primary" size="large" variant="outlined" className="navProject  grey grey lighten-5">VIEW PROJECT</Button> */}

  render() {
    return (
      <div className="Slider-Cont">
        <Aboutme />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Home />
        {/* <div className="Slide grey darken-4"></div>
          <div className="Slide grey lighten-5"></div> */}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    pageNum: state.pageNum
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    pageUpdate: (data) => {dispatch({type:'UPDATE',data:data})},
    ThemeChange: (pageData) => { ThemeChange(pageData) }
  }
}

export default connect( mapStateToProps,mapDispatchToProps)(bodySlider);
