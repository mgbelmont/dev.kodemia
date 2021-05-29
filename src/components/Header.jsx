import React from 'react';

import Styles from './header.css'
import HeaderLogo from './HeaderLogo';
import HeaderInput from './HeaderInput';
import HeaderLogin from './HeaderLogin';
import HeaderButtonCreate from './HeaderButtonCreate';

class Header extends React.Component{
    render(){
        return (
            <nav className='header d-flex'>
                <HeaderLogo />
                <HeaderInput />
                <HeaderLogin />
                <HeaderButtonCreate />
            </nav>
        )
    }
}

export default Header