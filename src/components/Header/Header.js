import React from 'react'
import './Header.css';
import { APP_TITLE } from '../../common/constant';

function Header() {
    return (
        <div className="header-container">
            <span className="header-title">{APP_TITLE}</span>
        </div>
    )
}

export default Header
