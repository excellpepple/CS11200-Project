import React, {useState, useEffect} from 'react';
import {Stack} from "react-bootstrap";
import {PageHeader} from "antd";
import ClassList from "./ClassList";
import Overview from "./ClassOverView";
import Header from "../Global/Header";

export default function ClassView() {


    return (
        <>

            <ClassList />
            {/*<Overview/>*/}
        </>
    );
}
 
