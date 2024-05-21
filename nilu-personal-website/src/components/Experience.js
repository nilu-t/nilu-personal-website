import React from 'react';
import '../styles/App.css'

const Experience = () => {
  return (
    <div id= "experience">
      <section id="ecomtent">
        <h1>Experience</h1>
        <h2>Ecomtent</h2>
        <h3>Software Developer Intern (Nov 2023 - Apr 2024)</h3>
        <ul>
          <li>Utilized serverless API backend integration using AWS Lambda and Node.js.</li>
          <li>Developed marketplace integrations using AWS DynamoDB.</li>
          <li>Deployed Python-based Selenium web scraping using Docker on AWS Lambda.</li>
        </ul>
      </section>
      <section id="blue-guardian">
        <h2>Blue Guardian</h2>
        <h3>Data Collection Engineer Intern (Mar 2023 - Jun 2023)</h3>
        <ul>
          <li>Collaborated within a team to improve a Machine Learning model for depression detection.</li>
          <li>Developed a Python script to scrape 160,000 tweets.</li>
          <li>Worked with cross-functional teams to deliver relevant datasets.</li>
        </ul>
      </section>
    </div>
  );
};

export default Experience;
