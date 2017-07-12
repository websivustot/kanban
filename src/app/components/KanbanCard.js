import React from 'react';
import CheckList from './KanbanCheckList';

class KanbanCard extends React.Component {
  constructor() {
    super();
    console.log('KanbanCard::constructor()');
  }
  getDefaultProps(){
    console.log('KanbanCard::getDefaultProps()');
  }
  getInitialState(){
    console.log('KanbanCard::getInitialState()');
  }
  componentWillMount(){
    console.log('KanbanCard::componentWillMount()');
  }
  componentDidMount(){
    console.log('KanbanCard::componentDidMount()');
  }
  render() {
    console.log('KanbanCard::render()');
    return (
      <div className="card">
        <div className="card__title">
          {this.props.title}</div>
        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

export default KanbanCard;
