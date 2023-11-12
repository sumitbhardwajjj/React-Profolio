import React from 'react'
import '../index.css'

const Contacts= () => {
  return (
    <div className='details'>
      <h1>Contact Me</h1>
      <h3>Please fill out the form below to dicuss the any work opportunity</h3>
      <form>
        <div className='form'>
        <input className='input' type="text" placeholder='Your Name' />
        </div>
        <div className='form'>
        <input className='input' type="text" placeholder='Your Address' />
        </div>
        <div className='form'>
        <textarea className='input'  rows="6" cols="30" placeholder='Your message' />
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
