
import React, { useState } from 'react';
import Project from '../Project/Project';
import './portfolio.css'

export default function Portfolio() {

  const [projects] = useState([
    {
      title: 'Note taker application',
      repo: "https://github.com/fjunior1/note-taker",
      image: "note-taker.jpg"
    },
    {
      title: 'Budget Tracker',
      repo: "https://https://github.com/fjunior1/PWABudgetTracker",
      image: "budget-tracker.jpg"
    },
    {
      title: 'Fitness tracker',
      repo: "https://https://github.com/fjunior1/fitness-tracker",
      image: "fitness-tracker.jpg"
    },
  ])

  return (
    <div className="container">
      <div className="card-container">
        {projects.map((project, index) => {
          return (
            <Project project={project} key={index} />
          )
        })}
      </div>
    </div>
  );
}