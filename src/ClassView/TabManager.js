import React, {useState, useEffect} from 'react';
import {Tabs} from "antd";
import {
    AndroidOutlined,
    AppleOutlined,
    BarChartOutlined,
    FundProjectionScreenOutlined,
    PieChartOutlined, SnippetsOutlined
} from "@ant-design/icons";
import Overview from "./Overview";
import HomeWorkTab from "./HomeWorkTab";
import ProjectsTab from "./ProjectsTab";
const { TabPane } = Tabs;
export default function TabManager() {
    const greeting = 'Hello Function Component!';

    return (
        <>
            <Tabs defaultActiveKey="1" centered>
                {/*<TabPane*/}
                {/*  tab={*/}
                {/*    <span>*/}
                {/*      <BarChartOutlined />*/}
                {/*      Overview*/}
                {/*    </span>*/}
                {/*  }*/}
                {/*  key="1"*/}
                {/*>*/}
                {/*  <Overview/>*/}
                {/*</TabPane>*/}
                <TabPane
                  tab={
                    <span>
                      <SnippetsOutlined />
                      Homeworks
                    </span>
                  }
                  key="1"
                >
                 <HomeWorkTab/>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <FundProjectionScreenOutlined />
                      Projects
                    </span>
                  }
                  key="2"
                >
                  <ProjectsTab/>
                </TabPane>
          </Tabs>
        </>
    );
}
 
