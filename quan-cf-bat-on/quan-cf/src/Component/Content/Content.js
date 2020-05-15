import React, { Component } from 'react'


class Content extends Component {
    constructor(props) {
        super(props);
        this.state= {
            data:[]
        }
        //b6 tạo ref để lưu giá trị
        this.ban = React.createRef()
        this.douong = React.createRef()
        this.soluong = React.createRef()
    }
    //hiện ra thông báo khi click vào button ORDER LIST
    thongbao_od_list  = ()=>{alert("Hiện chưa có ORDER LIST");}
    // b4 truyền dữ liệu từ data_content vào setState, chạy sau khi hàm render chạy, setState...
    componentDidMount(){
        this.setState({data: this.props.data_content})
    }
    //b8 viết hàm xử lí sự kiện nút bấm đặt bàn
    addOrder = ()=>{
        //lấy giá trị nhập vào
        const ban = this.ban.current.value;
        const douong = this.douong.current.value;
        const soluong = this.soluong.current.value;
        this.setState({data:[//b9 trải đều các phầm tử trong mảng
            //thêm phần tử vào mảng
            {ban:ban,
            douong:douong,
            soluong:soluong,
            isDelete:false,
            isPayed:false},
            ...this.state.data
        ]})
    }
    componentDidUpdate(){
        console.log("aaaa",this.props.data_content);
    }
    render() {
        const {data} = this.state;
        return (
            <div>
            {/* phần header */}
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h2 className="masthead-heading mb-0">Trăm nghe không bằng một thấy</h2>
                        <h3 className="masthead-subheading mb-0">Trăm thấy không bằng một thử</h3>
                        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5" onClick={()=> this.thongbao_od_list()}>ORDER LIST</a>
                    </div>
                </div>
            </header>
            {/* end phần header */}
            {/* phần content */}
            <div className="container-buld">
            <div className="container content">
                <div className="row">
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
                                        {/* b7 thêm  ref={this.ban} để gán giá trị từ value và ref*/}
                                        <input ref={this.ban} type="text" placeholder="Bàn số"/>
                                    </div></td>
                                    <td><div className="form-group">
                                        <input ref={this.douong} type="text" placeholder="Đồ uống"/>
                                    </div></td>
                                    <td><div className="form-group">
                                        <input ref={this.soluong} type="text" placeholder="Số lượng"/>
                                    </div></td>
                                    <td>
                                        <button type="submit" className="btn btn-info" onClick={this.addOrder}>Đặt bàn</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* //////   */}
                <h1 className="Danh_sach_ban">Danh sách bàn</h1>
                <div className="row">
                <div className="col-6 col-sm-12 col-md-12">
                    <table className="table">
                        <thead className="bang_user">
                                <tr>
                                    <th>Bàn</th>
                                    <th>Đồ uống</th>
                                    <th>Số lượng</th>
                                </tr>
                            </thead>
                        <tbody>
                            {/* b5 Hàm map giống như vòng lặp. Mỗi lần lặp là truyền nguyên một phần tử (item)
                            của mảng vào hàm map...
                            */}
                            {data.map((item,index)=>{
                                return (
                                <tr key={index}>
                                    <td>{item.ban}</td> 
                                    <td>{item.douong}</td>
                                    <td>{item.soluong}</td>
                                    <td>
                                        <div className="row">
                                            <div className="btn btn-group">
                                                <div className="btn btn-primary">Edit</div>
                                                <div className="btn btn-info">Pay</div>
                                                <div className="btn btn-danger">Delete</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>)
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        {/* end phần content */}
        </div>
        )
    }
}

export default Content;