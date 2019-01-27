import React from "react";

function Project7({ activate }) {
  return (
    //Slide
    <div className="Project7">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>DEFENDER</h3><br />
          <p>
            Defender is a space invader style game. It gives the player the
            challenge of surviving as long as they can without being touched
            by the red balls.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project7") }}>VIEW PROJECT</span>
        </div>

        <div className="row moreInfo">
          <div className="col s12 m6 l6 intro">
            <h4>Background</h4>
            <p>
              I began the project accidentally when attempting to create image
              tiles in Gravity designer. It became even more of a reason when
              I realised I wanted something to put my new multi-collision
              detection system to use.
            </p>
          </div>
          <div className="col s12 m6 l6 intro">
            <h4>Project Scope</h4>
            <p>
              While I had a clear thought on how the game was going to work
              down to the functionality due to space invader mechanics. There
              was still the work of integrating my new multi-collision system,
              creating the UI in Gravit designer and creating a CSS explosion
              animation.
            </p>
          </div>
          <div className="col s12 m12 l12 details">
            <h4>Process</h4>
            <p>
              Handling multiple enemy movement, keeping projectiles facing the
              same direction from the player to the enemies, making my
              collision system work with the CSS animated explosion were just
              a few of the problems I faced during development. The creation
              of this project taught me a lot especially when it comes to
              arrays and dealing with multiple objects simultaneous. I used
              HTML, CSS and JavaScript for this project.
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

export default Project7;
