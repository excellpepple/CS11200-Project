import React, {useState, useEffect} from 'react';
import {Col, Divider, Drawer, Row} from "antd";
import voca from "voca";
import {Button, Stack} from "react-bootstrap";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export default function DetailsView(props) {
    const data = props.data;

    return (
        <>
            <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={props.onClose}
                visible={props.visible}
              >
                <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                  {voca.titleCase(data.title)}
                </p><hr className={"bg-warning"}/>
                <p className="site-description-item-profile-p">Details</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Topic" content={voca.titleCase(data.topic)} />

                  </Col>

                  <Col span={12}>

                    <DescriptionItem title="Course" content={voca.titleCase(props.course)} />
                  </Col>
                </Row><br/>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Due Date" content={data.dueDate} />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Opened" content={data.opened} />
                  </Col>
                </Row>
                <Divider />

                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Description"
                      content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                    />
                  </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Progress</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Started" content={(data.start)? "yes": "no"} />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="completed" content={(data.completed)? "yes": "no"} />
                  </Col>
                </Row>
              <hr className={"bg-danger"}/>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Actions"
                      content={
                        <Stack gap={3}  className={"container"}>
                          <Button onClick={props.onClick} className="btn btn-lg" variant={"outline-danger"}>Edit Details</Button>
                        </Stack>
                      }
                    />
                  </Col>
                </Row>
              </Drawer>
        </>
    );
}
 
