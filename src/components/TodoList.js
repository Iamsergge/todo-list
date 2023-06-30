import React, { useEffect, useState } from 'react';
import CreateTaskPopup from '../modals/createTask';
import Card from "./Card"

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
      
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)

        }
    }, [])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)


    }
    return (
        
        <>
        <div className ="header text-center">
            <h3>Todo List</h3>
            <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Task</button>
        </div>
        <div className = "task-container">
            {taskList.map((obj) => <li>{obj.Name}</li> ) }

        </div>
        <CreateTaskPopup toggle = {toggle} modal = {modal} saveTask = {saveTask}/>
        </>
    );


} 

 export default TodoList;