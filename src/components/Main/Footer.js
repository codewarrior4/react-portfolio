import React from 'react';
import './index.css';

function Footer() {

  const phoneCall = () => {
    alert('Please call me at 206-422-0810!')
  }
  return (
        <footer className="Footer">
            <address>
                <a href="tel:+2347088772933"><img alt="phone logo" src={require('./assets/Phone.png')} width='50' /></a>
                <a href="mailto:olusogabolaji@gmail.com" target='_blank'><img alt="email logo" src={require('./assets/Email.png')} width='50'/></a>
                <a href="https://github.com/TessyJ" target="_blank"><img alt="Github logo" src={require('./assets/GitHubLogo.png')} width='50'/></a>
                <a href="https://www.linkedin.com/in/theresa-olusoga-2012a9254/" target="_blank"><img alt="LinkedIn logo" src={require('./assets/LinkedInLogo.png')} width='50'/></a>
            </address>
        </footer>
  );
}

export default Footer;
