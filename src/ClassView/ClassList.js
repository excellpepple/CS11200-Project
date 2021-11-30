import React, {useState, useEffect} from 'react';
import {Button, Card, Placeholder, Stack} from "react-bootstrap";
import ClassPic from "../images/class-pic.svg"
import {yellow} from "@ant-design/colors";
import {Avatar, PageHeader, Button as Ant_button} from "antd";
import {Link} from "react-router-dom";
import {PlusCircleFilled, PlusOutlined, PlusSquareOutlined} from "@ant-design/icons";

function ClassItem(props){
    return(
        <>
            <Card id={`${props.title}_${props.id}`} border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ClassPic} />
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                    <hr/>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                  </Placeholder>
                    <Link className="btn btn-outline-primary" to={`/classes/overview/` + props.title} variant="outline-primary">View Class</Link>{' '}
                </Card.Body>
            </Card>
        </>
    );
}
export default function ClassList() {
    const [classes, setClasses] = useState([
        {id: 1, title:'physics', assignments: [], projects: []},
        {id:2, title:'CS-1200', assignments: [], projects: []},
        {id:3, title:'Calc', assignments: [], projects: []},
        {id:4, title:'Biology', assignments: [], projects: []},
    ])
    


    return (
        <>
            <PageHeader
                className="site-page-header border-2 border-bottom"
                onBack={() => null}
                title="My Classes"
                subTitle=""              />
          <Stack direction="horizontal" gap={5} className="container col-md-12 m-5 ">
              {classes.map((subject) => <ClassItem title={subject.title} id={subject.id}/>)}
          </Stack>
            <div className="container-fluid justify-content-end">
                <PlusOutlined className="btn btn-outline-warning rounded-3 align-content-end" style={{Color: yellow-4}}/>
            </div>
        </>
    );
}
 
