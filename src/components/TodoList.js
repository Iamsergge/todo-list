import React, { useEffect, useState } from 'react';
import CreateTaskPopup from '../modals/createTask';
import Card from './Card';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    // Create a new array with the elements you want to keep
    const tempList = taskList.filter((_, i) => i !== index);

    // Update the taskList state with the new array
    setTaskList(tempList);

    // Update localStorage with the new array
    localStorage.setItem('taskList', JSON.stringify(tempList));
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = [...taskList, taskObj];
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
    setModal(false);
  };

  // Define the colors array directly in the TodoList component and pass it to the Card component
  const colors = [
    {
      primaryColor: '#5D93E1',
      secondaryColor: '#ECF3FC',
    },
    {
      primaryColor: '#F9D288',
      secondaryColor: '#FEFAF1',
    },
    {
      primaryColor: '#5DC250',
      secondaryColor: '#F2FAF1',
    },
    {
      primaryColor: '#F48687',
      secondaryColor: '#FDF1F1',
    },
    {
      primaryColor: '#B964F7',
      secondaryColor: '#F3F0FD',
    },
  ];

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
      </div>
      <div className="task-container">
        {/* Rendering the Card component for each task */}
        {taskList.map((taskObj, index) => (
          <Card key={index} task={taskObj.Name} index={index} deleteTask={deleteTask} colors={colors} />
        ))}
      </div>
      {/* Pass the saveTask function as a prop to CreateTaskPopup */}
      <CreateTaskPopup toggle={toggle} modal={modal} saveTask={saveTask} />
    </>
  );
};

export default TodoList;
