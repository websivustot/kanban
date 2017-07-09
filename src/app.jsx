import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './app/components/KanbanBoard';

let cardList = [
  {
    id: 1,
    title: 'Read the book about ReactJS',
    description: 'Read the book about ReactJS v. 14+',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 2,
    title: 'Write the app on ReactJS',
    description: 'Kanban board',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'Learn basic sintaxis of React',
        done: true
      },
      {
        id: 2,
        name: 'Write wireframe of app',
        done: false
      },
      {
        id: 3,
        name: 'Finish the app',
        done: false
      }
    ]
  },
  {
    id: 3,
    title: 'Installation of environment for React ',
    description: 'webpack, utilites, styles etc',
    status: 'done',
    tasks: [
      {
        id: 1,
        name: 'Use ready-to-use template',
        done: true
      }
    ]
  }
];

const app = document.getElementById('app');

ReactDOM.render(
    <KanbanBoard cards={cardList} />, app);
