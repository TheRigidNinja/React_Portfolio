import React from 'react'
import $ from "jquery";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";


function Project1() {

const activate = (props) => {
  // console.log(props)
}


  return (
    <div className="Slide Project1">
      <Button variant="outlined" className="grey lighten-5 viewProject" onMouseEnter={activate}>VIEW PROJECT</Button>

      <div className="moreInfo indigo">
        <h1>Testing!</h1>
      </div>

    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    Button: (hover) => {}
  }
}

export default connect()(Project1);