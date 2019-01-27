import React from 'react'

function Project2({ activate }) {
  return (//Slide  
    <div className="Project2">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>Inventory System</h3><br/>
          <p>
            This is an online web app that helps both teachers and students
            with the process of students borrowing video production equipment.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project2") }}>VIEW PROJECT</span>
        </div>

        
        <div className="row moreInfo">
          <div className="col s12 m6 l6 intro">
            <h4>Background</h4>
            <p>
              As a part of my information technology course, we were tasked
              with creating and solving a real-world problem. I took the
              initiative to identify a problem that existed in the video
              production department. Upon discussion and asking questions I
              realised the video production department needed a software
              solution to deviate from their current paper-based system. It
              was used to track what the student had borrowed and then later
              grabbing the specific forms and manually entering the data on an
              excel sheet. I created the INVENTORY SYSTEM to address the
              issue, and as a result, it sped up the process the student took
              when borrowing production equipment.
            </p>
          </div>
          <div className="col s12 m6 l6 intro">
            <h4>Project Scope</h4>
            <p>
              The core mechanism of the fully-fledged application already
              existed on a paper for their old system. My work was to bring
              the paper-based system online and moreover integrate the data
              into an excel sheet so that it can undergo further confidential
              manipulation.
            </p>
          </div>
          <div className="col s12 m12 l12 details">
            <h4>Process</h4>
            <p>
              The Inventory System used technology such as Bootstrap4 for its
              UI, JavaScript for dynamic interaction, Firebase API for storing
              student data and Microsoft VBA for grabbing the data from
              firebase and displaying it on an excel sheet.
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

export default Project2;