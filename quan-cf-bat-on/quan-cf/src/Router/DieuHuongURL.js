import React, { Component } from 'react'
//coppy từ trang https://reacttraining.com/react-router/web/example/basic
import {Switch,Route} from "react-router-dom";

import Payed from '../Component/Payed/Payed';
import Trash from '../Component/Trash/Trash';
import Content from '../Component/Content/Content';
class DieuHuongURL extends Component {
    render() {
        return (
            //router coppy từ trang trên
                <div>
                <Switch>
                    <Route exact path="/">
                        <Content data_content = {this.props.data_dieuhuong}/>
                    </Route>
                    <Route path="/Payed">
                        <Payed />
                    </Route>
                    <Route path="/Trash">
                        <Trash />
                    </Route>
                </Switch>
                </div>
        );
    }
}
export default DieuHuongURL;