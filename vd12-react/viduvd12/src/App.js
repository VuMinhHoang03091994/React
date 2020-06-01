import React,{Component} from 'react';
import TopMenu from './Component/TopMenu/TopMenu.js';
// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="013">
        <TopMenu/>
        <Header/>
        <div className="container">
          <div className="row pt-5">
            {/* vitri1="order-lg-2"  đặt ở 1 và 3*/}
              <Content tieude="Cách sử dụng props bằng class"  anh="img/4.jpg" noidung="nội dung 1"/>
              <Content tieude="Cách sử dụng props bằng class" anh="img/5.jpg" noidung="nội dung 2"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/6.jpg" noidung="nội dung 3"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/4.jpg" noidung="nội dung 1"/>
              <Content tieude="Cách sử dụng props bằng class" anh="img/5.jpg" noidung="nội dung 2"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/6.jpg" noidung="nội dung 3"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/4.jpg" noidung="nội dung 1"/>
              <Content tieude="Cách sử dụng props bằng class" anh="img/5.jpg" noidung="nội dung 2"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/6.jpg" noidung="nội dung 3"/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default App;
