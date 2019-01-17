import React from 'react'
import $ from "jquery";
// import Button from "@material-ui/core/Button";
// import { connect } from "react-redux";


function Project1({activate}) {
  // console.log(activate);() => { activate("Project1") 
  return (//Slide  
    <div className="Project1">
      <div className="Slide">
        <a className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project1")}}>VIEW PROJECT</a>
        <div className="row moreInfo">
              <div className="col s12 m6 l6 intro">
                <h4>Background</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  unde, culpa, sequi quae, doloremque accusamus fugit natus
                  aliquid possimus esse corporis. Aperiam deleniti est consectetur
                  minima officia quibusdam eligendi quisquam! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Hic unde, culpa, sequi
                  quae, doloremque accusamus fugit natus aliquid possimus esse
                  corporis. Aperiam deleniti est consectetur minima officia
                  quibusdam eligendi quisquam! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Hic unde, culpa, sequi quae,
                  doloremque accusamus fugit natus aliquid possimus esse corporis.
                  Aperiam deleniti est consectetur minima officia quibusdam
                  eligendi quisquam!
                </p>
              </div>
          <div className="col s12 m6 l6 intro">
                <h4>Scope</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  unde, culpa, sequi quae, doloremque accusamus fugit natus
                  aliquid possimus esse corporis. Aperiam deleniti est consectetur
                  minima officia quibusdam eligendi quisquam! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Hic unde, culpa, sequi
                  quae, doloremque accusamus fugit natus aliquid possimus esse
                  corporis. Aperiam deleniti est consectetur minima officia
                  quibusdam eligendi


                  Quisquam! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Hic unde, culpa, sequi quae,
                  doloremque accusamus fugit natus aliquid possimus esse corporis.
                  Aperiam deleniti est consectetur minima officia quibusdam
                  eligendi quisquam!
                </p>
              </div>
              <div className="col s12 m12 l12 details">
                <h4>Process</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                unde, culpa, sequi quae, doloremque accusamus fugit natus
                aliquid possimus esse corporis. Aperiam deleniti est consectetur
                minima officia quibusdam eligendi quisquam! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Hic unde, culpa, sequi
                quae, doloremque accusamus fugit natus aliquid possimus esse
                corporis. Aperiam deleniti est consectetur minima officia
                quibusdam eligendi


                Quisquam! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Hic unde, culpa, sequi quae,
                doloremque accusamus fugit natus aliquid possimus esse corporis.
                Aperiam deleniti est consectetur minima officia quibusdam
                eligendi quisquam!
                </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Project1;