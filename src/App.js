import React from 'react';
import './App.css';
import './template1CSS.css'

function App() {
  return (
    <div id="template">
      <div className="preview cv-preview">
        <header>
          <h1 id="name"></h1>
          <ul>
            <li>
              <span className="call"></span>
              <span id="mobile"></span>
            </li>
            <li>
              <span className="Post"></span>
              <span id="email"></span>
            </li>
          </ul>
        </header>
        <div className="container">
          <section className="edu-details">
            <h2>
              <span className="edudetails"></span>
            </h2>
            <ul>
              <li>
                <span className="key">Graduation</span>
                <span id="doctorate"></span>
                <span id="pg"></span>
                <span id="ug"></span>
              </li>
              <li>
                <span className="key">Class XII</span>
                <span id="class12"></span>
              </li>
              <li>
                <span className="key">Class X</span>
                <span id="class10"></span>
              </li>
            </ul>
          </section>
          <section className="work-details"></section>
          <section className="person-details">
            <h2>
              <ul>
                <li>
                  <span className="key">Current Location</span>
                  <span id="currentLocation"></span>
                </li>
                <li>
                  <span className="key">HomeTown</span>
                  <span id="homeLocation"></span>
                </li>
                <li>
                  <span className="key">Date of birth</span>
                  <span id="dob"></span>
                </li>
                <li>
                  <span className="key">Gender</span>
                  <span id="gender"></span>
                </li>
                <li>
                  <span className="key">Looking for a </span>
                  <span id="workPreference"></span>
                </li>
                <li>
                  <span className="key">Can start working </span>
                  <span id="startWorking"></span>
                </li>
                <li>
                  <span className="key">Preferred location </span>
                  <span id="preferedLocation"></span>
                </li>
              </ul>
            </h2>
          </section>
        </div>
      </div>
      <p>{console.log(window.localStorage.getItem('jsonDATA'))}</p>
    </div>
    
  );
}

export default App;
