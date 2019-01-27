import React, { Component } from 'react';
import { BrowserRouter} from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";

import Contacts from "./Slider/Contacts";
import Home from './Slider/Home';
import MoreProjects from "../Foliobody/Slider/MoreProjects";
import Project1 from './Slider/Project1';
import Project2 from './Slider/Project2';
import Project3 from './Slider/Project3';
import Project4 from './Slider/Project4';
import Project5 from './Slider/Project5';
import Project6 from './Slider/Project6';
import Project7 from './Slider/Project7';
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
      "Contacts"
    ],
    CurrentObj: 0
  };

  componentWillMount() {
    this.handleSlider();
  }

  componentDidMount() {
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
        $(".menuCont").animate({ height: 0, top: -150 }, 200);
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
        $(".menuCont").css({ height: 0, top: -150 });
      }
    }
  };

  handleMouseEvent = e => {
    if (
      $(".navMenu")
        .find($(".material-icons"))
        .html() === "close" ||
      e.target.nodeName === "SPAN" ||
      e.target.nodeName === "I" ||
      this.props.binder !== null ||
      e.target.className.includes("navCont") ||
      window.location.href.includes("AboutMe") ||
      $(e.target).attr("alt") === "BS"
    ) {
      $("html")
        .removeClass("Culeft")
        .removeClass("Curight")
        .addClass("defaultMouse");
    } else if ((e.pageX > $(window).width() / 2 && this.state.CurrentObj < 10) || this.state.CurrentObj === 0) {
      console.log(this.state.CurrentObj);
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
        $("html").hasClass("Curight") && this.state.CurrentObj < this.state.Objects.length - 1) {
          $(".Slide").css({ width: $(window).width(), height: $(window).height() });
          $(`.${this.state.Objects[this.state.CurrentObj]}`).animate({ width: "0%" },500,() => {
            $(`.${this.state.Objects[this.state.CurrentObj]}`).css("z-index","1");
            $(".Slide").css({ width: "100%", height: "100%" });
          });

        let nextSlide = this.state.CurrentObj + 1;
        this.setState({ CurrentObj: nextSlide });
        pageClassTag = this.state.Objects[this.state.CurrentObj];

      } else if ($("html").hasClass("Culeft") && this.state.CurrentObj > 0) {
        let provSlide = this.state.CurrentObj - 1;
        this.setState({ CurrentObj: provSlide });

        pageClassTag = this.state.Objects[this.state.CurrentObj];
        $(".Slide").css({ width: $(window).width(), height: $(window).height() });
        $(`.${this.state.Objects[provSlide]}`).animate({ width: "100%"},500,() => {
            $(`.${this.state.Objects[provSlide]}`).css("z-index", "1");
            $(".Slide").css({ width: "100%", height: "100%" });
          });
      }

      // updatePage;
      let pageNum = this.state.CurrentObj;
      this.props.pageUpdate(pageNum < 10 ? "0"+pageNum : pageNum);

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
      if (window.location.href.includes("AboutMe")) {
        $(".Aboutme").css("z-index", 9);
        $(".tracNum").css("opacity", 0);
        $(".Aboutme").animate(
          { height: "100%", top: 0 },
          300,
          () => {
            try {
              if ($(e.target).html() === "ABOUT ME") {
                $(".navMenu").click();
              }
            } catch (error) {}
          }
        );
      } else {
        $(".Aboutme").animate({ height: 0, top: "calc(100% - 80px)" },300,() => {
            $(".Aboutme").css("z-index", -9);

            if ($(".tracNum").text() === "00/09") {
              $(".tracNum").css("opacity", 0);
            } else {
              if ($(".navMenu").text() !== "close") {
                $(".tracNum").css("opacity", 1);
              }
            }
          }
        );
      }
    }, 100);

    //-------------// Navigate to Home
    try {
      if ($(e.target).attr("alt") === "BS") {
        // console.log(`.${this.state.Objects[this.state.CurrentObj + 1]}`);

        $(`.${this.state.Objects[this.state.CurrentObj]}`).css("z-index", "2");
        $(".Home").css({ "z-index": "1", width: "100%" });
        $(`.${this.state.Objects[this.state.CurrentObj]}`).animate(
          { width: "0px", left: $(window).width() },
          500,
          () => {
            $(`.${this.state.Objects[this.state.CurrentObj]}`).css({
              width: $(window).width(),
              left: 0,
              "z-index": "0"
            });

            $(`.${this.state.Objects[this.state.CurrentObj - 1]}`).css({
              width: $(window).width()
            });
            this.setState({ CurrentObj: 0 });
          }
        );
      }
    } catch (error) {}
  };

  render() {
      return (
        <BrowserRouter>
          <div className="Slider-Cont">
            <MoreProjects />
            <Contacts activate={this.activate} />
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
