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
            this.props.ThemeChange('Menu'); // Change theme

            $(e.target).html('close');
            $(".dropMenu").animate({ height: $(window).height() + "px"}, 300);
        }else{
            this.props.ThemeChange("MenuRm");// Change theme to default

            $(e.target).html('menu');
            $(".dropMenu").animate({ height:"0px" }, 300);  
        }
    }

    
  render() {
    return (
        <div>
            <DropNavbar />
            <nav className="nav-wrapper z-depth-0 grey lighten-5">
                <a href="#" className="right black-text" onClick={this.dropMenu}>
                    <i className="material-icons navSize navMenu">menu</i>
                </a>
                <a href="#" className="left logo black-text navSize navLogo">BS</a>
            </nav>
            
            
        </div>
    )
  }
}


const mapThemes = (dispatch) => {
    return {
        ThemeChange: (pageData) => {ThemeChange(pageData)}
    }
}

export default connect(mapThemes)(Navbar);
