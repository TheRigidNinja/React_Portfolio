import React from "react";

function Contacts({ activate }) {
  return (
    //Slide
    <div className="Contacts">
      <div className="Slide">

        <h2>ABOUT ME</h2>
        <p>Hi there</p>

        <a className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => {activate("Contacts");}}> READ MORE </a>
        
      </div>
    </div>
  );
}

export default Contacts;
