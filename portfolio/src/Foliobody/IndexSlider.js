import React, { Component } from 'react';
import { connect } from "react-redux";
import $ from "jquery";
import Contacts from "./Slider/Contacts";
import Home from './Slider/Home';
import Project1 from './Slider/Project1';
import Project2 from './Slider/Project2';
import Project3 from './Slider/Project3';
import Project4 from './Slider/Project4';
import Project5 from './Slider/Project5';
import Project6 from './Slider/Project6';
import './sliderStyle.css'
import { ThemeChange } from "../Themes/ThemeChange";


function isTouchDevice() { return typeof window.ontouchstart !== 'undefined'; }
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
      "Contacts"
    ],
    PageName:"Home",
    PageSlideDelay:false,
    ObjCount:0,
    lastTouch:null,
    TouchScreen: false,
  };

  componentWillMount() {
    this.handleSlider();
  }

  componentDidMount() {
    $("html").bind("mouseenter", this.handleMouseEvent);
    $("html").bind("mousemove", this.handleMouseEvent);
    $("html").bind("click", this.handleSlider);

    if (isTouchDevice() === true) {this.setState({TouchScreen:true})}
  }

  
  handleMouseEvent = e => {
      if ($(".navMenu").find($(".material-icons")).html() === "close" || e.target.nodeName === "SPAN" || e.target.nodeName === "I" ||
      this.props.binder !== null || e.target.className.includes("navCont") || window.location.href.includes("AboutMe") || $(e.target).attr("alt") === "BS") {
      $("html").removeClass("Culeft").removeClass("Curight").addClass("defaultMouse");
    } else if ((e.pageX > $(window).width() / 2 || this.state.PageName === "Home") && (this.state.PageName !== "Contacts")) {
      $("html").removeClass("Culeft").removeClass("defaultMouse").addClass("Curight");
    } else {
      $("html").removeClass("Curight").removeClass("defaultMouse").addClass("Culeft");
    }
  }

  // Menu events
  activate =( type,idClass )=> {
    if (["iconMobNext", "viewProject"].indexOf(idClass) !== -1) {
      this.props.buttonType(idClass);
    }

    // Bind scroll action
    if (this.props.binder !== type && typeof type !== "object") {
      let button = $(`.${type}`).find($(`.${idClass}`));
      $(`.${type}`).css({ "overflow-y": "scroll" });

      button.animate({ opacity: 0 }, 10, () => {
        $(`.${type}`).find($(".moreInfo")).css("display","block");
        $(`.${type}`).animate({ scrollTop: 400 }, 600);
        $(".menuCont").animate({ top: -150 }, 200);
        $("html").css({ "--MouseR": "auto", "--MouseL": "auto" });
        $(".tracNum").css("opacity", 0);
        setTimeout(() => {
          $(".navClose").attr("style", "display: block !important");
          button.css("display", "none");
        }, 400);
      });

      this.props.binderScroll(type);
      $(`.${type}`).bind("mousewheel touchmove", this.activate);
    } else {
      console.log(type.originalEvent.wheelDelta)
      if (this.state.TouchScreen === true && type.originalEvent.wheelDelta === undefined) {
          let currentY = type.originalEvent.touches[0].clientY;
          if (currentY > this.state.lastTouch) {
            $(".menuCont").css({ height: 64, top: 0 });
          } else {
            $(".menuCont").css({ height: 0, top: -150 });
          }
          this.setState({ lastTouch: currentY })
      }else{
        if (type.originalEvent.wheelDelta >= 0) {
          $(".menuCont").css({ height: 64, top: 0 });
        } else {
          $(".menuCont").css({ height: 0, top: -150 });
        }
      }

    }
    // change navbar Color
    if(document.querySelector("." + this.state.PageName).scrollTop >= 720){
      this.props.ThemeChange("Read");
    }else{
      this.props.ThemeChange("ReadRm");
    }
  };

  // Move to next slides
  handleSlider = e => {
    if (e !== undefined && this.state.PageSlideDelay === false) {
       // Next Slide
      if ($("html").hasClass("Curight") && this.state.ObjCount < this.state.Objects.length - 1) {
          this.setState({ PageSlideDelay: true}) // Prevent page from moving too fast
          $(".Slide").css({ width: $(window).width(), height: $(window).height() });
          $(`.${this.state.Objects[this.state.ObjCount]}`).animate({ width: "0%" },500,() => {
            $(`.${this.state.Objects[this.state.ObjCount]}`).css("z-index", "1");
            $(".Slide").css({ width: "100%", height: "100%" });
            this.setState({ PageSlideDelay: false })
          });

        let nextSlide = this.state.ObjCount + 1;
        this.setState({ ObjCount: nextSlide, PageName: this.state.Objects[this.state.ObjCount+1]});

      // Prov Slide
      } else if ($("html").hasClass("Culeft") && this.state.ObjCount > 0) {
        this.setState({ PageSlideDelay: true })// Prevent page from moving too fast
        let provSlide = this.state.ObjCount - 1;
        this.setState({ ObjCount: provSlide, PageName: this.state.Objects[this.state.ObjCount - 1] });

        $(".Slide").css({ width: $(window).width(), height: $(window).height() });
        $(`.${this.state.Objects[this.state.ObjCount]}`).animate({ width: "100%" }, 500, () => {
          $(".Slide").css({ width: "100%", height: "100%" });
          this.setState({ PageSlideDelay: false });
        });
      }

    // Only displays 3 slides at any single time
    if(this.state.ObjCount+1 <= 7 && this.state.ObjCount-1 >= 0){
      $(`.${this.state.Objects[this.state.ObjCount+1]}`).css("display","block");
      $(`.${this.state.Objects[this.state.ObjCount-1]}`).css("display","block");
    }

    if(this.state.ObjCount+2 <= 8 && this.state.ObjCount-1 >= 0){
      $(`.${this.state.Objects[this.state.ObjCount+2]}`).css("display","none");
      $(`.${this.state.Objects[this.state.ObjCount-2]}`).css("display","none");
    }

    // updatePage;
    this.props.pageUpdate(this.state.ObjCount < 8 ? this.state.ObjCount : this.state.ObjCount);
    // Change theme
    this.props.ThemeChange(this.state.PageName);

    } 



  //-------------// Navigate  to different pages
    try {
      
      if (["Home","Contacts"].indexOf(this.state.PageName) !==-1 ){
          console.log("Hot")
        $(".tracNum").css("opacity",0);
      }else{
        $(".tracNum").css("opacity", 1);
      }

      
      let reset = false
      let pageWdth = "100%"

      if ($(e.target).text() === "PORTFOLIO" && this.state.PageName !== "Project1") {

          $(".Home").css({ "z-index": 1, width: "0%" });
          this.props.ThemeChange("Project1");
          reset = true
          this.setState({ ObjCount: 1, PageName: "Project1"});
          setTimeout(() => { this.props.Collapse(); }, 500);
          
      } else if ($(e.target).text() === "ABOUT ME" && this.state.PageName !== "Contacts") {

          $(".Contacts").css({ "z-index": 1, width: "100%", left: "0%" });
          $(".Home").css({ "z-index": 1, width: "0%" });
          reset = true;
          pageWdth = "0%";
          this.setState({ ObjCount: 7, PageName: "Contacts" });
          this.props.ThemeChange("Contacts");
          setTimeout(() => { this.props.Collapse(); }, 500);

      } else if ($(e.target).hasClass("navLogo") && this.state.PageName !== "Home") {

        $(`.${this.state.PageName}`).css("z-index","2");
        $(".Home").css({ "z-index": 1, width: "100%" });
        this.props.ThemeChange("Home");
        reset = true
        $(`.${this.state.PageName}`).animate({ width: 0, left: "100%" }, 500);
        this.setState({ ObjCount: 0, PageName: "Home"});
      } 
      if (reset === true){
        setTimeout(() => {
          $(".Project1").css({ "z-index": 1, width: pageWdth, left: "0%" });
          $(".Project2").css({ "z-index": 1, width: pageWdth, left: "0%" });
          $(".Project3").css({ "z-index": 1, width: pageWdth, left: "0%" });
          $(".Project4").css({ "z-index": 1, width: pageWdth, left: "0%" });
          $(".Project5").css({ "z-index": 1, width: pageWdth, left: "0%" });
          $(".Project6").css({ "z-index": 1, width: pageWdth, left: "0%" });
        }, 500);
      }

    } catch (error) { }
    // console.log()
  };

  
  render() {
    return (
        <div className="Slider-Cont">
          <Contacts activate={this.activate} />
          <Project6 activate={this.activate} />
          <Project5 activate={this.activate} />
          <Project4 activate={this.activate} />
          <Project3 activate={this.activate} />  
          <Project2 activate={this.activate} />
          <Project1 activate={this.activate} />
          <Home />
        </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    ThemeChange: (pageData) => { ThemeChange(pageData) },
    binder: state.binder,
    Collapse: state.menuCollapse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pageUpdate: (data) => {dispatch({type:'UPDATE',data:data})},
    binderScroll: (data) => { dispatch({ type: 'BINDER', data: data }) },
    buttonType: (data) => { dispatch({ type: 'BUTTON', data: data }) } 
  }
}

// export default bodySlider;
export default connect(mapStateToProps, mapDispatchToProps)(bodySlider);
