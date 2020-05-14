import React, { Component } from 'react'

export default class TopMenu extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">QUÁN CAFE BẤT ỔN</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Payd</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Trash</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">LogOut</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}