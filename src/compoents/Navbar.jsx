import React from 'react'
import {Link} from 'react-scroll'
import '../index.css'

const resume_pdf = 'http://localhost:3000/resume.pdf'
const Navbar = () => {
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
     <div className='nav'>
      <h3>Portfolio</h3>
      <div className='nav-list'>
        <Link  to='Home' smooth={true}  offset={-50} duration={500} className='nav-link'>Home</Link>
        <Link  to='About' smooth={true}  offset={0} duration={500} className='nav-link'>About</Link>
        <Link  to='Portfolio'  smooth={true}  offset={-15} duration={500} className='nav-link'>Porfolio</Link>
        <Link  to='Skills'  smooth={true}  offset={5} duration={500} className='nav-link'>Skills</Link>
      </div>
      <button className='download' onClick={()=>onButtonClick(resume_pdf)}>Download CV</button>
    </div> 
  )
}

export default Navbar
