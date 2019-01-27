import React from "react";

function Project4({ activate }) {
  return (
    //Slide
    <div className="Project4">
      <div className="Slide">

        <div className="BriefDetails">
          <h3>Todo's</h3><br />
          <p>
            Todos is a React application, that just like any other To do app
            you can write your goals or tasks and set a date or time when it's
            expected to be completed. It also gives quotes based on a specific
            time of day to keep the energy flowing.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project4") }}>VIEW PROJECT</span>
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
          <div className="col s12 m12 l12 details">
            <h4>Process</h4>
            <p>
              The goal was simple - to make a todo app that incorporates what
              I had learned in react. Specifically using React - redux and
              third-party libraries such as firebase and other API’s. The main
              screenshot can be seen below.
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

export default Project4;
