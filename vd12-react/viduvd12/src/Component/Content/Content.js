import React, { Component } from 'react'


class Content extends Component {
    constructor(props) {
        super(props);
        this.state= {
            trangthai:0
        }
    }
    thongbao = () => {alert('Bạn muốn Edit,sorry tôi chưa cài đặt')}
    thongbao2 = () => alert("Bạn muốn Remove,sorry tôi chưa cài đặt")
    renderButton = ()=>(
            <div className="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={()=> this.editClick()}>Edit</div>
                    <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
                </div>
            </div>
        )
    // dấu ngoặc tròn thay thế cho {} + return
    renderForm = ()=>(
        <div classname="row">
            <div className="form-group">
                {/* thuộc tính defaultValue lấy giữ liệu khi chỉnh sửa .....
                thuộc tinhd ref là biến để lưu giá trị trung gian......
                */}
                <input ref={(dulieunhap) => {this.trunggian = dulieunhap}} defaultValue={this.props.tieude} type="text" name="ten" id className="form-control" />
            </div>
            <div className="form-group">
                <button className="btn btn-success" onClick={()=> this.saveClick()}>Save</button>
            </div>
        </div>
    )
    displayCheck = ()=>{
        if(this.state.trangthai === 0){
            return this.renderButton();
        }
        else return this.renderForm();
    }
    editClick = ()=>{
        this.setState({trangthai:1});
    }
    saveClick = ()=>{
        this.setState({trangthai:0});
        console.log(this.trunggian.value);
    }
    render() {
        return (
            <div className="col-lg-4">
                <div className="row">
                    <div className={"col-lg-5 " + this.props.vitri1}>
                        <div className="p-1">
                            <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                        </div>
                    </div>  
                    <div className="col-lg-7">
                        <div className="p-1">
                            <h2 classname="display-6"> {this.props.tieude} </h2>

                            <p>{this.props.noidung}</p>
                            {this.displayCheck()}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;