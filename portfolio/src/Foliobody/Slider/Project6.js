import React from "react";
import Img1 from "../../img/Project6/img2.png";
import Img2 from "../../img/Project6/img3.png";

function Project6({ activate }) {
  return (
    //Slide
    <div className="Project6">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>DEFENDER</h3><br />
          <p>
            Defender is a space invader style game. It gives the player the
            challenge of surviving as long as they can without being touched
            by the red balls.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project6", "viewProject") }}>VIEW PROJECT</span>
        </div>
        <div className="MobNext">
          <span className="btn-small waves-effect waves-light z-depth-0 iconMobNext" onClick={() => { activate("Project6", "iconMobNext") }}></span>
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
          <div className="col s12 m12 l12 intro">
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

          <div className="col s12 m12 l12 details">
            <header>I used Gravit Designer to create sprites that you see in the game.</header>
            <img className="responsive-img" src={Img2} alt="img"/></div>

          <div className="col s12 m12 l12 details">
            <header>The following graphic is the screen that appears when the game starts.</header>
            <img className="responsive-img" src={Img1} alt="img"/>
            <div className="ProjectLinks">
              <a href="https://github.com/TheRigidNinja/Battle-ship" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Source</span><i className="fa fa-github-square"></i></button></a>
              <a href="https://old-portfolio-998bc.firebaseapp.com?Defender" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Launch</span><i className="fa fa-rocket"></i></button></a>
            </div>
            </div>


          <footer className="black">
            <div className="center Footermedia">
              <a href="https://www.linkedin.com/in/brian-shisanya-7a5a6516a/" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-5"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://github.com/TheRigidNinja" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-5"><i className="fa fa-github-square"></i></a>
              <a href="https://codepen.io/dashboard/" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-5"><i className="fa fa-codepen"></i></a>
            </div>


            <div className="center">
              <h6>Copyright © 2019</h6>
              <h6>Made by <span>Brian Shisanya.</span></h6>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Project6;
