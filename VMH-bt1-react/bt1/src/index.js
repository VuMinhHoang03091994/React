import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';

const todos = [
  {
    id: 1,
    title: 'react',
    isComplete: false,
    isTrash: false,
  },
  {
    id: 2,
    title: 'HTML',
    isComplete: false,
    isTrash: false,
  },
  {
    id: 3,
    title: 'CSS',
    isComplete: true,
    isTrash: false,
  },
];
ReactDOM.render(
  <React.StrictMode>
    <App todos={todos} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
