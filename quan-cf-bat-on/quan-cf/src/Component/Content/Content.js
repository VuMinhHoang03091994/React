import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Table from '../Table/Table.js';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state= {
            data:[]
        }
        //a7/11 tạo ref để lưu giá trị
        this.ban = React.createRef()
        this.douong = React.createRef()
        this.soluong = React.createRef()
    }
    //hiện ra thông báo khi click vào button ORDER LIST
    // thongbao_od_list  = ()=>{alert("Hiện chưa có ORDER LIST");}
    // a5/11 truyền dữ liệu từ data_content vào setState, chạy sau khi hàm render chạy, setState...
    componentDidMount(){
        this.setState({data: this.props.data_content})
    }
    //a9/11 viết hàm xử lí sự kiện nút bấm đặt bàn
    addOrder = ()=>{
        //lấy giá trị nhập vào
        const ban = this.ban.current.value;
        const douong = this.douong.current.value;
        const soluong = this.soluong.current.value;
        // this.setState({data:[//a10/10 trải đều các phầm tử trong mảng
        //     //thêm phần tử vào mảng
        //     {ban:ban,
            // douong:douong,
            // soluong:soluong,
            // isDelete:false,
            // isPayed:false},
        //     ...this.state.data
        // ]})
        this.setState({
            data:[
                ...this.state.data,
                {ban: ban, 
                douong:douong,
                soluong:soluong,
                isDelete:false,
                isPayed:false} ,
            ]
        })
        
    }
    // componentDidUpdate(){
    //     console.log("aaaa",this.props.data_content);
    // }
    // delete_content = (ban) => {
    //     return ()=>{
    //         console.log()
    //     }
    // }
    render() {
        // console.log(this.state.data)
        const {data} = this.state;
        return (
            <div> 
            {/* phần header */}
            {/* <!-- slide --> */}
            <div id="myCarousel" className="carousel slide border" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./img/cf4.jpg" alt="Lion" />
                    <div className="carousel-caption d-none d-sm-block">
                        <Link className="btn btn-primary btn-xl rounded-pill mt-5" to='/OrderList'>ORDER LIST</Link>
                        <hr/>
                        <h5>Mỗi giọt cafe rơi, thời gian như ngừng lại.</h5>
                        <small>
                        Nếu đây là cà phê, hãy mang cho tôi một ít trà; nhưng nếu đây là trà, hãy mang cho tôi một ít cà phê.
                        </small>
                    </div>
                    </div>
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="./img/cf7.jpg" alt="Leopard" />
                    <div className="carousel-caption d-none d-sm-block">
                        <Link className="btn btn-primary btn-xl rounded-pill mt-5" to='/OrderList'>ORDER LIST</Link>
                        <hr/>
                        <h5>Love Cafe</h5>
                        <small>
                        Good morning – ngày mới vui vẻ bên tách cafe thơm phức
                        </small>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./img/cf1.jpg" alt="Cat" />
                    <div className="carousel-caption d-none d-sm-block">
                        <Link className="btn btn-primary btn-xl rounded-pill mt-5" to='/OrderList'>ORDER LIST</Link>
                        <hr/>
                        <h5>Black coffee</h5>
                        <small>
                        Đắng cafe, đắng không lời. Đắng câu duyên lỡ, đắng đời nhau ra.
                        </small>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./img/cf6.jpg" alt="Lion" />
                    <div className="carousel-caption d-none d-sm-block">
                        <Link className="btn btn-primary btn-xl rounded-pill mt-5" to='/OrderList'>ORDER LIST</Link>
                        <hr/>
                        <h5>Cafe chồn</h5>
                        <small>
                        Chỉ những người yêu cà phê đen đích thực, mới nhấm nháp được một chút ngọt ngào sau cái đắng.
                        </small>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        {/* <!-- end lide --> */}
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
                                        {/* a8/11 thêm  ref={this.ban} để gán giá trị từ value và ref*/}
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
                            {/* a6/11 Hàm map giống như vòng lặp. Mỗi lần lặp là truyền nguyên một phần tử (item)
                            của mảng vào hàm map...
                            */}
                            {data.map((item,index)=>{
                                // console.log(item)
                                return (

                                <tr>
                                    {/* b1:  */}
                                    <Table item={item}/>
                                </tr>
                                )
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