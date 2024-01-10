import React from 'react'
import './intro.css'
import bg1 from '../../assets/bg1.jpg'
import { Link } from 'react-scroll'

const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Samriti Raj</span><br/>Web Developer</span>
            <p className="introPara">I'm passionate about creating engaging and interactive web applications,<br/>and this is where I showcase my journey as a front-end developer.</p>
            <a href='https://drive.google.com/file/d/12YZMAF_ZX1NwnKp5JAKOfwrbq0JaLkhs/view?usp=drive_link'><button className='btn'>See my Resume</button></a>
        </div>

        <img src={bg1} alt="my_image" className='bg'/>
    </section>
  )
}

export default intro
