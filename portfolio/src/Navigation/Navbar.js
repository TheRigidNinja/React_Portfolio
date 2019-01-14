import React, { Component } from 'react'
import DropNavbar from './dropNavbar'
import './navStyle.css'
import { ThemeChange } from '../Themes/ThemeChange'
import { connect } from "react-redux";

import $ from "jquery";

class Navbar extends Component {
    state = {

    }

    dropMenu = (e) =>{
        // Passing data to ThemeChange;
        if ($(e.target).html() === "menu") {
            $(e.target).html('close');
            $(".dropMenu").animate({ height: $(window).height()+"px"}, 300);
            this.props.ThemeChange("Menu");
        }else{
            this.props.ThemeChange("MenuRm");
            $(e.target).html('menu');
            $(".dropMenu").animate({ height:"0px" }, 300);  
        }
    }

    
  render() {
    return <div className="menuCont">
        <DropNavbar />
        <nav className="nav-wrapper z-depth-0 transparent">
          <a href="#" className="right" onClick={this.dropMenu}>
            <i className="material-icons navMenu">menu</i>
          </a>
          <a href="#" className="left logo">
            BS
          </a>
        </nav>
      </div>;
  }
}


const mapThemes = (dispatch) => {
    return {
        ThemeChange: (pageData) => {ThemeChange(pageData)}
    }
}

export default connect(mapThemes)(Navbar);
