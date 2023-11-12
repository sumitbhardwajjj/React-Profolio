import React from 'react'
import '../index.css'

const Home = () => {
  return (
   <section className='home'>
    <h1>Welcome</h1>
    <h2> I am <span>Sumit Bhardwaj</span> and I am 21 years old , from Mumbai India.
    I study full stack web development at almabetter
    My hobbies is programming and web development</h2>
    <button className='contact' onClick={()=>{document.getElementById('Contacts').scrollIntoView({behavior:'smooth'})}}>Contact Me</button>
   </section>
  )
}

export default Home
