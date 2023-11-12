import React from 'react'
import Navbar from './compoents/Navbar'
import Home from './compoents/Home'
import About from './compoents/About'
import Portfolio from './compoents/Portfolio'
import Skills from './compoents/Skills'
import Contacts from './compoents/contact'
import { Element } from 'react-scroll'

const App = () => {
  return (
    <div>
      <Navbar/>
    <Element name='Home'  className='element'><Home/></Element>
    <Element name='About' className='element'><About/></Element>
    <Element name='Portfolio' className='element'><Portfolio/></Element>
    <Element name='Skills' className='element'><Skills/></Element>
    <Element id='Contacts' className='element'><Contacts/></Element>
   
    </div>
  )
}

export default App
