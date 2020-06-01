import React, { Component } from 'react'


class NoiDung extends Component {
    componentWillReceiveProps(nextProps, nextState){
    console.log("componentWillReceiveProps của noidung.js" + nextProps.ten);
    }
    //b5: scu
    shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate của noidung.js");
      return true;
    }
    //cwup
    componentWillUpdate(nextProps, nextState) {
      console.log("componentWillUpdate của noidung.js");
      
    }
    //cdup
    componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate của noidung.js");
      
    }
    render() {
        console.log("reander của noidung.js")
        return (
            <div>
                <h4>{this.props.ten}</h4>
            </div>
        )

    }
}
export default NoiDung;