import React from 'react'
import './projects.css'
import weatherforecast from '../../assets/weatherforecast.png'
import textutils from '../../assets/textutils.png'
import webpage from '../../assets/webpage.png'
import management from '../../assets/management.png'
const projects = () => {
  return (
    <>
    <div id='project-section'>
    <span className="heading">My Projects</span>
        <section className="projects">
            <div className="container">
                <div className="section">
                    <img src={weatherforecast} alt="Project 1" />
                    <h3>WeatherWise</h3>
                    <p>Creating "WeatherWise" using Postman and C++ involves utilizing Postman for API interactions and C++ for handling the received data. </p>
                    <a href="https://github.com/Samriti-Raj/WeatherWise" className='clink'>Click here</a>
                </div>
                <div className="section">
                    <img src={textutils} alt="Project 2"/>
                    <h3>TextUtils</h3>
                    <p>A text manipulation tool which allows users to apply transformations like converting text cases uppercase, lowercase, removing extra spaces, and more.</p>
                    <a href="https://github.com/Samriti-Raj/text-utils" className='clink'>Click here</a>
                </div>
                <div className="section">
                    <img src={webpage} alt="Project 3"/>
                    <h3>Tribute Page</h3>
                    <p>A heartfelt tribute page using HTML, CSS, and JavaScript to celebrate extraordinary personalities.</p>
                    <a href="https://github.com/Samriti-Raj/Tribute_page" className='clink'>Click here</a>
                </div>
                <div className="section">
                    <img src={management} alt="Project 4"/>
                    <h3>Task Manager</h3>
                    <p>developed a robust Task Manager application using the MERN (MongoDB, Express.js, React.js, Node.js) stack, enabling efficient task organization and management. </p>
                    <a href="" className='clink'>Click here</a>
                </div>
                
            </div>
        </section>
    </div>
    </>
  )
}

export default projects
