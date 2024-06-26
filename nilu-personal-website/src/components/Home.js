import React from 'react';
import '../styles/App.css'
import Timeline from './Timeline';


const events = [
  {
    date: '2020 SEPT',
    title: 'CS @ YorkU begins'
  },
  {
    date: 'MAR - JUN 2023',
    title: 'Data Collection Engineer Intern @ Blue Guardian'
  },
  {
    date: '2023 NOV - 2024 APR',
    title: 'Software Developer Intern @ Ecomtent'
  },
  {
    date: '2023 NOV - 2024 MAR',
    title: 'Coding Coach @ Skill Samurai'
  },
  {
    date: 'JAN 2025 ',
    title: 'Expected Graduation @ YorkU'
  },
];

const Home = () => {
  return (
    <div id= "home">
      <section id="about-me">
        <h1>About Me</h1>
      </section>

      <section>

        <div id="timeline">
          <div id="timeline-left">
            <Timeline events={events} />
          </div>

          <div id="timeline-right">
            <p>
              Throughout my career, I’ve had the privilege of building software for e-commerce, health tech, and more.
            </p>
            <p>
              My main focus these days is improving my abilities in full stack development. In my free time, I enjoy working on side projects and exploring new technologies.
            </p>
            <p>
              Outside of the tech world, staying active is also important to me; I enjoy weightlifting. I also take care of my puppy, Milo!
            </p>
            <p>
              Thank you for taking the time to learn a bit about me. I'm always open to connecting and exploring new opportunities. Feel free to reach out if you'd like to chat or collaborate on a project!
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>Let's Connect !</h3>
        <div id="lets-connect-div">
            <a href="https://www.linkedin.com/in/nilushanth-thiruchelvam/" draggable={false}>
                <figure>
                    <img src="/other-images/linkedin-logo.png" draggable={false}></img>
                    <figcaption>Linkedin</figcaption>
                </figure>
            </a>
            <a href="https://github.com/nilu-t" draggable={false}>
                <figure>
                    <img src="/other-images/github-logo.png" draggable={false}></img>
                    <figcaption>Github</figcaption>
                </figure>
            </a>
            <a href="https://www.chess.com/member/nilu06" draggable={false}>
                <figure>
                    <img src="/other-images/chessdotcom-logo.png" draggable={false}></img>
                    <figcaption>Chess challenge?</figcaption>
                </figure>
            </a>
        </div>
      </section>
    </div>
  );
};


export default Home;
