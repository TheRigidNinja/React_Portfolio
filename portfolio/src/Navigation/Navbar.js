import React, { Component } from 'react';
import DropNavbar from './dropNavbar';
import './navStyle.css';
import { ThemeChange } from '../Themes/ThemeChange'
import { connect } from "react-redux";
import $ from "jquery";

class Navbar extends Component {
    componentDidMount(){
        this.props.menuCollapse(this.dropMenu);
    }
    dropMenu = (e) =>{
        // Passing data to ThemeChange;
        if ($(".navMenu").find($(".material-icons")).html() === "menu") {
            $(".navMenu").css({ transform: "rotateZ(90deg)" });
            $(".navMenu").find($(".material-icons")).html("close");
            $(".menuCont").css("height","100%");
            $(".dropMenu").animate({ height:$(window).height() + "px"}, 300,()=>{
                $(".dropMenu").css("height","100%");
            });
            this.props.ThemeChange("Menu");
        }else{
            this.props.ThemeChange("MenuRm");
            $(".navMenu").find($(".material-icons")).html("menu");
            $(".navMenu").css({ transform: "rotateZ(0deg)" });
            $(".dropMenu").animate({ height:"0px" }, 300,()=>{
                $(".menuCont").css("height", "0%");
            }); 
        }
    }

    closeMenu = (e) =>{
        if (Number(this.props.Reveal) < 8) {
            console.log(this.props.buttonType)
            let elm = $(`.Project${Number(this.props.Reveal)}`);
            $(".navClose").css({"transform":"rotateZ(180deg)",opacity:0})
            elm.animate({ scrollTop: 0 }, 600,()=>{

                $(`.Project${Number(this.props.Reveal)}`).find($(".moreInfo")).css("display","none");
                $(".navCont").css("background", "transparent");
                $(".navClose").css({ "transform": "rotateZ(0deg)", opacity: 1 })
                $(".navClose").attr('style', 'display: none !important');
                elm.find($(`.${this.props.buttonType}`)).css("display", "block");
                $("html").css({ "--MouseR": "var(--MBinvertR)", "--MouseL": "var(--MBinvertL)" });
                $(".tracNum").css("opacity", 1);
                elm.find($(`.${this.props.buttonType}`)).animate({ opacity: 1 }, 10, () => {
                    setTimeout(() => {
                        elm.css("overflow", "hidden");
                        elm.unbind("mousewheel");
                        this.props.binderScroll(null); 
                    }, 200);
                });
            });

        }else{
            $(".Aboutme").animate({ scrollTop: 0 }, 600);
        }
    }


  render() {
    return(
      <div className="menuCont">
          <DropNavbar/>
          <nav className="navCont z-depth-0">
              <span href="##" className="brand-logo navLogo left"></span>
              <span href="##" className="brand-logo center navClose" onClick={this.closeMenu}><i className="material-icons">close</i></span>
              <span href="##" className="brand-logo right navMenu" onClick={this.dropMenu}><i className="material-icons">menu</i></span>
          </nav>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return { 
        Reveal: state.pageNum,
        buttonType: state.buttonType,
        ThemeChange: (pageData) => { ThemeChange(pageData) },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageUpdate: (data) => { dispatch({ type: 'UPDATE', data: data }) },
        binderScroll: (data) => { dispatch({ type: 'BINDER', data: data })},
        menuCollapse: (data) => { dispatch({ type: 'COLLAPSE', data: data }) }
    }
}

// export default Navbar;
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
