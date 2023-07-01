import React from 'react';
import './index.css';
import Project from './Project'; 
const imgTechBlog =require ("./assets/mytechblog.png"); 
const imgeCommerce =require ("./assets/eCommerce.png");
const imgEmployeeTracker =require ("./assets/Employee.png");
const myweather =require ("./assets/myweather.png");
const imgSocialNetwork =require ("./assets/socialmedia.png")
const myportfolio = require ("./assets/my-portfolio.png")
const jate = require ("./assets/jate.png")

function Portfolio() {
  return (
    <div className="Portfolio">
      
    <div className='container'>
      
    
      <Project 
      name="Tech Blog" 
      deployed="https://tessyj.github.io/Tech-Blog/" 
      github="https://github.com/TessyJ/Tech-Blog" 
      image={imgTechBlog}
      code="Node.js|  Bulma | MySql | Sequelize | RESTful | MVC | Handlebars"
      description="The Tech-Blog presented with the homepage presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in, add comments and Edit post."
      />
      <Project 
      name="eCommerce Back End" 
      deployed="https://tessyj.github.io/E-Commerce-Back-End/" 
      github="https://github.com/TessyJ/E-Commerce-Back-End" 
      image={imgeCommerce}
      code="MySql | Sequelize | Express"
      description="The E-Commerce-Back-End configured a working Express.js API to use Sequelize to interact with a MySQL database and a link to a walkthrough video demonstrating its functionality and the acceptance criteria."
      />
      <Project 
      name="Employee Tracker" 
      deployed="" 
      github="https://github.com/TessyJ/Employee-tracker" 
      image={imgEmployeeTracker}
      code="Node.js | Inquirer | MySql"
      description="This Employee Tracker could view and manage my company's departments, roles, and employees. The walkthrough video was able to demonstrate viewing, adding and deleting both departments, roles and employees to the table."
      />
      <Project 
      name="Social Network API" 
      deployed="" 
      github="https://github.com/TessyJ/social-media" 
      image={imgSocialNetwork}
      code="Javascript | MongoDB | Mongoose ORM | Moment.js"
      description="The goal of this project is to build an API for a social network that allows users to interact. This API is built using NoSQL database (MongoDB) and ORM (Mongoose) with RESTful routing and full CRUD functionality. Checkout the video on GitHub to view it in action!"
      />
      <Project 
      name="JATE text Editor" 
      deployed="https://pwa-note-editor-861a86787a44.herokuapp.com/" 
      github="https://github.com/TessyJ/Text-Editor" 
      image={jate}
      code="Node.js|Html | PWA"
      description="The Progressive Web Applications (PWA): Text Editor runs webpack plugins to a generated HTML file, a service worker, and a manifest file. IndexedDB created database storage and retrieved and saved the text editor. the web application install button, Then download as an icon on my desktop The Progressive Web Applications (PWA): Text Editor was deployed to Heroku."
      />
      <Project 
      name="Story Book" 
      deployed="https://story-books.herokuapp.com/" 
      github="https://github.com/TessyJ/Stroy-Book" 
      image={myportfolio}
      code="Javascript  | Bootstrap | Node | Sequelize"
      description="StoryBook is an online platform where people can share stories and experiences. Storybook connects people in a creative and meaningful way, helping them come together to share their stories and help each other grow. With StoryBook, people can tell stories not only to themselves, but others as well! Whether it be through a poem song lyric or even just a heartwarming personal story, with StoryBook the possibilities are endless."
      />
      <Project 
      name="Weather Dashboard" 
      deployed="https://tessyj.github.io/weather-forecast/" 
      github="https://github.com/TessyJ/weather-forecast" 
      image={myweather}
      code="Javascript | jQuery | Bootstrap | Open Weather API"
      description="This Webpage is a simple weather forecast application. It provides a city weather forecast and also provides a five-day weather forecast.
      It also saves the search history to get the last item searched."
      />
      <Project 
      name="My portfolio" 
      deployed="https://tessyj.github.io/my-profile/" 
      github="https://github.com/TessyJ/my-profile" 
      image={myportfolio}
      code="Javascript | jQuery | Bootstrap "
      description="This webpage about My portfolio showcases excellent interpersonal skills and talents. Demonstrated passion for my services and contact information for employers looking to fill a part-time or full-time position."
      />
      </div>
    </div>
  );
}

export default Portfolio;

// <Project 
// name="" 
// deployed="" 
// github="" 
// image={}
// code=""
// description=""
// />
