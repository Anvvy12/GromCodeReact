import React, { Component } from 'react';

class TasksList extends Component {
  state = {
    tasks: [],
  };
  render() {
    return (
      <>
        <ul className="list"></ul>
      </>
    );
  }
}

export default TasksList;
