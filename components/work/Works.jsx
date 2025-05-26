/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
    const[item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData);
        } else {
          const newProjects = projectsData.filter((project) => {
            return project.category === item.name;
          });
          setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };
  return (
    <div>
       

        <div className="work__container container grid">
            {projects.map((item) => {
                return <WorksItems item={item} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default Works