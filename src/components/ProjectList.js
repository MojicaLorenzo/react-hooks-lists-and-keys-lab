import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects);

  //const aTagList = links.map((link) => (<a key={link}href='#{link}'>{link}</a>))


  const projectItems = projects.map((item) => (
    <ProjectItem 
       key = {item.id}
       about = {item.about}
       id = {item.id}
       name = {item.name}
       technologies = {item.technologies}


    
    />

  ))

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
