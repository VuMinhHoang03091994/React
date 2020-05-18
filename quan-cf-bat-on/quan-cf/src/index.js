import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//a/1/11tạo fide json
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
  {
    ban:4,
    douong:'ttttt',
    soluong:3,
    isDelete:false,
    isPayed:false,
  },
];
const data_index_orderList =[
  {
    img:'cf4.jpg',
    douong:'Cafe đen',
    noidung:'Nếu đây là cà phê, hãy mang cho tôi một ít trà. Nhưng nếu đây là trà, hãy mang cho tôi một ít cà phê.',
    isDelete:false,
  },
  {
    img:'cf3.jpg',
    douong:'Love Cafe',
    noidung:'Good morning – ngày mới vui vẻ bên tách cafe thơm phức',
    isDelete:false,
  },
  {
    img:'cf2.jpg',
    douong:'Black coffee',
    noidung:'Đắng cafe, đắng không lời. Đắng câu duyên lỡ, đắng đời nhau ra.',
    isDelete:false,
  },
];
ReactDOM.render(
  <React.StrictMode>
    {/*a2/11 truyền dữ liệu từ  data_index vào data_app*/}
    <App data_app={data_index}
        data_app1={data_index_orderList}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
