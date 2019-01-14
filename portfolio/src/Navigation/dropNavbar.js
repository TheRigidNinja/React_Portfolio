import React from 'react'
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

function dropNavbar() {
  return (
    <div className="dropMenu">
      <div className="container center dropLink">
        <Typography component="h2" variant="h2" gutterBottom className="deep-purple-text text-darken-2">PORTFOLIO</Typography>
        <Typography component="h2" variant="h2" gutterBottom className="grey-text text-lighten-5">ABOUT ME</Typography>
      </div>

      <div className="center social">
        <a href="#" className="grey-text text-lighten-5"><i className="fa fa-linkedin-square"></i></a>
        <a href="#" className="grey-text text-lighten-5"><i className="fa fa-github-square"></i></a>
        <a href="#" className="grey-text text-lighten-5"><i className="fa fa-codepen"></i></a>
      </div>

      <Typography variant="subtitle1" gutterBottom className="grey-text text-lighten-5 center text-center copyright">
        Copyright © 2019 <br/>
      Made with love by Brian Shisanya.
      </Typography>
    </div>
  )
}

export default dropNavbar
