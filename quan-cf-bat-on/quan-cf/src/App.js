import React,{Component} from 'react';
import TopMenu from './Component/TopMenu/TopMenu.js';
// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      listData:[],
    }
  }
  //b2 gọi lại từ index
  componentDidMount(){
      this.setState({listData: this.props.data});
    console.log("hahah",this.state.listData);
  };
  render() {
    return (
      <div className="013">
        <TopMenu/>
        <Header/>
        <div className="container-buld">
            <Content></Content>
              {/* <Content tieude="Cách sử dụng props bằng class"  anh="img/4.jpg" noidung="nội dung 1"/>
              <Content tieude="Cách sử dụng props bằng class" anh="img/5.jpg" noidung="nội dung 2"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/6.jpg" noidung="nội dung 3"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/4.jpg" noidung="nội dung 1"/>
              <Content tieude="Cách sử dụng props bằng class" anh="img/5.jpg" noidung="nội dung 2"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/6.jpg" noidung="nội dung 3"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/4.jpg" noidung="nội dung 1"/>
              <Content tieude="Cách sử dụng props bằng class" anh="img/5.jpg" noidung="nội dung 2"/>
              <Content tieude="Cách sử dụng props bằng class"  anh="img/6.jpg" noidung="nội dung 3"/> */}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default App;
