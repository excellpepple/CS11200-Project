import React, {useState, useEffect} from 'react';
import {Empty, PageHeader, Result} from "antd";
import {Button, Image} from "react-bootstrap";
import {BugOutlined} from "@ant-design/icons";
import {Link, useParams} from "react-router-dom";
import Construction from "../Global/Construction";
import TabManager from "./TabManager";
export default function Overview() {
    const active = true;
    const { course } = useParams();
    return (
        <>
            <PageHeader
                className="site-page-header border-2 border-bottom"
                onBack={() => null}
                title={course}
                subTitle="Class Overview"              />
            {(!active)? (<Construction/>): (<TabManager/>)}
        </>
    );
}
 
