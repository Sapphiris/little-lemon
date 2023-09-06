import React from 'react';
import './Header.css';
import {ReactComponent as LemonLogo} from "../images/Logo.svg"

const Header = () => {
    return (
        <header className="header">
            <LemonLogo className='LemonLogo'/>
        </header>
    )
}

export default Header;