import React, { Component } from 'react'
import Navbar from './Navigation/Navbar'
import Sliders from './Foliobody/IndexSlider'
// import $ from "jquery";
import { connect } from "react-redux";


class Portfolio extends Component {

  render() {
    const Tracker = () => {
      return (
        <div>
          <span className="tracNum">{this.props.pageNum}/09</span>
          <span className="btn-small waves-effect waves-light z-depth-0 iconMobNext"></span>
        </div>
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
