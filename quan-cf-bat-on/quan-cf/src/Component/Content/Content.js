// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import Table from '../Table/Table.js';
import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
<div>
    {/* start slide */}
    <div id="myCarousel" className="carousel slide border" data-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item">
            <img className="d-block w-100" src="./img/cf4.jpg" alt="Lion" />
            <div className="carousel-caption d-none d-sm-block">
            <h5>Mỗi giọt cafe dơi, thời gian như ngừng lại.</h5>
            <small>
                Nếu đây là cà phê, hãy mang cho tôi một ít trà; nhưng nếu đây là trà, hãy mang cho tôi một ít cà phê.
            </small>
            </div>
        </div>
        <div className="carousel-item active">
            <img className="d-block w-100" src="./img/cf3.jpg" alt="Leopard" /> 
            <div className="carousel-caption d-none d-sm-block">
            <h5>Love Cafe</h5>
            <small>
                Good morning – ngày mới vui vẻ bên tách cafe thơm phức
            </small>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="./img/cf1.jpg" alt="Cat" />
            <div className="carousel-caption d-none d-sm-block">
            <h5>Black coffee</h5>
            <small>
                Đắng cafe, đắng không lời. Đắng câu duyên lỡ, đắng đời nhau ra.
            </small>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="./img/cf6.jpg" alt="Lion" />
            <div className="carousel-caption d-none d-sm-block">
            <h5>Cafe</h5>
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
        {/* end slide */}
    <div className="container-buld">
        <div className="container content">
        <h1 className="Danh_sach_ban">Danh sách bàn</h1>
            <div className="row">
                <div className="col-6 col-sm-12 col-md-12">
                <table className="table">
                    <thead className="bang_user">
                    <tr>
                        <th>Bàn</th>
                        <th>Đồ uống</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2</td> 
                        <td>cafe</td>
                        <td>4</td>
                        <td><div className="form-group"> 
                                <label>1</label>
                            </div>
                        </td>
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
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }
}
