import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//b1 tạo fide json
const data_index =[
  {
    ban:1,
    douong:'Cafe đen',
    soluong:3,
    isDelete:false,
    isPayed:false,
  },
  {
    ban:2,
    douong:'Cafe sữa',
    soluong:3,
    isDelete:false,
    isPayed:false,
  },
  {
    ban:3,
    douong:'Trà sữa',
    soluong:3,
    isDelete:false,
    isPayed:false,
  },
];

ReactDOM.render(
  <React.StrictMode>
    {/*b2 truyền dữ liệu từ  data_index vào data_app*/}
    <App data_app={data_index} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
