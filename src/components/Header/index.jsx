import React from 'react';


import HeaderLogo from './HeaderLogo';
import HeaderInput from './HeaderInput';
import HeaderLogin from './HeaderLogin';
import HeaderButtonCreate from './HeaderButtonCreate';

import Styles from './index.css'

class Header extends React.Component{
    render(){
        return ( 
            <nav className='header d-flex justify-content-between'>
                <div className='d-flex justify-content-center align-items-center'>
                    <HeaderLogo />
                    <HeaderInput />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <HeaderLogin />
                    <HeaderButtonCreate />
                </div>
                
                
            </nav>
        )
    }
}

export default Header