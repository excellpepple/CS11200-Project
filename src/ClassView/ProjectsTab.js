import React, {useState, useEffect} from 'react';
import {Button, Card} from "react-bootstrap";
import {ProjectDb} from "../Global/db";
import Projects from "./homework/Projects";

export default function ProjectsTab() {
    const [proj, setProj] = useState(ProjectDb)

    return (
        <section id="project" className="container-fluid row justify-content-center " >
            {proj.map((project, key) => (<Projects projData={project} key={key}/>))}


        </section>
    );
}
 
