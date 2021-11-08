import React, {useState, useEffect} from 'react';
import {Result} from "antd";
import {Image} from "react-bootstrap";
import Logo from "../images/Logo.svg";
import {Link} from "react-router-dom";

export default function Demo() {
    const greeting = 'Hello Function Component!';
    return (
        <>
          <main className="container-fluid ">
                 <Result

                     icon={<Image src={Logo} className="h-25 w-25 mt-5" />}
                    title="Welcome to the Home-Work Buddy. "
                    extra={<Link to="/classes" className="btn btn-lg btn-outline-warning justify-content-center"variant="warning">Click here to explore</Link>}
                  />
            </main>
        </>
    );
}
 
