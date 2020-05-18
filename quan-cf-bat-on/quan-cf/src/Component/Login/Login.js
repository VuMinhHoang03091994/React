import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card card-signin flex-row my-5">
                    <div className="card-img-left d-none d-md-flex">
                    </div>
                    <div className="card-body">
                    <h5 className="card-title text-center">Đăng nhập</h5>
                    <form className="form-signin">
                        <div className="form-label-group">
                        <input type="text" id="inputUserame" className="form-control" placeholder="Username" required />
                        <label htmlFor="inputUserame">Username</label>
                        </div>
                        <hr />
                        <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                        </div>
                        <Link to ="/homepage" ><button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Đăng nhập</button></Link>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>

        )
    }
}
