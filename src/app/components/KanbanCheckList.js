import React from 'react';

class KanbanCheckList extends React.Component {
  render() {
    console.log(this.props);
  let tasks = this.props.tasks.map((task, index) => {
      return (
        <li className="checklist__task" key={index}>
            <input type="checkbox" defaultChecked={task.done} />
            {task.name}
            <a href="#" className="checklist__task--remove" />
        </li>
      );
    });
    return (
      <div className="checklist">
          <ul>{tasks}</ul>
      </div>
    );
  }
}
export default KanbanCheckList;
