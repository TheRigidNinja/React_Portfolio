import React from "react";

function Project6({ activate }) {
  return (
    //Slide
    <div className="Project6">
      <div className="Slide">
        
        <div className="BriefDetails">
          <h3>GMAIL UNSUBSCRIBER</h3><br/>
          <p>
            Gmail Unsubscriber is a desktop app that lets me unsubscribe or
            block junk mails and any other emails that are not classified as
            "important" in my Gmail account. The goal was to make a simple
            program that lets me unsubscribe to emails within a few clicks.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project6") }}>VIEW PROJECT</span>
        </div>

        <div className="row moreInfo">
          <div className="col s12 m6 l6 intro">
            <h4>Background</h4>
            <p>
              Because my Gmail inbox flooded with emails I care less about; I
              decided to come up with a program that lets me within a few
              clicks it unsubscribes to all unwanted emails in my Gmail inbox.
            </p>
          </div>
          <div className="col s12 m6 l6 intro">
            <h4>Scope</h4>
            <p>
              When I started this project, I knew I was going to use C# Bunifu
              as a front-end, in which case the UI was going to contain all
              the different option to delete or block unwanted emails and
              Python as a back-end to handle the intricate means of removing
              or blocking emails.
            </p>
          </div>
          <div className="col s12 m12 l12 details">
            <h4>Process</h4>
            <p>
              The process was surprisingly straightforward and never really
              hit problems I wasn’t able to solve. I used the C# Bunifu
              framework to make the UI look good and enable the communication
              between C# and Python executable through writing back and forth
              using a JSON.
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

export default Project6;
