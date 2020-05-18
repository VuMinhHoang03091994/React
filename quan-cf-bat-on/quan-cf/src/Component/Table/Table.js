import React, { Component } from 'react'
// b2 Tạo components Table. 1 dòng = 1 Table
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }   
    // img:'cf3.jpg',
    // douong:'Love Cafe',
    // noidung:'Good morning – ngày mới vui vẻ bên tách cafe thơm phức',
    // isDelete:false,

    // b3 Khởi tạo state trong hàm constructor
    
    delete_content = () => {
        this.setState({
            isDelete: true
        })
    }
    componentDidMount(){
        this.setState(this.props.item)
    }
    render() {
        // B4 hàm render chạy nè.
        var item = this.state;
        console.log("item",item)
        // gán item bằng state. Chạy lần đầu thì componentDidMount chưa chạy nên item rỗng
        return (
            <>
            {/* B5 nếu this.state đã có giá trị và isDelete bằng false tức là chưa xóa thì sẽ in ra
             */}
             {/* {console.log("table",this.state)} */}
            {this.state && !this.state.isDelete &&
                <>
                    <td>{item.ban}</td> 
                        <td>{item.douong}</td>
                        <td>{item.soluong}</td>
                        <td>
                        <div className="row">
                            <div className="btn btn-group">
                                <div className="btn btn-primary">Edit</div>
                                <div className="btn btn-info">Pay</div>
                                <div className="btn btn-danger" onClick={this.delete_content}>Delete</div>
                            </div>
                        </div>
                    </td>
                </>
            }
            </>
        )
    }
}
