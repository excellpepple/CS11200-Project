import React, {useState, useEffect} from 'react';
import {Button, Card, Placeholder, Stack} from "react-bootstrap";
import ClassPic from "../images/class-pic.svg"
import {PageHeader} from "antd";
import {Link} from "react-router-dom";

function ClassItem(props){
    return(
        <>
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ClassPic} />
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                    <hr/>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                  </Placeholder>
                    <Link className="btn btn-outline-primary" to="/classes/overview" variant="outline-primary">View Class</Link>{' '}
                </Card.Body>
            </Card>
        </>
    );
}
export default function ClassList() {
    const [classes, setClasses] = useState([
        {title:'physics', assignments: [], projects: []},
        {title:'CS-1200', assignments: [], projects: []},
        {title:'Calc', assignments: [], projects: []},
        {title:'Biology', assignments: [], projects: []},
    ])

    return (
        <>
            <PageHeader
                className="site-page-header border-2 border-bottom"
                onBack={() => null}
                title="My Classes"
                subTitle=""              />
          <Stack direction="horizontal" gap={5} className="container col-md-12 m-5 ">
              {classes.map((subject) => <ClassItem title={subject.title}/>)}
          </Stack>
        </>
    );
}
 
