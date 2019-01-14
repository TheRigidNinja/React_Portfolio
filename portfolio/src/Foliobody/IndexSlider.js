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
      "Home",
      "Project1",
      "Project2",
      "Project3",
      "Project4",
      "Project5",
      "Project6",
      "Project7",
      "Project8",
      "Aboutme",
    ],
    CurrentObj: 0
  };

  componentDidMount() {
    $("html").bind("mouseenter", this.handleMouseEvent);
    $("html").bind("mousemove", this.handleMouseEvent);
    $("html").bind("click", this.handleSlider);
  }

  handleMouseEvent = e => {
    if ($(".navMenu").html() === "close" || e.pageY < 62) {
      $("html")
        .removeClass("Culeft")
        .removeClass("Curight")
        .addClass("defaultMouse");

    }else if (e.pageX > $(window).width() / 2){
      $("html")
        .removeClass("Culeft")
        .removeClass("defaultMouse")
        .addClass("Curight");
    }else{
      $("html")
        .removeClass("Curight")
        .removeClass("defaultMouse")
        .addClass("Culeft");
    }
  };

  handleSlider = e => {
    let pageClassTag;
    
    if ($("html").hasClass("Curight") && this.state.CurrentObj < this.state.Objects.length - 1) {

      // Page transition 
      $(`.${this.state.Objects[this.state.CurrentObj + 1]}`).css("z-index","1");
      $(`.${this.state.Objects[this.state.CurrentObj]}`).animate({ width: "0px" }, 600);

      const nextSlide = this.state.CurrentObj + 1;
      this.setState({ CurrentObj: nextSlide });
      pageClassTag = this.state.Objects[this.state.CurrentObj];

      



    } else if ($("html").hasClass("Culeft") && this.state.CurrentObj >= 1) {

      
      // $(`.${this.state.Objects[this.state.CurrentObj]}`).animate({ width: "0px" }, 600);

      const nextSlide = this.state.CurrentObj - 1;
      this.setState({ CurrentObj: nextSlide });
      pageClassTag = this.state.Objects[this.state.CurrentObj];
      
      $(`.${this.state.Objects[this.state.CurrentObj - 1]}`).css("z-index", "1");
      $(`.${this.state.Objects[nextSlide]}`).animate({ width: `${$(window).width()}` }, 600);
      
    }

    // updatePage;
    this.props.pageUpdate(this.state.CurrentObj);

    // Change theme
    if (pageClassTag) {
      this.props.ThemeChange(pageClassTag);
    }
  };


  render() {
    return (
      <div className="Slider-Cont">
        <Home /><Project2 />
        <Project1 />
        
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Aboutme />
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
