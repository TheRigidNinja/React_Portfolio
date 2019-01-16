import React from 'react'
import $ from "jquery";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";


function Project1() {

  return <div className="Slide Project1 grey lighten-5">
      <a class="btn-large waves-effect waves-light  viewProject z-depth-0" >
      VIEW PROJECT
      </a>
{/* onClick={activate} */}
    <div className="row moreInfo container">
          <div class="col s12 m6 l6 intro">
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
        <div class="col s12 m6 l6 intro">
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
          <div class="col s12 m12 l12 details">
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
    </div>;
}


const mapDispatchToProps = (dispatch) => {
  return {
    Button: (hover) => {}
  }
}

export default connect()(Project1);