import React, {useState, useEffect} from 'react';
import {Button, Card} from "react-bootstrap";
import {HomeDb} from "../Global/db";
import Assignment from "./homework/Assingment";

export default function HomeWorkTab() {
    const [homeworks, setHomeworks] = useState(HomeDb)

    return (
        <section id="homeWork" className="container-fluid row justify-content-center " >
            {homeworks.map(homework => (<Assignment data={homework}/>))}


        </section>
    );
}
 
