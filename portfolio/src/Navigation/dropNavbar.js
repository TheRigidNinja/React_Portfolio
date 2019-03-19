import React from 'react'

function dropNavbar() {
  return (
    <div className="dropMenu">
      <div className="container center dropLink">
        <h2 className="deep-purple-text text-darken-2">PORTFOLIO</h2>
        <h2 className="grey-text text-lighten-5" >ABOUT ME</h2>
      </div>

      <div className="center social">
        <a href="https://www.linkedin.com/in/brian-shisanya-7a5a6516a/" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-5"><i className="fa fa-linkedin-square"></i></a>
        <a href="https://github.com/TheRigidNinja" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-5"><i className="fa fa-github-square"></i></a>
        <a href="https://codepen.io/dashboard/" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-5"><i className="fa fa-codepen"></i></a>
      

        <p className="grey-text text-lighten-5 center text-center copyright">
          Copyright © 2019 <br/>
          Made by <span>Brian Shisanya.</span>
        </p>

      </div>
    </div>
  )
}

export default dropNavbar;
