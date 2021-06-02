import React from 'react';

import AppButton from '../AppButton'

import HeaderLogo from './HeaderLogo';
import HeaderInput from './HeaderInput';
import HeaderLogin from './HeaderLogin';
import HeaderButtonCreate from './HeaderButtonCreate';
import AppThemeToggle from '../AppThemeToggle'

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
                    

                    <AppButton className='btn-link d-flex align-items-center' text="log in" type="anchor" />
                    <AppButton className='btn-primary' text="Create Account" type="anchor" />
                    <AppThemeToggle />
                    </div>
                
                
            </nav>
        )
    }
}

export default Header