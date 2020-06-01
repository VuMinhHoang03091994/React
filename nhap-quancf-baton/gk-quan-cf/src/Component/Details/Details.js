import React, { Component } from 'react'

export default class Details extends Component {
    
    render() {
        return (
            <>
                {/* start chi tiết */}
                <br /><br />
                {/* Page Content */}
                <div className="container">
                    {/* Portfolio Item Heading */}
                    <h1 className="my-4">Details
                    <small />
                    </h1>
                    {/* Portfolio Item Row */}
                    <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src="./img/cf4.jpg" alt />
                    </div>
                    <div className="col-md-4">
                        <h3 className="my-3">Mỗi giọt cafe dơi, thời gian như ngừng lại.</h3>
                        <p>Nếu đây là cà phê, hãy mang cho tôi một ít trà. Nhưng nếu đây là trà, hãy mang cho tôi một ít cà phê.</p>
                        <h3 className="my-3">Details</h3>
                        <ul>
                        <li>Tên: Cafe sữa</li>
                        <li style={{color: 'red'}}>Giá: 15.000đ</li>
                        <li>Trạng thái: Còn</li>
                        <div className="row">
                            <div className="btn btn-group">
                                <div className="btn btn-primary">Edit</div>
                                <div className="btn btn-danger">Delete</div>
                            </div>
                        </div>
                        </ul>
                    </div>
                    </div>
                    {/* /.row */}
                    {/* Related Projects Row */}
                    <h3 className="my-4">Project Details</h3>
                    <div className="row">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img className="img-fluid" src="./img/cf5.jpg" alt />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img className="img-fluid" src="./img/cf3.jpg" alt />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img className="img-fluid" src="./img/cf8.jpg" alt />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img className="img-fluid" src="./img/cf2.jpg" alt />
                        </a>
                    </div>
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
                {/* end chi tiết */}
            </>

        )
    }
}
