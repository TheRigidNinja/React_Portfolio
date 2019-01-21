import React, { Component } from 'react'
import Navbar from './Navigation/Navbar'
import Sliders from './Foliobody/IndexSlider'
import $ from "jquery";
import { connect } from "react-redux";


class Portfolio extends Component {
  state = {
  };


  render() {
    const Tracker = () => {
      return (
        $(window).width() > 800 ? (
        <div className="tracNum">
          0{this.props.pageNum}/09
        </div>
      ) : (
            <span className="btn-small waves-effect waves-light z-depth-0 iconMobNext"><i className="material-icons ">arrow_forward_ios</i></span>
      )
    )
    }

    return(
      <div>
        <Sliders />
        <Navbar />
        <Tracker />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
    return { pageNum: state.pageNum };
}

// export default Portfolio;
export default connect(mapStateToProps)(Portfolio);
