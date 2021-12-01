import React, {useState, useEffect} from 'react';
import {Button, Card, Form, Stack} from "react-bootstrap";
import {HomeDb} from "../Global/db";
import Assignment from "./homework/Assingment";
import {PlusOutlined} from "@ant-design/icons";
import {yellow} from "@ant-design/colors";
import {Drawer} from "antd";
import voca from "voca";
import DetailsView from "./DetailsView";

export default function HomeWorkTab(props) {
    const [homeworks, setHomeworks] = useState(HomeDb);
    const [visible, setVisible] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [details, setDetails] = useState({});
    const handleAdd = (event) => {
        event.preventDefault();
        console.log('Adding new class.....')
        const name = document.getElementById("courseName").value;
        const professor = document.getElementById("courseTeacher").value;
        const room = document.getElementById("location").value;

        setHomeworks(prevState => [
            ...prevState,
            {
                title: 'Assignment 1',
                topic: "understanding technology",
                description:"", dueDate:'10/11/2021',
                opened: "10/10/2021",
                completed: false,
                started: false,
                timed: true
            }
        ])

        console.log(`added ${name} by ${professor} at ${room}`);

        onClose()

    }
    const showDrawer = () => {
        setVisible(true);
    };
    const openDetails = () => {
        setDetailsVisible(true)
    }
    const closeDetails = () => {
        setDetailsVisible(false)
    }
    const onClose = () => {
        setVisible(false);
    };
    return (
        <section id="homeWork" className="container-fluid row justify-content-center " >
            <>
                {homeworks.map(homework => (<Assignment data={homework}  onClick={()=>{openDetails(); setDetails(homework) }}/>))}

                <div className="container-fluid justify-content-end d-none">
                    <PlusOutlined className="btn btn-outline-warning rounded-3 align-content-end" onClick={showDrawer} style={{Color: yellow-4}}/>
                </div>

            </>

            <DetailsView onClose={closeDetails} visible={detailsVisible} data={details} course={props.course}/>

            <Drawer
            title="Fill this form to add a new class"
            placement={"bottom"}
            width={500}
            height={500}
            onClose={onClose}
            visible={visible}

          >
            <Form onSubmit={handleAdd}>
                <Form.Group inline className="" controlId="formBasicEmail" >
                    <Stack direction="vertical" gap={3} >
                        <div className="input-group shadow-sm">
                            <span className="input-group-text bg-warning text-dark">Course Topic</span>
                            <Form.Control type="text" id="topic" placeholder="What is the topic you are taking for the class?" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text bg-dark text-info">Professor</span>
                            <Form.Control type="text" id="courseTeacher" placeholder="What is the name of your teacher?" className={""} />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text bg-dark text-info">Location</span>
                            <Form.Control type="text" id="location" placeholder="Where is the class holding? " className={""}/>
                        </div>
                        <input type="submit" className="btn  btn-outline-warning "/>

                    </Stack>

                </Form.Group>
            </Form>
          </Drawer>
        </section>
    );
}
 
