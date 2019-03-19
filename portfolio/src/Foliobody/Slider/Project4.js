import React from 'react'
import Img1 from "../../img/Project4/img2.png";
import Img2 from "../../img/Project4/img3.png";
import Img3 from "../../img/Project4/img4.png";
import Img4 from "../../img/Project4/img5.png";
import Img5 from "../../img/Project4/img6.png";
import Img6 from "../../img/Project4/img7.png";
import Img7 from "../../img/Project4/img8.png";

function Project4({ activate }) {
  return (//Slide  
    <div className="Project4">
      <div className="Slide black">

        <div className="BriefDetails">
          <h3>Inventory System</h3><br />
          <p>
            This is an online web app that helps both teachers and students
            with the process <br/>of students borrowing video production equipment.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project4", "viewProject") }}>VIEW PROJECT</span>
        </div>
        <div className="MobNext">
          <span className="btn-small waves-effect waves-light z-depth-0 iconMobNext" onClick={() => { activate("Project4", "iconMobNext") }}></span>
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
              excel sheet. I created the Inventory System to address the
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
          <div className="col s12 m12 l12 intro">
            <h4>Process</h4>
            <p>
              The Inventory System used technology such as Bootstrap4 for its
              UI, JavaScript for dynamic interaction, Firebase API for storing
              student data and Microsoft VBA for grabbing the data from
              firebase and displaying it on an excel sheet.
            </p>
          </div>

          <div className="col s12 m12 l12 details">
            <header>When the application starts, it requires a user to sign in. <br /> I used firebase plugin to get the UI working</header>
            <img className="responsive-img" src={Img1} alt="img" /></div>

          <div className="col s12 m12 l12 details">
            <header>The following displays after a user has logged in. <br /> A user can see what has yet return</header>
            <img className="responsive-img" src={Img2} alt="img" /></div>

          <div className="col s12 m12 l12 details">
            <header>
            By Pressing on the equipment itself, the web app allows you to return now equipment<br/>Students must always throw the app and remove the item from their list.
              </header>
            <img className="responsive-img" src={Img3} alt="img" /></div>

          <div className="col s12 m12 l12 details">
            <header>This is a firebase dashboard. Its where student information regarding what they have borrowed gets stored.</header>
            <img className="responsive-img" src={Img4} alt="img" /></div>
          <div className="col s12 m12 l12 details">
            <header>This is a teachers view on an excel spread shit. They can see what students have borrowed<br /></header>
            <img className="responsive-img" src={Img5} alt="img" /></div>

          <div className="col s12 m12 l12 details">
            <header>The following is the inventory</header>
            <img className="responsive-img" src={Img6} alt="img" /></div>

          <div className="col s12 m12 l12 details">
            <header>This graph represents Items left in the invetory.<br /> Blue Shows ~ Item borrowed, Orange ~ Item in the inventory</header>
            <img className="responsive-img" src={Img7} alt="img" />
            <div className="ProjectLinks">
              <a href="https://github.com/TheRigidNinja/VideoProduction" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Source</span><i className="fa fa-github-square"></i></button></a>
              <a href="https://old-portfolio-998bc.firebaseapp.com?Inventory-System" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Launch</span><i className="fa fa-rocket"></i></button></a>
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
  )
}

export default Project4;