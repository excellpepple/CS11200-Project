import React, {useState, useEffect} from 'react';
import {Result} from "antd";
import {Image} from "react-bootstrap";
import Construction from "../images/PageUnderConstruction.svg";
import {Link} from "react-router-dom";

export default function ConstructionPage() {
    const greeting = 'Hello Function Component!';

    return (
        <>
            <main className="container-fluid">
                 <Result

                     icon={<Image src={Construction} className="h-25 w-25 mt-5" />}
                    title="This page isn't ready yet. "
                    extra={<Link to="/" className="btn btn-outline-warning"variant="warning">Back to main page</Link>}
                  />
            </main>
        </>
    );
}
 
