import React, { Component } from "react";
import CreateTaskInput from "./CreateTaskInput";
import Task from "./Task";

const URL = "https://62e1417fe8ad6b66d8459227.mockapi.io/tasks";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTaskList();
  }

  fetchTaskList = () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((tasksList) => this.setState({ tasks: tasksList }));
  };

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newTask),
    }).then((response) => {
      if (response.ok) {
        this.fetchTaskList();
      } else {
        throw new Error("Faild to post Task");
      }
    });
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const taskToUpdate = {
      text,
      done: !done,
    };

    fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(taskToUpdate),
    }).then((response) => {
      if (response.ok) {
        this.fetchTaskList();
      } else {
        throw new Error("Faild to PUT Task");
      }
    });
    this.fetchTaskList();
  };

  handleDeleteTask = (id) => {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        this.fetchTaskList();
      } else {
        throw new Error("Faild to DELETE Task");
      }
    });
  };
  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              {...task}
              key={task.id}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleDeleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
