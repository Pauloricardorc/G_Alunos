import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../../static/img/logo_transparent.png'
import './style.css'

function Header() {
    return(
        <div className="container_header">
            <nav className="container navbar navbar-light bg-light">
                <div className="container-fluid header">
                    <div className="container_logo">
                        <Link to={'/'} className="navbar-brand">
                            <img src={Logo} className="rounded float-star" alt="..."/>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Header