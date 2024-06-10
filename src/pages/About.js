import React, { Component } from 'react';

import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          {/* Design your About me page */}
          <div>
              <div className="split left">
                <div className="centered">
                  <img 
                    className="profile_image"
                    src={profile_pic}
                    alt="Profile Pic"
                    ></img>
                </div>
              </div>
              <div className="split right">
                <div className="centered">
                  <div className="name_title">Emma Pham</div>
                  <div className="brief_description">
                    I am a computer science student at Universty of Houston! I am interested in Cybersecurity and AI!
                  </div>
                </div>
              </div>
            </div>

        </p>
      </div>
    )
  }
}