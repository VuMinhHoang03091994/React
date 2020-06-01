import React, { Component } from 'react'


import ThemMon from '../ThemMon/ThemMon.js';
export default class ThemBan extends Component {
    render() {
        return (
                <div className="container-buld">
                    <div className="container content">
                        <div className="row">
                        <div className="col-6 col-sm-12 col-md-12">
                            <table className="table">
                            <thead className="bang_user">
                                <tr>
                                <th>Chọn bàn</th>
                                <th>Gọi món</th>
                                <th>Số lượng</th>
                                <th>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody className="bang_user_a">
                                <tr>
                                <td>
                                    <select name="bàn số:">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    </select>
                                </td>
                                <ThemMon></ThemMon>
                                <td><div className="form-group"> 
                                   <label>1</label>
                                    </div></td>
                                <td>
                                    <button type="submit" className="btn btn-info">Thêm món</button>
                                    <button type="submit" className="btn btn-info">Đặt bàn</button>
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
