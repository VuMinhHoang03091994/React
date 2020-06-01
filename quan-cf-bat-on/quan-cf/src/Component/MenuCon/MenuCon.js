import React, { Component } from 'react'

export default class MenuCon extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="col-sm-3">
                {/* normal */}
                <div className="ih-item square effect4">
                    <a >
                        <div className="img"><img src={this.props.anh} alt="img" /></div>
                        <div className="mask1" />
                        <div className="mask2" />
                        <div className="info">
                        <h3>{this.props.nameCafe}</h3>
                        <p className="giaCafe_red">{this.props.giaCafe}</p> 
                        </div>
                    </a>
                </div>
                {/* end normal */}
            </div>

        )
    }
}
