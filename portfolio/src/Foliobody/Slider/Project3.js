import React from "react";
import Img2 from "../../img/Project3/img2.png";

function Project3({ activate }) {
  return (
    //Slide
    <div className="Project3">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>DEFENDER</h3><br />
          <p>
          Gmail Unsubscriber is a desktop app that allows me to unsubscribe or block junk mails and any other emails that are not classified as "important" in my account.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project3", "viewProject") }}>VIEW PROJECT</span>
        </div>
        <div className="MobNext">
          <span className="btn-small waves-effect waves-light z-depth-0 iconMobNext" onClick={() => { activate("Project6", "iconMobNext") }}></span>
        </div>

        <div className="row moreInfo">
          <div className="col s12 m6 l6 intro">
            <h4>Background</h4>
            <p>
            Because my Gmail inbox flooded with emails I cared less about; I came up with a program that allowed me within a few clicks to unsubscribe for all unwanted emails in my Gmail inbox.
            </p>
          </div>
          <div className="col s12 m6 l6 intro">
            <h4>Project Scope</h4>
            <p>
            When I started this project, I knew I was going to use C# Bunifu as a front-end, in which case the UI was going to contain all the different option to delete or block unwanted emails and Python as a back-end to handle the intricate means of removing or blocking emails.
            </p>
          </div>
          <div className="col s12 m12 l12 intro">
            <h4>Process</h4>
            <p>
            The process was surprisingly straightforward and never really hit problems I wasn’t able to solve. I used the C# Bunifu framework to make the UI look good and enable the communication between C# and Python executable through writing back and forth using a JSON.
            </p>
          </div>

          <div className="col s12 m12 l12 details">
            <header>The following screen shot is the main UI.</header>
            <img className="responsive-img" src={Img2} alt="img"/>
            <div className="ProjectLinks">
              <a href="https://github.com/TheRigidNinja/Unsubscriber" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Source</span><i className="fa fa-github-square"></i></button></a>
              <a href="https://old-portfolio-998bc.firebaseapp.com/?Unsubscriber" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Launch</span><i className="fa fa-rocket"></i></button></a>
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

export default Project3;
