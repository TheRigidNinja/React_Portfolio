import React, { Component } from 'react'
import $ from "jquery";

export class Navbar extends Component {
    state = {

    }

    dropMenu = (e) =>{
        if ($(e.target).html() === "menu") {
            $(e.target).css({ "transition": "all 0.2s", "transform": "rotate(90deg)"})
            $(e.target).html('close');
            $(".dropMenu").animate({ height: $(window).height() + "px"}, 250);
        }else{
            $(e.target).css({ "transition": "all 0.2s", "transform": "rotate(0deg)" })
            $(e.target).html('menu');
            $(".dropMenu").animate({ height:"0px" }, 250);  
        }

    }

  render() {
    return (
        <div>
            <div className="dropMenu grey darken-4"></div>

            <nav className="nav-wrapper indigo z-depth-0">
                <a href="#" className="right" onClick={this.dropMenu}>
                    <i className="material-icons">menu</i>
                </a>
                <a href="#" className="btn-floating btn-large left logo">BS </a>
            </nav>

            
        </div>
    )
  }
}

export default Navbar
