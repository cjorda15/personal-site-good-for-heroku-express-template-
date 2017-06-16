import React from 'react'
import "./Projects.css"


const Projects = () => {
  return(
  <div className="projects-container">
    <p className="project-summary" id="project-summary" className="project-statement"> All of my projects generally consisted of being completed at most a week with at best one other person with usually new technology. Check out the rest of my projects on github..</p>
    <div className="projects" id="projects">
      <section className="project-card">
        <p className="project-summary">One of my first CSS project to tackle a profesional static laylout</p>
        <a  href="https://cjorda15.github.io/cj-comp-challenge-3/" className="img-container">
          <div className = "static-comp-img"></div>
        </a>
      </section>
      <section className="project-card">
        <p className="project-summary">Had fun using Canvas to make a video game, which was none other than SPACE INVADERS!</p>
        <a href="https://evening-harbor-90728.herokuapp.com" className="img-container">
          <div className = "space-img"></div>
        </a>
      </section>
      <section className="project-card">
        <p className="project-summary" className="project-summary">React.js project that retrieved daily and hourly weather forecast from weatherundeground&#39s API</p>
        <a href="https://stark-hamlet-69045.herokuapp.com/" className="img-container">
          <div className = "weather-img"></div>
        </a>
      </section>
      <section className="project-card">
        <p className="project-summary">Redux/React.js project that retrieved the most popular news articles from the most popular news sources using new&#39s API. Also used react-router, express, and created my own database with knex.js</p>
        <a href="https://github.com/cjorda15/NewNews" className="img-container">
         <div className = "news-img"></div>
        </a>
      </section>
      <section className="project-card">
        <p className="project-summary">React.js project that retrieved and displayed Star Wars data from SWAPI&#39s API</p>
        <a href="https://damp-peak-42271.herokuapp.com/" className="img-container">
          <div className = "star-img"></div>
        </a>
      </section>
      <section className="project-card">
        <p className="project-summary"> fun with jquery and react-router</p>
        <a href="#" className="img-container">
          <div className = "fun-img"></div>
        </a>
      </section>
    </div>
  </div>
  )
}

export default Projects
