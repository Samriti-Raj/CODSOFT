import React from 'react'
import './skills.css'
import websitedesign from '../../assets/websitedesign.png'
import skill1 from '../../assets/skill1.png'
import bootstrap from '../../assets/bootstrap.png'
import js from '../../assets/js.png'
import nodejs from '../../assets/nodejs.png'
import mongoDB from '../../assets/mongoDB.png'
import express from '../../assets/express.png'
import git from '../../assets/git.png'

const skills = () => {
  return (
    <>
    <section id='skills'>
      <span className="skillTitle">What I do?</span>
      <span className="skillDesc"></span>
      <div className="skillBars">
        <div className="skillBar">
        <div className="con">
      <div class="sec1">
      <img src={websitedesign} alt="website-design" className='skillBarImg'/>
          <div className="skillBarText">
            <h2>HTML,CSS</h2>
          </div>
      </div>
      <div className="sec2">
      <img src={bootstrap} alt="bootstrap" className='skillBarImg'/>
          <div className="skillBarText">
            <h2>Bootstrap</h2>
          </div>
      </div>
      <div className="sec3">
      <img src={js} alt="javascript" className='skillBarImg'/>
          <div className="skillBarText">
            <h2>Javascript</h2>
          </div>
      </div>
      <div className="sec4">
      <img src={skill1} alt="reactjs" className='skillBarImg'/>
          <div className="skillBarText">
            <h2>ReactJS</h2>
          </div>
      </div>
      <div className="sec5">
      <img src={nodejs} alt="nodejs" className='skillBarImg'/>
          <div className="skillBarText">
            <h2>NodeJS</h2>
          </div>
      </div>
      <div className="sec6">
      <img src={mongoDB} alt="mongodb" className='skillBarImg'/>
          <div className="skillBarText">
            <h2>MongoDB</h2>
          </div>
      </div>
      <div className="sec7">
      <img src={express} alt="expressjs" className='skillBarImg'/>
          <div className="skillBarText" >
            <h2>ExpressJS</h2>
          </div>
      </div>
      <div className="sec8">
      <img src={git} alt="git" className='skillBarImg'/>
          <div className="skillBarText" >
            <h2>Git and Github</h2>
          </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    </>

    

  )
}

export default skills
