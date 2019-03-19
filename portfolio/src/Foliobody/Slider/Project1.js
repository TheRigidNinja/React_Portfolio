import React from "react";
import Img1 from "../../img/Project1/img3.png";
import Img2 from "../../img/Project1/img2Mob.png";
import Img3 from "../../img/Project1/img4.png";
import Img4 from "../../img/Project1/img5.png";
import Img5 from "../../img/Project1/img6.png";

function Project1({ activate }) {
  return (
    //Slide
    <div className="Project1">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>Todo's</h3><br />
          <p>
            Todos is a React application, that just like any other To do app
            you can write your goals or tasks and set a date or time when it's
            expected to be completed.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project1","viewProject") }}>VIEW PROJECT</span>
        </div>
        
        <div className="MobNext">
          <span className="btn-small waves-effect waves-light z-depth-0 iconMobNext" onClick={() => { activate("Project1","iconMobNext") }}></span>
        </div>

        <div className="row moreInfo">
          <div className="col s12 m6 l6 intro">
            <h4>Background</h4>
            <p>
              When learning React, I felt the need to create a simple project
              that can accumulate my knowledge in practice. The resulting
              solution was TODO'S. A place where I was to test out different
              components and libraries.
            </p>
          </div>
          <div className="col s12 m6 l6 intro">
            <h4>Project Scope</h4>
            <p>
              The project required React-redux so setting it up was a
              priority, firebase to authenticate a user in the app and finally
              adding Items in the Todo list and making sure it communicates to
              firebase for the data to be stored.
            </p>
          </div>
          <div className="col s12 m12 l12 intro">
            <h4>Process</h4>
            <p>
              The goal was simple - to make a todo app that incorporates what
              I had learned in react. Specifically using React - redux and
              third-party libraries such as firebase and other API’s. The main
              screenshot can be seen below.
            </p>
          </div>
          
          <div className="col s12 m12 l12 details">
            <header>Login is required. I use it to store user data in Cloud Firestore.</header>
            <img className="responsive-img" src={Img1} alt="img"/></div>

          <div className="col s12 m12 l12 details">
            <header>The app was made specifically for mobile use.</header>
            <img className="responsive-img" src={Img2} alt="img"/></div>

          <div className="col s12 m12 l12 details">
            <header>The following is the interface that is seen when a user wants to add a Todo Task.</header>
            <img className="responsive-img" src={Img5} alt="img"/></div>

          <div className="col s12 m12 l12 details">
            <header>The following is firebase Cloud Firestore. The data you see on your right is the actual values from the application.</header>
            <img className="responsive-img" src={Img4} alt="img" /></div>

          <div className="col s12 m12 l12 details">
            <img className="responsive-img" src={Img3} alt="img" />
            <div className="ProjectLinks">
              <a href="https://github.com/TheRigidNinja/React_TodoList/tree/master/todo_app" target="_blank" rel="noopener noreferrer" ><button className="btn-large waves-effect waves-dark"><span>Source</span><i className="fa fa-github-square"></i></button></a>  
              <a href="https://reactodoapp.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="btn-large waves-effect waves-dark"><span>Launch</span><i className="fa fa-rocket"></i></button></a>
              <a href="https://therigidninja.firebaseapp.com/" target="_blank" rel="noopener noreferrer" ><button className="btn-large waves-effect waves-dark"><span>V.2</span><i className="fa fa-rocket"></i></button></a>
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

export default Project1;
