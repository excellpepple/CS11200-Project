import React, {useState, useEffect} from 'react';
import {Empty, PageHeader, Result} from "antd";
import {Button, Image} from "react-bootstrap";
import {BugOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Construction from "../Global/Construction";
export default function Overview() {
    const active = false;

    return (
        <>
            <PageHeader
                className="site-page-header border-2 border-bottom"
                onBack={() => null}
                title={''}
                subTitle="Class Overview"              />
            {(!active)? (<Construction/>): <></>}
        </>
    );
}
 
