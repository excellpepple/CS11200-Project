import React, {useState, useEffect} from 'react';
import {Col, Progress, Row, Statistic} from "antd";
import {Button} from "react-bootstrap";

const Completed = (props) => {
    return (
        <Progress
              type={props.type}
              strokeColor={{
                '0%': '#a0d911',
                '100%': '#52c41a',
              }}
              percent={props.progress}
              width={300}
              className={props.className}
              format={props.format}
            />);
}
const Assignments = (props) => {
    return (
        <Progress
            title="Assignments"
              type={props.type}
              strokeColor={{
                '0%': '#13c2c2',
                '100%': '#722ed1',
              }}
              percent={props.progress}
              width={150}
              className={props.className}
              format={props.format}
            />);
}
const Projects = (props) => {
    return (
        <Progress
              type={props.type}
              strokeColor={{
                '0%': '#faad14',
                '100%': '#fadb14',
              }}
              percent={props.progress}
              width={150}
              className={props.className}
              format={props.format}
            />);
}
export default function StatsView() {
    const greeting = 'Hello Function Component!';

    return (
        <div className="container-fluid p-5 justify-content-center">

            <Completed progress={88} type="dashboard" className="  mt-5" />
            <Assignments progress={30} className="position-absolute top-2  ms-5" type="dashboard"/>
            <Projects progress={100} className="position-absolute bottom-50 ms-5 " type="dashboard"/>
        </div>
    );
}
 
