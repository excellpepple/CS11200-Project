import React, {useState, useEffect} from 'react';
import {Button, Card} from "react-bootstrap";
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";

export default function Projects(props) {
    const [projectData, setProjectData] = useState(props.projData);

    return (
        <>
            <Card className="col-md-6 m-3" border={"success"} id={props.key}>
              <Card.Header className=" border-3">{props.projData.title}</Card.Header>
              <Card.Body>
                <Card.Title>{props.projData.topic}</Card.Title>
                <Card.Text>
                 Due: <span id="due date" className="text-monospace text-muted">{props.projData.dueDate}</span> - Opened: <span id="due date" className="text-monospace text-muted">{props.projData.opened}</span> <br/>
                    Started: <span className={(props.projData.started)? "text-success": "text-danger"}> {(props.projData.started)? "Yes" : "No" } </span> | Completed: <span className={(props.projData.completed)? "text-success": "text-danger"}> {(props.projData.completed)? "Yes" : "No" } </span>
                </Card.Text>
                <Button variant="success" onClick={props.onClick}>Click to view</Button>
              </Card.Body>
            </Card>
        </>
    );
}
 
