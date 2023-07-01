import React, {useState} from 'react';
import './index.css'; 

function Contact() {
  const [message, setMessage] = useState({
    name: '',
    email: '', 
    message: ''
  })
  
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    if (!message.name.trim() || !message.email.trim() || !message.message.trim()) {
      alert('Please fill in all fields before sending your message.')
      return
    } else if (!message.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      alert('Invalid email address - please try again!')
      return
    } else {

    alert('Thank you sending a message!')
    setMessage({
      name: '',
      email: '', 
      message: ''
    })
    }
  }

  return (
    <div className="Contact">
      <form className="Form"
        onSubmit={handleFormSubmit}>
      <h2>Contact Me</h2> 
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            name="name"
            type="text"
            value={message.name}
            onChange={(e) => setMessage({ ...message, name: e.target.value })} 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            name="email"
            type="email"
            value={message.email}
            onChange={(e) => setMessage({ ...message, email: e.target.value })} 
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            name="message"
            type="textarea"
            rows="10"
            value={message.message}
            onChange={(e) => setMessage({ ...message, message: e.target.value })} 
          />
        </div>
        <p className='privacy'>Please note that messages are sent to an API that is not private. If this is not your intention, please email me at olusogabolaji@gmail.com or message me on LinkedIn. Thanks and have a great day!</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
