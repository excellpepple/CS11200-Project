import React, {useState, useEffect} from 'react';
import {Button, Card, Container, Form, Image, Placeholder, Stack} from "react-bootstrap";
import ClassPic from "../images/class-pic.svg"
import {yellow} from "@ant-design/colors";
import {Avatar, PageHeader, Button as Ant_button, Drawer, Space, Result} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {PlusCircleFilled, PlusOutlined, PlusSquareOutlined} from "@ant-design/icons";
import Empty from "../images/empty.svg"
import voca from 'voca';


function ClassItem(props){
    return(
        <>
            <Card id={`${props.title}_${props.id}`} border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ClassPic} />
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                    <hr/>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                  </Placeholder>
                    <Link className="btn btn-outline-primary" to={`/classes/overview/` + props.title} variant="outline-primary">View Class</Link>{' '}
                </Card.Body>
            </Card>
        </>
    );
}
export default function ClassList() {
    const [classes, setClasses] = useState([
        {title: "Introduction To Computer Science", assignments: [], projects: [], teacher: "Steven Gardner", room: "Kettler room 200"},
        {title: "College Algebra", assignments: [], projects: [], teacher: "j.Lamaster", room: "Kettler room 135"},
    ])
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();



    const handleAdd = (event) => {
        event.preventDefault();
        console.log('Adding new class.....')
        const name = document.getElementById("courseName").value;
        const professor = document.getElementById("courseTeacher").value;
        const room = document.getElementById("location").value;

        setClasses(prevState => [...prevState, {title: voca.titleCase(name), assignments: [], projects: [], teacher: voca.titleCase(professor), room: voca.titleCase(room)}])
        console.log(`added ${name} by ${professor} at ${room}`);

        onClose()

    }
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };


    return (
        <>
            <PageHeader
                className="site-page-header border-2 border-bottom"
                onBack={() => navigate(-1)}
                title="My Classes"
                subTitle=""              />
            {(classes.length !== 0 )? (
                <>
                    <Stack direction="horizontal" gap={5} className="container col-md-12 m-5 ">
                        {classes.map((subject) => <ClassItem title={subject.title} id={subject.id}/>)}
                   </Stack>
                    <div className="container-fluid justify-content-end">
                        <PlusOutlined className="btn btn-outline-warning rounded-3 align-content-end" onClick={showDrawer} style={{Color: yellow-4}}/>
                    </div>
                </>
            ): (
                   <Result

                     icon={<Image src={Empty} className="h-25 w-25 mt-1" />}
                    title="You don't have any classes added yet. "
                    extra={<Button onClick={showDrawer} className="btn btn-outline-warning" variant="">Add A Class</Button>}
                  />
              )}



            <Drawer
            title="Fill this form to add a new class"
            placement={"bottom"}
            width={500}
            height={200}
            onClose={onClose}
            visible={visible}

          >
            <Form onSubmit={handleAdd}>
                <Form.Group inline className="" controlId="formBasicEmail" >
                    <Stack direction="horizontal" gap={1} >
                        <div className="input-group ">
                            <span className="input-group-text bg-dark text-info">Course Name</span>
                            <Form.Control type="text" id="courseName" placeholder="What is the name of the class you are taking?" />
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
        </>
    );
}
 
