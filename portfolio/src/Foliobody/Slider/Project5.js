import React from "react";
import Img1 from "../../img/Project5/img2.png";
import Img2 from "../../img/Project5/img3.png";
import Img3 from "../../img/Project5/img4.png";
import Img4 from "../../img/Project5/img5.png";
import Img5 from "../../img/Project5/img6.png";
import Img6 from "../../img/Project5/img8.png";
import Img7 from "../../img/Project5/img7.png";


function Project5({ activate }) {
  return (
    //Slide
    <div className="Project5">
      <div className="Slide pink accent-3">

        <div className="BriefDetails">
          <h3>SLITHER CLASSIC</h3><br/>
          <p>
            Slither Classic is a project that combines some of slither.io and
            the classic snake features. It's a game that challenges the best
            of players.
          </p>
          <span className="btn-large waves-effect viewProject z-depth-0" onClick={() => { activate("Project5", "viewProject") }}>VIEW PROJECT</span>
        </div>
        <div className="MobNext">
          <span className="btn-small waves-effect waves-light z-depth-0 iconMobNext" onClick={() => { activate("Project5", "iconMobNext") }}></span>
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
          <div className="col s12 m12 l12 intro">
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

          <div className="col s12 m12 l12 details">
            <header>The following graphic displays when the game starts</header>
            <img className="responsive-img" src={Img1} alt="img"/></div>

          <div className="col s12 m12 l12 details"><img className="responsive-img" src={Img2} alt="img"/></div>

          <div className="col s12 m12 l12 details">
            <header>When you press arrow keys or WASD, the loop will break, and the following graphic appears.</header>
            <img className="responsive-img" src={Img3} alt="img"/></div>

          <div className="col s12 m12 l12 details"><img className="responsive-img" src={Img4} alt="img"/></div>

          <div className="col s12 m12 l12 details">
            <header>The following is the system that made it posssible to display the Splash screen the way it does.<br /> 
              Click the Button to Check it out ~~> <a href="https://old-portfolio-998bc.firebaseapp.com?Font_Maker" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark  indigo intextBTN"><i className="fa fa-rocket"></i></button></a></header>
            <img className="responsive-img" src={Img5} alt="img"/></div>

          <div className="col s12 m12 l12 details">
            <header>During the game play, you will see defferent colours appear.<br/><strong>Rule:</strong><br/>Only go over colours that are the same as your head</header>
            <img className="responsive-img" src={Img6} alt="img"/></div>

          <div className="col s12 m12 l12 details"><img className="responsive-img" src={Img7} alt="img"/>
            <div className="ProjectLinks">
              <a href="https://github.com/TheRigidNinja/Slither-Classic/tree/master/Slither-Classic" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Source</span><i className="fa fa-github-square"></i></button></a>
              <a href="https://old-portfolio-998bc.firebaseapp.com?SltherClassic" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Launch</span><i className="fa fa-rocket"></i></button></a>
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

export default Project5;
