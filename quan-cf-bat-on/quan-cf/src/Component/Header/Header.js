import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    thongbao_od_list  = ()=>{alert("Hiện chưa có ORDER LIST");}

    render() {
        return (
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h2 className="masthead-heading mb-0">Trăm nghe không bằng một thấy</h2>
                        <h3 className="masthead-subheading mb-0">Trăm thấy không bằng một thử</h3>
                        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5" onClick={()=> this.thongbao_od_list()}>ORDER LIST</a>
                    </div>
                </div>
            </header>

        )
    }
}
