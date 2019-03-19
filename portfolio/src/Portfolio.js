import React, { Component } from 'react'
import Navbar from './Navigation/Navbar'
import Sliders from './Foliobody/IndexSlider'
import { connect } from "react-redux";
import $ from "jquery";


function isTouchDevice() {return typeof window.ontouchstart !== 'undefined';}
class Portfolio extends Component {

  componentDidMount(){
    if (isTouchDevice() === true) {
      document.querySelector("body").style.cursor="pointer"
    }

    window.addEventListener('load', this.removeLoader);
  }

  removeLoader = () =>{
    $(".Loader").animate({"opacity":0},3000,()=>{
      $(".Loader").css("display","none");
    })
  }


  render() {
    console.log(this.props)
    const Tracker = () => {
      return <div><span className="tracNum">0{this.props.pageNum}/07</span></div>
    }

    return(
      <div>
      <div className="Loader">
        <div className="dot"></div>
        <div className="ping"></div>
      </div>
       <Tracker />
       <Navbar />
        <Sliders />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
    return { pageNum: state.pageNum };
}

// export default Portfolio;
export default connect(mapStateToProps)(Portfolio);
