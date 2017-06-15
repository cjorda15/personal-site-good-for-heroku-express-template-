import React from 'react'
import "./Projects.css"


const Projects = () => {
  return(
    <div class="projects" id="projects">
      <a  href="https://cjorda15.github.io/cj-comp-challenge-3/" className="img-container">
        <div className = "static-comp-img"></div>
      </a>
      <a href="https://evening-harbor-90728.herokuapp.com" className="img-container">
        <div className = "space-img"></div>
      </a>
      <a href="https://github.com/cjorda15/weathrly" className="img-container">
        <div className = "weather-img"></div>
      </a>
      <a href="https://github.com/cjorda15/NewNews" className="img-container">
        <div className = "news-img"></div>
      </a>
    </div>
  )
}

export default Projects
