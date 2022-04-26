import React from 'react'
import {Link} from 'react-router-dom';
import {NavData} from './NavData';
import './nav.css'

export const Navbar = () => {
    console.log(NavData)
  return (
    <div className='navContainer'>
        <div className='nav'>
            <nav className='navLinks'>
                <ul className='nav-menu'>
                    {
                        NavData.map((navs, i) => {
                            return(
                                <li key={i} className={navs.cName}>
                                    <Link to={navs.path}>
                                        <span>{navs.title}</span>
                                    </Link>
                                </li>

                            )
                        })
                    }
                </ul>
            </nav>
        </div>
        <div className='navTitle'>
                <h2 className='brandLogo'>Restaurant99</h2>
        </div>
    </div>
  )
}
