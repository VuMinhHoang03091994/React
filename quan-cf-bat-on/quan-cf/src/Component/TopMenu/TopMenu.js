import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class TopMenu extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/homepage">QUÁN CAFE BẤT ỔN</NavLink>
                        <button className="navbar-toggler" type="button" 
                                             data-toggle="collapse" data-target="#navbarResponsive" 
                                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/ThemBan'>Thêm bàn</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/Menu'>Menu</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/Payed'>Payed</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/Trash'>Trash</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/Logout'>LogOut</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}
