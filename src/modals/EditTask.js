import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, task, updateTask }) => {
  const [taskName, setTaskName] = useState(task.Name);
  const [description, setDescription] = useState(task.Description);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleUpdate = () => {
    const editedTask = {
      ...task,
      Name: taskName,
      Description: description,
    };

    // Call the updateTask prop to update the task in the TodoList component
    updateTask(editedTask);

    // Close the modal after handling the update operation.
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={description}
                onChange={handleChange}
                name="description" {/* Fix this attribute */}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          {/* Modify the Update button onClick to call handleUpdate */}
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditTaskPopup;
