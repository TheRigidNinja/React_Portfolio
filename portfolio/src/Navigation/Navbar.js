import React, { Component } from 'react';
import DropNavbar from './dropNavbar';
import './navStyle.css';
import { ThemeChange } from '../Themes/ThemeChange'
import { connect } from "react-redux";
import $ from "jquery";
import { BrowserRouter, Link} from "react-router-dom";
import icon from "../img/Generals/Body_Icon_B.svg"; 


class Navbar extends Component {
    dropMenu = (e) =>{
        // Passing data to ThemeChange;
        if ($(".navMenu").find($(".material-icons")).html() === "menu") {
            $(".navMenu").css({ transform: "rotateZ(90deg)translate(28px, -15px)" });
            $(".navMenu").find($(".material-icons")).html("close");
            $(".dropMenu").animate({ height: $(window).height()+"px"}, 300);
            $(".tracNum").css("opacity", 0);
            this.props.ThemeChange("Menu");
        }else{
            this.props.ThemeChange("MenuRm");
            $(".navMenu").find($(".material-icons")).html("menu");
            $(".navMenu").css({ transform: "rotateZ(0deg)" });
            $(".dropMenu").animate({ height:"0px" }, 300); 
            $(".tracNum").css("opacity", 1); 
        }
    }

    closeMenu = (e) =>{
        if (Number(this.props.Reveal) < 10) {
            let elm = $(`.Project${Number(this.props.Reveal)}`);
            elm.animate({ scrollTop: 0 }, 600,()=>{
                $(".navCont").css("background", "transparent");
                $(".navClose").attr('style', 'display: none !important');
                elm.find($(".viewProject")).css("display", "block");
                $("html").css({ "--MouseR": "var(--MBinvertR)", "--MouseL": "var(--MBinvertL)" });
                $(".tracNum").css("opacity", 1);
                elm.find($(".viewProject")).animate({ opacity: 1 }, 10, () => {
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
        <BrowserRouter>
            <div className="menuCont">
                <DropNavbar/>
                <nav className="navCont z-depth-0">
                    <Link to="/"><span href="##" className="brand-logo navLogo left"><img src={icon}alt="BS"/></span></Link>
                    <span href="##" className="brand-logo center navClose" onClick={this.closeMenu}><i className="material-icons">close</i></span>
                    <span href="##" className="brand-logo right navMenu" onClick={this.dropMenu}><i className="material-icons">menu</i></span>
                </nav>
            </div>
        </BrowserRouter>
    )
  }
}


const mapStateToProps = (state) => {
    return { 
        Reveal: state.pageNum,
        binderScroll: state,
        ThemeChange: (pageData) => { ThemeChange(pageData) },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        binderScroll: (data) => { dispatch({ type: 'BINDER', data: data })},
    }
}

// export default Navbar;
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
