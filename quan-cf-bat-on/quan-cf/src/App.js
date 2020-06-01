import React,{Component} from 'react';
import TopMenu from './Component/TopMenu/TopMenu.js';
// import logo from './logo.svg';
import './App.css';
import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer.js';
import Payed from './Component/Payed/Payed.js';
import Trash from './Component/Trash/Trash.js';
import Login from './Component/Login/Login.js';
import ThemBan from './Component/ThemBan/ThemBan.js';
import Menu from './Component/Menu/Menu.js';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="013">
      <Router>
        {/* / vào Login đầu tiên */}
        <Route path = "/" exact component={Login}/>
        <Route path = "/homepage" render={()=>{
          return(
            <Router>
              <TopMenu/>

                <Switch>
                    <Route exact path="/homepage">
                        {/* a4/11 */} <Content data_content = {this.props.data_app}/>
                    </Route>

                    <Route exact path="/Trash"> <Trash /> </Route>

                    <Route exact path="/Payed"> <Payed /> </Route>
                    <Route exact path="/Menu"> <Menu /> </Route>
                    <Route exact path="/ThemBan"> <ThemBan /> </Route>
                    <Route path="/Logout" exact component={Login}>
                    </Route>
                </Switch>

              <Footer/>
            </Router>)
        }} />
      </Router>  
      </div>
    )
  }
}
export default App;
