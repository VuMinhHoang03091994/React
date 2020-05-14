import React, { Component } from 'react'


class Content extends Component {
    constructor(props) {
        super(props);
        this.state= {
            trangthai:0
        }
    }
    // renderButton = ()=>(
    //         <div className="row">
    //             <div className="btn btn-group">
    //                 <div className="btn btn-info" onClick={()=> this.editClick()}>Edit</div>
    //                 <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
    //             </div>
    //         </div>
    //     )
    // dấu ngoặc tròn thay thế cho {} + return 
    // renderForm = ()=>(
    //     <div classname="row">
    //         <div className="form-group">
    //             {/* thuộc tính defaultValue lấy giữ liệu khi chỉnh sửa .....
    //             thuộc tinhd ref là biến để lưu giá trị trung gian......
    //             */}
    //             <input ref={(dulieunhap) => {this.trunggian = dulieunhap}} defaultValue={this.props.tieude} type="text" name="ten" id className="form-control" />
    //         </div>
    //         <div className="form-group">
    //             <button className="btn btn-success" onClick={()=> this.saveClick()}>Save</button>
    //         </div>
    //     </div>
    // )
    // displayCheck = ()=>{
    //     if(this.state.trangthai === 0){
    //         return this.renderButton();
    //     }
    //     else return this.renderForm();
    // }
    // editClick = ()=>{
    //     this.setState({trangthai:1});
    // }
    // saveClick = ()=>{
    //     this.setState({trangthai:0});
    //     console.log(this.trunggian.value);
    // }
    
    render() {
        return (
            <div className="container content">
                <div classname="row">
                    <div className="col-6 col-sm-12 col-md-12">
                        <table className="table">
                            <thead className="bang_user">
                                <tr>
                                    <th>Bàn</th>
                                    <th>Đồ uống</th>
                                    <th>Số lượng</th>
                                </tr>
                            </thead>
                            <tbody className="bang_user_a">
                                <tr>
                                    <td><div className="form-group">
                                        <input type="text" placeholder="Bàn số"/>
                                    </div></td>
                                    <td><div className="form-group">
                                        <input type="text" placeholder="Đồ uống"/>
                                    </div></td>
                                    <td><div className="form-group">
                                        <input type="text" placeholder="Số lượng"/>
                                    </div></td>
                                    <td>
                                        <button type="submit" className="btn btn-info">Đặt bàn</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* //////   */}
                <h1 className="Danh_sach_ban">Danh sách bàn</h1>
                <div classname="row">
                <div className="col-6 col-sm-12 col-md-12">
                    <table className="table">
                        <thead className="bang_user">
                                <tr>
                                    <th>Bàn</th>
                                    <th>Đồ uống</th>
                                    <th>Số lượng</th>
                                </tr>
                            </thead>
                        <tr>
                            <td>1</td> 
                            <td>Cafe đen</td>
                            <td>4</td>
                            <td>
                                <div className="row">
                                    <div className="btn btn-group">
                                        <div className="btn btn-primary">Edit</div>
                                        <div className="btn btn-info">Pay</div>
                                        <div className="btn btn-danger">Delete</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td> 
                            <td>Cafe sữa</td>
                            <td>2</td>
                            <td>
                                <div className="row">
                                    <div className="btn btn-group">
                                        <div className="btn btn-primary">Edit</div>
                                        <div className="btn btn-info">Pay</div>
                                        <div className="btn btn-danger">Delete</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td> 
                            <td>Cafe đen</td>
                            <td>4</td>
                            <td>
                                <div className="row">
                                    <div className="btn btn-group">
                                        <div className="btn btn-primary">Edit</div>
                                        <div className="btn btn-info">Pay</div>
                                        <div className="btn btn-danger">Delete</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}

export default Content;