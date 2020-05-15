import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class TopMenu extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">QUÁN CAFE BẤT ỔN</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Payed</a> */}
                                    <Link className="nav-link" to='/Payed'>Payed</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Trash</a> */}
                                    <Link className="nav-link" to='/Trash'>Trash</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">LogOut</a> */}
                                    <Link className="nav-link" to='/LogOut'>LogOut</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}
