import React, { Component } from 'react'
import './App.css';
import NoiDung from './noiDung.js';
// bước 1: ấn rcc + enter để tạo
class App extends Component {
  // bước 2: bấm con + enter để tạo constructor + tạo state
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao",
      trangthai2:"trạng thái 2"
    }
  }
  // bước 3: cwm + enter............componentWillMount sẽ chạy trước rồi mới render ra
  componentWillMount() {
    console.log("componentWillMount đã chạy")
  }
  //b4: cdm chạy sau khi render
  componentDidMount() {
    console.log("componentDidMount đã chạy")
  }
  //b5: scu
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  //cwup
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
    
  }
  //cdup
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    
  }
  capNhatState = ()=>{
    this.setState(
      {
          trangthai:"cập nhật 1",
          trangthai2:"cập nhật 2"
      }
    );
  }
  
  render() {
    console.log("hàm render đã chạy");
    console.log(this.state.trangthai);
    return (
      <div>
        <NoiDung ten={this.state.trangthai2}></NoiDung>
        <button onClick={() => this.capNhatState()}>capNhatState</button>
        
        <div className="p-1">
                    <img className="img-fluid rounded-circle" src="img/1.png" alt />
                </div>
      </div>
    )
  }
}


export default App;
