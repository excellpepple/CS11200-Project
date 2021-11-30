import React from 'react';

export default function HomeDb() {
    return ([
        {title: 'Assignment 1', topic: "understanding technology", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
        {title: 'Assignment 2', topic: "understanding code", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
        {title: 'Assignment 3', topic: "programming languages", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
        {title: 'Assignment 4', topic: "data structures", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
        {title: 'Assignment 5', topic: "Databases", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
        {title: 'Assignment 6', topic: "Web Design 101", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
    ]);
}

const ProjectDb = () => {
    return ([
         {title: 'Project 1', topic: "Honors Project", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
        {title: 'Project 2', topic: "AI Mock-Up", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
        {title: 'Project 3', topic: "FireBase Database", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},
        {title: 'Project 4', topic: "Data Structures", description:"", dueDate:'10/11/2021', opened: "10/10/2021", completed: false, started: false, timed: true},

    ]);
}
export {ProjectDb, HomeDb};