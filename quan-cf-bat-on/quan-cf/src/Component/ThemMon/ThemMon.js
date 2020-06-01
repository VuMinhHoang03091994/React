import React, { Component } from 'react'

import ThemBanCon from '../ThemBanCon/ThemBanCon.js';
export default class ThemMon extends Component {
    render() {
        return (
            <>
                <td>
                    <ThemBanCon/><br />
                </td>
                <td>
                    <div className="form-group">
                    <input type="text" placeholder="Số lượng" />
                    </div>
                </td>
            </>
        )
    }
}
