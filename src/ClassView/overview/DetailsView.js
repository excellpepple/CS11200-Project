import React, {useState, useEffect} from 'react';
import {Button, Card, Stack} from "react-bootstrap";

export default function DetailsView() {
    const greeting = 'Hello Function Component!';

    return (
        // <div className="container-fluid justify-content-center bg-light mt-0 text-center border">

        // </div>
        <Card className="h-100 ">
          <Card.Header as="h5">Details</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    );
}
 
