import React,{Component} from 'react';
import TopMenu from './Component/TopMenu/TopMenu.js';
// import logo from './logo.svg';
import './App.css';
import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer.js';
import Payed from './Component/Payed/Payed.js';
import Trash from './Component/Trash/Trash.js';
import DieuHuongURL from './Router/DieuHuongURL.js';
import {BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="013">
      <Router>
        <TopMenu/>
          <DieuHuongURL data_dieuhuong = {this.props.data_app}/>
        <Footer/>
      </Router>  
      </div>
    )
  }
}
export default App;
