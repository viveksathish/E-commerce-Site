import React from 'react'

import { Link } from 'react-router-dom'

// import Logo from '../../assets/crown.svg';



import './header.styles.scss';

export const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                {/* <ReactSVG src={Logo}/> */}
                LOGO
            </Link>
            <div className="options">
                <Link className="option"  to='/shop'  >
                    SHOP
                </Link>
                <Link className="option"  to='/contact'  >
                    CONTACT
                </Link>
            </div>
        </div>
    )
}
