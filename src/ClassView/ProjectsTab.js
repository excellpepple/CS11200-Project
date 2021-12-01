import React, {useState, useEffect} from 'react';
import {Button, Card} from "react-bootstrap";
import {ProjectDb} from "../Global/db";
import Projects from "./homework/Projects";
import DetailsView from "./DetailsView";

export default function ProjectsTab(props) {
    const [proj, setProj] = useState(ProjectDb)
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [details, setDetails] = useState({});

     const openDetails = () => {
        setDetailsVisible(true)
    }
    const closeDetails = () => {
        setDetailsVisible(false)
    }
    return (
        <section id="project" className="container-fluid row justify-content-center " >
            {proj.map((project, key) => (<Projects projData={project} key={key} onClick={()=>{openDetails(); setDetails(project)}}/>))}

            <DetailsView onClose={closeDetails} visible={detailsVisible} data={details} course={props.course}/>
        </section>
    );
}
 
