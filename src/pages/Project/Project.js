import React from "react";
import './project.css'
const {PUBLIC_URL} = process.env

export default function Project({project}) {
    const { title, repo, image } = project;

    return (
        <div className="card">
            <a href={repo} target="_blank" rel="noreferrer">
                <img
                    className="card-img-top"
                    src={PUBLIC_URL + image}
                    alt={`Logo for ${title}`}
                    width="250" height="250"
                />
            </a>
            <div className="card-body">
                <h5 className="card-text">{title}</h5>
                <a href={repo} className="project-link" target="_blank" rel="noreferrer" alt="Link to GitHub"><i alt="Link to GitHub" className="fab fa-github"></i>{title} link</a>
            </div>
        </div>
    )
}
