import React from 'react'
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contacts= () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qhpsjxq', 'template_wnyh7sr', form.current, {
        publicKey: 'Bd-JpcsGogpL0CvkN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='details'>
      <h1>Contact Me</h1>
      <h3>Please fill out the form below to dicuss the any work opportunity</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className='form'>
        <input className='input' type="text" placeholder='Your Name' name="user_name" />
        </div>
        <div className='form'>
        <input className='input' type="email" placeholder='Your email' name="user_email" />
        </div>
        <div className='form'>
        <textarea className='input'  rows="6" cols="30" placeholder='Your message' name="message" />
        </div>
        <div className='form'>
            <button className='submit'>Submit</button>
        </div>
        <div className='linkedin'>
        <a href="https://www.linkedin.com/in/sumit-bhardwaj-86a80620a/"><img className='linkedin-logo' src="linkedin.png" alt="" /></a>
        </div>
      </form>
    </div>
  )
}

export default Contacts
