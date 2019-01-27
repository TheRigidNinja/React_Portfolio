import React from "react";

function Project3({ activate }) {
  return (
    //Slide
    <div className="Project3">
      <div className="Slide">
        <div className="BriefDetails">
          <h3>AUTOTRADE</h3><br />
          <p>
            AutoTrade is a desktop application, made specifically to enhance
            my effectiveness over on the ASX Sharemarket Game. It helps me by
            advising stocks that have specific trend patterns given my current
            understanding of the share market.
          </p>
          <span className="btn-large waves-effect waves-light viewProject z-depth-0" onClick={() => { activate("Project3") }}>VIEW PROJECT</span>
        </div>
        
        <div className="row moreInfo">
          <div className="col s12 m6 l6 intro">
            <h4>Background</h4>
            <p>
              When trading in the Sharemarket Game, I found it difficult
              getting the type of stocks that were about to start a new trends.
              <br/>
              AutoTrader was the solution to spotting patterns that I thought
              were hints to a particular stock was about to start a new trend.
              This program gave me the flexibility for checking on over 200
              shares. As a result, the program saved me time looking over
              stocks that I wouldn't have otherwise consider investing in.
            </p>
          </div>
          <div className="col s12 m6 l6 intro">
            <h4>Project Scope</h4>
            <p>
              Because the idea of this system already exists and in service.
              It occurred to me to research about those particular bots to see
              if I could get a head start. To my surprise, they were little
              information freely and publicly available regarding share market
              bots. As an encounter, I improvised the architectural on how the
              system was going to work, making the design of the UI and
              finally setting up a communication system using JSON to for
              python and C# executable.
            </p>
          </div>
          <div className="col s12 m12 l12 details">
            <h4>Process</h4>
            <p>
              The first step was writing out a rough plan on how the different
              functions were going to work; I was able to pin down problems
              that I thought at the time were major and was able to put more
              focused on them. The initial aim was to have every resource that
              I needed before I start coding. This was further reinforced by
              my scepticism when it came to interacting with a website and
              performing button clicks using python - requests module. I used
              C# for the front-end interface and Python for handling all the
              HTTP requests, API calls and web scraping.
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

export default Project3;
