import React from 'react'
import { Link, withRouter} from "react-router-dom";

function dropNavbar({aboutMe}) {
  return (
    <div className="dropMenu">
      <div className="container center dropLink">
        <h2 className="deep-purple-text text-darken-2">PORTFOLIO</h2>
        <Link to="/Aboutme"><h2 className="grey-text text-lighten-5" >ABOUT ME</h2></Link>
      </div>

      <div className="center social">
        <a href="#" className="grey-text text-lighten-5"><i className="fa fa-linkedin-square"></i></a>
        <a href="#" className="grey-text text-lighten-5"><i className="fa fa-github-square"></i></a>
        <a href="#" className="grey-text text-lighten-5"><i className="fa fa-codepen"></i></a>
      </div>

      <h6 className="grey-text text-lighten-5 center text-center copyright">
        Copyright © 2019 <br/>
      Made with love by Brian Shisanya.
      </h6>
    </div>
  )
}

export default withRouter(dropNavbar);
