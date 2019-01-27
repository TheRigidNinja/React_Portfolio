import React from 'react'

function Project1({activate}) {
  return (//Slide  
    <div className="Project1">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>Portfolio</h3><br/>
          <p>
            A website for showcasing projects that I’ve worked on.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project1") }}>VIEW PROJECT</span>
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
              <div className="col s12 m12 l12 details">
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
          
                  Then finally development. - Old
                  portfolio v.1 - Used JavaScript,Ajax,PHP - Old portfolio v.2 -
                  used jQuery, Bootstrap 4, HTML SVG, and Firebase API - This
                  portfolio v.3 - Used React, Materializecss and Jquery. All of
                  these sites are responsive, as should every website be by now.
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
  )
}

export default Project1;