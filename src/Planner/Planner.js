import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Badge, Calendar, Input, Modal, PageHeader} from "antd";
import { useNavigate } from "react-router-dom"


function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events" style={{ 'list-style': 'none'}}>
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default function Planner() {
    const greeting = 'Hello Function Component!';
    const [planVisible, setPlanVisible] = useState(false)
    const [data, setData] = useState([])
    const [newValue, setNewValue] = useState('')
    const showPlan = (value) =>{
        setPlanVisible(true);
        setData(getListData(value));
        console.log(data);
    }
    const handleOk = () => {

    }
    const handleCancel = () => {
        setPlanVisible(false);
    }
    const handleChange = ({target}) => {
        setNewValue(target.value);

    }

    return (
        <>
            <PageHeader
                className="site-page-header border-2 border-bottom"
                onBack={() => null}
                title="My Planner "
                subTitle="Take a look at your schedule and watch out for upcoming deadlines."

              />
            <Calendar className="w-auto container-fluid border " onSelect={showPlan} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
            <Modal title="Basic Modal" visible={planVisible} centered onOk={handleOk} onCancel={handleCancel} className="border-primary">
                {data.map(item => <p>{item.content}</p>)}
                <Input placeholder="Type here to add a new event" onChange={handleChange} allowClear />
            </Modal>
        </>
    );
}
 
