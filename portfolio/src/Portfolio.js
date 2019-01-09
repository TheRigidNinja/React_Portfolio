import React, { Component } from 'react'
import Navbar from './Navigation/Navbar'
import Sliders from './Foliobody/IndexSlider'
import $ from "jquery";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

class Portfolio extends Component {
  state = {
    pageNum: 0
  };

  handlingThemes = () => {
    console.log(0)
  };

  // componentDidMount() {
  //   $(window).bind("resize", this.Winresize);
  //   this.Winresize();
  // }

  // Winresize = () =>{
  //   console.log(0)
  // }

  render() {
    const Tracker = () => {
      return $(window).width() > 800 ? (
        <div className="tracNum black-text">
          0{this.props.pageNum}/09
        </div>
      ) : (
        <Button
          variant="outlined" className="grey lighten-5 mobNext">
          <i className="material-icons iconMobNext">arrow_forward_ios</i>
        </Button>
      );
    };

    return (
      <div>
        <Sliders />
        <Navbar />
        <Tracker />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  let mypageData = state.pageNum; 
    return{
      pageNum: mypageData
    }
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => { dispatch(deletePost(id)) }
//   }
// }

export default connect(mapStateToProps)(Portfolio);
// export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
