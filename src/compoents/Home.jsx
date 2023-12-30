import React from 'react'
import '../index.css'
import Navbar from './Navbar'

 const resume_pdf = './public/resume.pdf'

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
   <h1>Welcome</h1>
    <h2> I am <span>Sumit Bhardwaj</span> and I am 21 years old , from Mumbai India.
    I study full stack web development at almabetter
    My hobbies is programming and web development</h2>
    <button className='contact' onClick={()=>{document.getElementById('Contacts').scrollIntoView({behavior:'smooth'})}}>Contact Me</button>
    <button className='download' onClick={()=>onButtonClick(resume_pdf)}>Download CV</button>
   </div>
   </div>
  )
}

export default Home
