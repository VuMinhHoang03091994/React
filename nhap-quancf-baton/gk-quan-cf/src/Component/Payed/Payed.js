import React, { Component } from 'react'

export default class Payed extends Component {
    render() {
        return (
        <div className="container-buld"><div>
  <br /><br /><br /><br />
</div>

            <div className="container content">
                <h1 className="Danh_sach_ban">Danh sách bàn đã thanh toán</h1>
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
                        <tr>
                        <td>1</td> 
                        <td>Trà sữa</td>
                        <td>5</td>
                        <td>
                            <div className="row">
                            <div className="btn btn-group">
                                <div className="btn btn-info">Unpaid</div>
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

        )
    }
}
