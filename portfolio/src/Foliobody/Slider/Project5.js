import React from "react";

function Project5({ activate }) {
  return (
    //Slide
    <div className="Project5">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>SLITHER CLASSIC</h3><br/>
          <p>
            Slither Classic is a project that combines some of slither.io and
            the classic snake features. It's a game that challenges the best
            of players.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project5") }}>VIEW PROJECT</span>
        </div>

        <div className="row moreInfo">
          <div className="col s12 m6 l6 intro">
            <h4>Background</h4>
            <p>
              Playing Slither.io was the main reason this project sparked. The
              goal was to create a game that graphically kept the classic
              snake game settings while at the same time add extract
              functionalities similar to slither.io.
            </p>
          </div>
          <div className="col s12 m6 l6 intro">
            <h4>Project Scope</h4>
            <p>
              Creating Slither Classic involved creating a system for
              displaying text, a grid system correctly positioned that can be
              accessed using X and Y coordinates, and finally spawning food
              that will disappear after a given time.
            </p>
          </div>
          <div className="col s12 m12 l12 details">
            <h4>Process</h4>
            <p>
              Like many things, this project appeared simple and
              straightforward, but when put into practice it becomes much more
              complex. 
              <br/>
              Some of the significant development obstacles included
              making the tail of the snake increase upon eating food and
              having a splash text appear the way it does. The splash text
              required me to make a whole new system, which you can view here:
              This game taught me a lot about arrays and handling multiple
              objects that requires a simultaneous update.
            </p>
          </div>
          <footer className="black">
            <div className="center Footermedia">
              <span href="#" className="grey-text text-lighten-5"><i className="fa fa-linkedin-square"></i></span>
              <span href="#" className="grey-text text-lighten-5"><i className="fa fa-github-square"></i></span>
              <span href="#" className="grey-text text-lighten-5"><i className="fa fa-codepen"></i></span>
            </div>

            <div className="center">
              <h6>Copyright © 2019</h6>
              <h6>Made with love by <span>Brian Shisanya.</span></h6>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Project5;
