import './index.css';
import React from 'react';

function About() {
  return (
    <div className="About"> 
      <img alt="Headshot" src={require("./mypicture.jpg")} width='40%' className='headshot'/>            
      <p> My name is Theresa Bolaji Olusoga. I'm from Nigeria but currently living in Canada. I graduated in computer science from Olusegun Agagu University of Science and Technology, Okitipupa, Ondo State, Nigeria. Also Diploma in Avid media composer editing and graphic Designer at Cat Ensenanza Technologies, Mexico. I'm currently studying Full Stack Developer at Carleton University.</p>
      <br/>
      <p>My hobbies include innovation, volunteer coaching for Girls on The Run Puget Sound, country music, sports medicine, hiking, soccer, Peloton (@SeymourSpeed), reading, spending time with friends/family, HGTV and interior design. I am a member of ATPPS, NATA and the Gamma Phi Beta sorority. Please reach out via my contact form, <a href="https://www.linkedin.com/in/theresa-olusoga-2012a9254/" class="specialLink tooltip">LinkedIn,<span class="tooltiptext">Click me!</span></a> or <a href='mailto:olusogabolaji@gmail.com' class="specialLink tooltip">email<span class="tooltiptext">Click me!</span></a> to connect!</p>
      
       
    </div>
  );
}

export default About;
