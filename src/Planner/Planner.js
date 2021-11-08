import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Calendar, PageHeader} from "antd";

export default function Planner() {
    const greeting = 'Hello Function Component!';

    return (
        <>
            <PageHeader
                className="site-page-header border-2 border-bottom"
                onBack={() => null}
                title="My Planner "
                subTitle="Take a look at your schedule and watch out for upcoming deadlines."

              />
            <Calendar className="w-auto container-fluid border "/>

        </>
    );
}
 
