import React, {useState, useEffect} from 'react';
import Header from "./Header";
import ClassList from "../ClassView/ClassView";
import Planner from "../Planner/Planner";
import ClassView from "../ClassView/ClassView";
import Overview from "../ClassView/ClassOverView";
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
import {Result} from "antd";
import {Button} from "react-bootstrap";
import Demo from "./Demo";


export default function Home() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Demo/>}/>
                <Route path="/planner" element={<Planner/>}/>
                <Route path="/classes" element={<ClassView/>}/>
                <Route path="/classes/overview" element={<Overview/>}/>
                <Route
                  path="*"
                  element={
                     <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Link to="/" className="btn btn-outline-warning" type="primary">Back Home</Link>}
                      />
                  }
                />
            </Routes>


        </BrowserRouter>
    );
}
 
