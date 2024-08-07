import React from "react";

const Description = (props) => {
  return <li>{props.description}</li>;
};

const Resume = (props) => {
  let skillmessage, education, work;
  if (props.data) {
    skillmessage = props.data.skillmessage;
    education = props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    work = props.data.work.map((work) => {
      return (
        <div key={work.company}>
          <h3>{work.title}</h3>
          <p className="info">
            {work.company}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <ul>
            {work.description &&
              work.description.map((descriptionList) => {
                return <Description key={descriptionList} description={descriptionList} />;
              })}
          </ul>
          <p className="stack">
            <b>Tech Stack:</b> {work.stack}
          </p>
        </div>
      );
    });
    var skills = props.data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Experience</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

        // {
        //   "title": "Suggest-A-Book",
        //   "category": "",
        //   "image": "",
        //   "url": ""
        // },
        // {
        //   "title": "Teamweek JIRA",
        //   "category": "",
        //   "image": "",
        //   "url": ""
        // },