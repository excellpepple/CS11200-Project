import React, {useState, useEffect} from 'react';
import {Button, Card} from "react-bootstrap";
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";

export default function Assignment(props) {
    const [data, setData] = useState(props.data);

    return (
        <>
            <Card className="col-md-3 m-4" border={"info"}>
              <Card.Header className=" border-3">{props.data.title}</Card.Header>
              <Card.Body>
                <Card.Title>{props.data.topic}</Card.Title>
                <Card.Text>
                 Due: <span id="due date" className="text-monospace text-muted">{props.data.dueDate}</span> - Opened: <span id="due date" className="text-monospace text-muted">{props.data.opened}</span> <br/>
                    Started: <span className={(props.data.started)? "text-success": "text-danger"}> {(props.data.started)? "Yes" : "No" } </span> | Completed: <span className={(props.data.completed)? "text-success": "text-danger"}> {(props.data.completed)? "Yes" : "No" } </span>
                </Card.Text>
                <Button variant="primary" onClick={props.onClick}>Click to view</Button>
              </Card.Body>
            </Card>

        </>
    );
}
 
