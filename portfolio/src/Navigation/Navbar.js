import React, { Component } from 'react'
import DropNavbar from './dropNavbar'
import './navStyle.css'
import { ThemeChange } from '../Themes/ThemeChange'
import { connect } from "react-redux";
import $ from "jquery";

class Navbar extends Component {

    dropMenu = (e) =>{
        // Passing data to ThemeChange;
        if ($(e.target).html() === "menu") {
            $(".navMenu").css({ transform: "rotateZ(90deg)translate(28px, -15px)" });
            $(".navMenu").html("close");
            $(".dropMenu").animate({ height: $(window).height()+"px"}, 300);
            this.props.ThemeChange("Menu");
        }else{
            this.props.ThemeChange("MenuRm");
            $(".navMenu").html("menu");
            $(".navMenu").css({ transform: "rotateZ(0deg)" });
            $(".dropMenu").animate({ height:"0px" }, 300);  
        }
    }

    closeMenu = (e) =>{
        if (this.props.Reveal < 9) {
            let elm = $(`.Project${this.props.Reveal}`);
            elm.animate({ scrollTop: 0 }, 600,()=>{
                $(".navCont").css("background", "transparent");
                $(".navClose").attr('style', 'display: none !important');
                elm.find($(".viewProject")).animate({ opacity: 1 }, 10, () => {
                    elm.find($(".viewProject")).css("display", "block");
                    elm.css("overflow","hidden");
                    elm.unbind("mousewheel");
                    this.props.binderScroll(null);
                });
            });

        }else{
            $(".Aboutme").animate({ scrollTop: 0 }, 600);
        }
    }

  render() {
    return(
        <div className="menuCont">
            <DropNavbar />
            <nav className="navCont z-depth-0">
                <a href="#" className="brand-logo navLogo left">BS</a>
                <a href="#" className="brand-logo center navClose" onClick={this.closeMenu}><i className="material-icons">close</i></a>
                <a href="#" className="brand-logo right navMenu" onClick={this.dropMenu}><i className="material-icons">menu</i></a>
            </nav>
        </div>
    )
  }
}


const mapStateToProps = (state) => {
    return { 
        Reveal: state.pageNum,
        binderScroll: state,
        ThemeChange: (pageData) => { ThemeChange(pageData) }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        binderScroll: (data) => { dispatch({ type: 'BINDER', data: data })},
    }
}

// export default Navbar;
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
