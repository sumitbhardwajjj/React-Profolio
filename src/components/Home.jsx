import React from 'react'
import '../styles/Home.css'
import Navbar from './Navbar'

 const resume_pdf = 'http://localhost:3000/resume.pdf'

const Home = () => {

  const onButtonClick = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download',fileName);
    document.body.append(aTag);
    aTag.click();
    aTag.remove();
  };
  
  return (
   <div>
     <Navbar/>
   <div className='home'>
   <div className='header'> 
    <h2>Hi, I am <b>Sumit Bhardwaj</b><br /><span>I am 21 years old , from Mumbai India.
    I study full stack web development at almabetter <br /> My hobbies is programming and web development</span></h2>
    <button className='contact' onClick={()=>{document.getElementById('Contacts').scrollIntoView({behavior:'smooth'})}}>Contact Me</button>
    <button className='download' onClick={()=>onButtonClick(resume_pdf)}>Download CV</button>
  </div>
    <div className='head'><img src="Group.png" alt="" /></div></div>
   </div>
  )
}

export default Home
