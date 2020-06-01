import React, { Component } from 'react';
import './App.css';
//biến dùng 1 lần const
const name = "Vũ Minh Hoàng"

//cách sử dụng hàm Map trong js(hàm map duyệt từng phần tử trong mảng so và *2) x là biến đầu vào
const so = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const so2 = so.map((x) => x*2 + " ");

const so3 = so.map((x) => (
  <li>số: {x}</li>
));

//tajo hamf function
function NumberOne(props){
  return (
        <div className="col-3">
          <div className="card">
            <img className="card-img-top" src={props.linkanh} alt="" />
              <div className="card-body">
              <h3 className="card-title">{props.tieude}</h3>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
  )
}
//rcjc dungf class
class NumberTwo extends Component {
  render() {
    return (
        <div className="col-3">
          <div className="card">
            <img className="card-img-top" src={this.props.linkanh} alt="" />
              <div className="card-body">
              <h3 className="card-title">{this.props.tieude}</h3>
              <p className="card-text">{this.props.text}</p>
            </div>
          </div>
        </div>
    );
  }
}

//
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="ten-toi">Tên tôi là: {name}</h1>
          {/* b4-form-checkbox tạo ra nút checkbox */}
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
              Đây có đúng là bạn
            </label>
          </div>
          {/* gọi từ hàm map */}
          <div>
            {so2}
            {so3}
          </div>
         

          <NumberOne text="1" tieude="anh 1" linkanh="https://meohayaz.com/wp-content/uploads/2020/03/Tr%E1%BB%8Dn-b%E1%BB%99-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-girl-xinh-cho-%C4%91i%E1%BB%87n-tho%E1%BA%A1i.jpg"/>
          <NumberOne text="2" tieude="anh 2" linkanh="https://i.pinimg.com/originals/16/c9/85/16c9852cc1382aca4653625a120f72c9.jpg"/>
          
          <NumberTwo text="3" tieude="anh 3" linkanh="https://image.winudf.com/v2/image1/Y29tLmFkbWluLnNvbi53YWxscGFwZXJfc2NyZWVuX2VzLUVTXzZfMTU2MjE4MDMyMl8wMzk/screen-6.jpg?fakeurl=1&type=.jpg"/>
          <NumberTwo text="4" tieude="anh 4" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7hWcB0N8DQZmnBaDcQJRRCRDZuMHrMhxL6lppEfz8l_woMLR8&usqp=CAU"/>
          <NumberTwo text="5" tieude="anh 5" linkanh="https://i.pinimg.com/736x/84/85/58/848558c49736a16c64fd41fbf9b412b8.jpg"/>
          <NumberTwo text="6" tieude="anh 6" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvKc_OXwN7JX2EJ2_QCJCNHbzvxm91X-2DG8XiHBoN7coamRjM&usqp=CAU"/>
          <NumberTwo text="7" tieude="anh 7" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsCzVi9jTqesQzTvkAM-uThpvDdY5RRUZTmUCMWx2ZaBMIysb6&usqp=CAU"/>
          <NumberTwo text="8" tieude="anh 8" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9lXdxNBbbE4KqePnFQxg8ezWFdCF9A9342pEXwjgt3nVAa-L4&usqp=CAU"/>
        
        </div>
      </div>
    );
  }
}

export default App;