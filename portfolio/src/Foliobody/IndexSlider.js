import React, { Component } from 'react';
import { BrowserRouter} from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";

import Contacts from "./Slider/Contacts";
import Home from './Slider/Home';
import AboutMe from "../Foliobody/Slider/Aboutme";
import Project1 from './Slider/Project1';
import Project2 from './Slider/Project2';
import Project3 from './Slider/Project3';
import Project4 from './Slider/Project4';
import Project5 from './Slider/Project5';
import Project6 from './Slider/Project6';
import Project7 from './Slider/Project7';
import Project8 from './Slider/Project8';
import './sliderStyle.css'
// import { pageUpdate } from "../Action/pageUpdate";
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
      "Contacts"
    ],
    CurrentObj: 0
  };

  componentWillMount(){
    this.handleSlider()
  }

  componentDidMount() {
    $(".Slide").css({ width: $(window).width(), height: $(window).height() });
    $("html").bind("mouseenter", this.handleMouseEvent);
    $("html").bind("mousemove", this.handleMouseEvent);
    $("html").bind("click", this.handleSlider);
  }

  // Menu events
  activate = type => {
    // Bind scroll action
    if (this.props.binder !== type && typeof type !== "object") {
      let button = $(`.${type}`).find($(".viewProject"));
      $(`.${type}`).css({ "overflow-y": "scroll" });

      button.animate({ opacity: 0 }, 10, () => {
        $(`.${type}`).animate({ scrollTop: 400 }, 600);
        $(".menuCont").animate({ height: 0, top: -100 }, 200);
        $("html").css({ "--MouseR": "auto", "--MouseL": "auto" });
        $(".tracNum").css("opacity", 0);
        setTimeout(() => {
          $(".navCont").css("background", "#fafafa");
          $(".navClose").attr("style", "display: block !important");
          button.css("display", "none");
        }, 400);
      });

      this.props.binderScroll(type);
      $(`.${type}`).bind("mousewheel", this.activate);
    } else {
      if (type.originalEvent.wheelDelta >= 0) {
        $(".menuCont").css({ height: 64, top: 0 });
      } else {
        $(".menuCont").css({ height: 0, top: -100 });
      }
    }
  };

  handleMouseEvent = e => {
    if ($(".navMenu").find($(".material-icons")).html() === "close" || e.target.nodeName === "SPAN" || e.target.nodeName === "I" || this.props.binder !== null || e.target.className.includes("navCont") || window.location.href.includes("AboutMe")) {
      $("html")
        .removeClass("Culeft")
        .removeClass("Curight")
        .addClass("defaultMouse");
    } else if (e.pageX > $(window).width() / 2) {
      $("html")
        .removeClass("Culeft")
        .removeClass("defaultMouse")
        .addClass("Curight");
    } else {
      $("html")
        .removeClass("Curight")
        .removeClass("defaultMouse")
        .addClass("Culeft");
    }
  };

  // Move to next slides
  handleSlider = e => {
    let pageClassTag;
    if (e !== undefined) {
      if (
        $("html").hasClass("Curight") &&
        this.state.CurrentObj < this.state.Objects.length - 1
      ) {
        $(`.${this.state.Objects[this.state.CurrentObj]}`).animate(
          { width: "0px" },
          500,
          () => {
            $(`.${this.state.Objects[this.state.CurrentObj]}`).css(
              "z-index",
              "1"
            );
          }
        );

        let nextSlide = this.state.CurrentObj + 1;
        this.setState({ CurrentObj: nextSlide });

        pageClassTag = this.state.Objects[this.state.CurrentObj];
      } else if ($("html").hasClass("Culeft") && this.state.CurrentObj > 0) {
        let provSlide = this.state.CurrentObj - 1;
        this.setState({ CurrentObj: provSlide });

        pageClassTag = this.state.Objects[this.state.CurrentObj];
        $(`.${this.state.Objects[provSlide]}`).animate(
          { width: $(window).width() },
          500,
          () => {
            $(`.${this.state.Objects[provSlide]}`).css("z-index", "1");
          }
        );
      }

      // updatePage;
      this.props.pageUpdate(this.state.CurrentObj);

      // Change theme
      if (pageClassTag) {
        this.props.ThemeChange(pageClassTag);

        // TrackerNum
        if (pageClassTag === "Home") {
          $(".tracNum").css("opacity", 0);
        } else {
          $(".tracNum").css("opacity", 1);
        }
      }
    }

    // CHECK PAGE URL FOR NAVIGATION    
    setTimeout(() => {
      if(window.location.href.includes("AboutMe")){
        $(".Aboutme").css("z-index",9);
        $(".tracNum").css("opacity",0);
        $(".Aboutme").animate({ height: $(window).height(), top: 0 }, 300,()=> {
          try {
            if ($(e.target).html() === "ABOUT ME") {
              $(".navMenu").click();
            }
          } catch (error) {
            console.log("Failed")
          }
        })
      }else{
        $(".Aboutme").animate({height:0,top:$(window).height()-80},300,()=>{
          $(".Aboutme").css("z-index", -9);
          $(".tracNum").css("opacity", 1);
        })
      }
    }, 100);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="Slider-Cont">
          <AboutMe/>
          <Contacts activate={this.activate} />
          <Project8 activate={this.activate} />
          <Project7 activate={this.activate} />
          <Project6 activate={this.activate} />
          <Project5 activate={this.activate} />
          <Project4 activate={this.activate} />
          <Project3 activate={this.activate} />
          <Project2 activate={this.activate} />
          <Project1 activate={this.activate} />
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    ThemeChange: (pageData) => { ThemeChange(pageData) },
    binder: state.binder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pageUpdate: (data) => {dispatch({type:'UPDATE',data:data})},
    binderScroll: (data) => { dispatch({ type: 'BINDER', data: data }) } 
  }
}


// export default bodySlider;
export default connect(mapStateToProps, mapDispatchToProps)(bodySlider);
