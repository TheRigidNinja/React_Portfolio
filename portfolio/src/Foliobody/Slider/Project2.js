import React from 'react'
import Img1 from "../../img/Project2/img2.png";
import Img2 from "../../img/Project2/img3.png";
import Img3 from "../../img/Project2/img4.png";

function Project2({activate}) {
  return (//Slide  
    <div className="Project2">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>Portfolio</h3><br/>
          <p>
            This is my personal website that showcases projects that I’ve worked on.
            It holds development details and demos for each project you see.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project2", "viewProject") }}>VIEW PROJECT</span>
        </div>
        <div className="MobNext">
          <span className="btn-small waves-effect waves-light z-depth-0 iconMobNext" onClick={() => { activate("Project2", "iconMobNext") }}></span>
        </div>

        <div className="row moreInfo">
              <div className="col s12 m6 l6 intro">
                <h4>Background</h4>
                <p>
                  As a developer, I pick up new skills and learn different
                  technologies as time progress. Because of this updating, my
                  online presence becomes important to unleash what I have to
                  offer to those who are interested and may have otherwise not
                  known.
                </p>
              </div>
          <div className="col s12 m6 l6 intro">
                <h4>Project Scope</h4>
                <p>
                  I’ve made three versions of portfolios including this one, they
                  all involved making everything from scratch. Programming the
                  functionally to make sure the UX is engaging — especially to my
                  target audience — as well as making an attractive UI.
                </p>
              </div>
              <div className="col s12 m12 l12 intro">
                <h4>Process</h4>
                <p>
                  When creating a website I always follow the SDLC and PLC
                  process, I believe for me it simplifies and streamlines the
                  development. The design process always starts with a pencil and
                  paper, scribbling ideas and concepts, thinking about the problem
                  and the solution. Once I have an idea of what I want to achieve,
                  I’ll then sit down at my computer and start with wireframes and
                  low-level mockups. This is followed by adding imagery,
                  typography design and details.
                  <br/>
                  Then finally development. 
                </p>
              </div>

              <div className="col s12 m12 l12 details">
                <header><strong>Portfolio V.1</strong> - Used: JavaScript,Ajax,PHP</header>
                <img className="responsive-img" src={Img1} alt="img"/>
                <div className="ProjectLinks">
                   <a href="https://github.com/TheRigidNinja/Portfolio-1.0" target="_blank" rel="noopener noreferrer" ><button className="btn-large waves-effect waves-dark"><span>Source</span><i className="fa fa-github-square"></i></button></a>
                  <a href="https://brianshisanya.000webhostapp.com/Official_Portfolio/index.html" target="_blank" rel="noopener noreferrer" ><button className="btn-large waves-effect waves-dark"><span>Launch</span><i className="fa fa-rocket"></i></button></a>
                </div>
              </div>

              <div className="col s12 m12 l12 details">
                <header><strong>Portfolio V.2</strong> - Used: jQuery, Bootstrap 4, HTML SVG, and Firebase API</header>
                <img className="responsive-img" src={Img2} alt="img"/>
                <div className="ProjectLinks">
                  <a href="https://github.com/TheRigidNinja/Portfolio-2.0" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Source</span><i className="fa fa-github-square"></i></button></a>
                  <a href="https://old-portfolio-998bc.firebaseapp.com?Portfolio" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark" rel="noopener" ><span>Launch</span><i className="fa fa-rocket"></i></button></a>
                </div>
              </div>

            <div className="col s12 m12 l12 details">
              <header><strong>This Portfolio V.3</strong> - Used: React, Materializecss and Jquery</header>
              <img className="responsive-img" src={Img3} alt="img"/>
              <div className="ProjectLinks">
              <a href="https://github.com/TheRigidNinja/React_Portfolio" target="_blank" rel="noopener noreferrer" ><button className="btn-large waves-effect waves-dark"><span>Source</span><i className="fa fa-github-square"></i></button></a>
              <a href="https://brianshisanya.com/" rel="noopener noreferrer" ><button className="btn-large waves-effect waves-dark"><span>Launch</span><i className="fa fa-rocket"></i></button></a>
              </div>
            </div>

          <div className="col s12 m12 l12 details">
            <header>These sites are all responsive, as should every website be by now.</header>
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
  )
}

export default Project2;