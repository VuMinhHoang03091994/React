import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1:[]
        }
    this.img = React.createRef()
    this.douong = React.createRef()
    this.noidung = React.createRef()
    }
    componentDidMount(){
        this.setState({data1: this.props.data_orderList})
    }
    addOrderList =() =>{
        const img = this.img.current.value;
        const douong = this.douong.current.value;
        const noidung = this.noidung.current.value;
        this.setState({data1:[
            {img:img,
            douong:douong,
            noidung:noidung,
            isDelete:false},
            ...this.state.data1
        ]})
    }
    render() {
        const {data1} = this.state;
        return (
           <div>
                {/* Page Heading */}
                <>
                <br/><br/>
                <h1 className="my-4">Order List
                    <small />
                </h1>
                </>
                    {/*  */}
                    <div className="row">
                    
                    {data1.map((item,index)=>{
                            return (
                                <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="card h-100">
                                    <Link className="nav-link" to='/img'><img className="card-img-top" src={`./img/${item.img}`} alt /></Link>
                                    <div className="card-body">
                                    <h4 className="card-title">
                                    <a href="#">{item.douong}</a>
                                    </h4>
                                    <p className="card-text">{item.noidung}
                                    </p>
                                    </div>
                                </div>
                                </div>)
                            })}
                    {/*  */}
                    

                    {/* THÊM CAFE  */}
                    <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                    {/* <Link className="nav-link" to='/img'><img className="card-img-top" src="./img/cf7.jpg" alt /></Link> */}
                        <input ref= {this.img} name="image" id="image" type="file" class="inp-form"/>
                        <div className="card-body">
                            <p className="card-text"><input ref={this.douong} name="tencf" id="tencf" type="text" class="inp-form" placeholder="Loại Cafe"/></p>
                            <p className="card-text"><input ref={this.noidung} name="noidung" id="noidung" type="text" class="inp-form" placeholder="Nội dung"/></p>
                            <button type="submit" className="btn btn-info" onClick={this.addOrderList}>Thêm</button>
                        </div>
                    </div>
                    </div>
                    <tr></tr>
                    {/* end thêm */}

                </div>
                {/* /.row */}
                {/* Pagination */}
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                    </a>
                    </li>
                </ul>
                {/* end order list */}
            </div>

        )
    }
}
