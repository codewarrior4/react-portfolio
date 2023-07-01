import React from "react";
import "./index.css";

function Resume() {
  return (
    <div className="Resume"> 
      <a
        className="ResumeBtn"
        href={require("./my-resume.docx")}
        target="_blank"
      >
        Download Resume{" "}
      </a>
      <div className="format">
         
        <div className="resumeContainer">
          <h3>Technical Skills</h3>
          <ul className="Skills">
            <div className="Column">
              <li>Javascript</li> 
              <li>Object-Oriented <br/> Programming (OOP)</li> 
              <li>Node.js</li>
              <li>Express.js</li>
              <li>jQuery</li>
              <li>SQL/MySql</li>
              <li>NoSQL/MongoDB</li>
              <li>ORM/ODMs</li>
              <li>RESTful APIs</li>
            </div>
            <div className="Column"> 
              <li>Heroku</li> 
              <li>Spring</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>Git/Version Control</li>  
            </div>
          </ul>
        </div>
        <div className="resumeContainer">
          <h3>Education</h3>
          <div className="Education">
            <div className="item firstitem">
              <p>Graduate Diploma in  </p>
              <p>Avid Media Composer Video Editor at cat ensenanza centro para el arte y la tecnologia s.c Mexico</p>
              <p>May 2016</p>
            </div>
            <br/>
            <div className="item">
              <p>Olusegun Agagu University of Science and Technology, Okitipupa, City, Edo State, Nigeria</p>
              <p>Bachelor’s degree in Computer Science</p>
              <p>June 2002</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Resume;
