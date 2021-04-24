import React from 'react';
import logo from '../assets/images/logo.png'
import { Container } from 'reactstrap'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <Container>
            <nav className="navbar fixed-top bg-white  px-5  border-bottom justify-content-between">
                <div className='d-flex align-items-center text-dark'>
                    <a className="navbar-brand mr-5" href="#">
                        <img src={logo} width="50" height="50" alt="" />
                    </a>
                    <div className='ml-2 d-flex'>
                        <div className='navigate mr-5 '>
                            <NavLink
                                to="/"
                                activeClassName="active"
                                exact
                            >
                                Home
                            </NavLink>
                        </div>

                        <div className='navigate'>
                            <NavLink to="/addProduct">Manage Product</NavLink>
                        </div>


                    </div>
                </div>


                <ul className="navbar-nav ">
                    <li className="nav-item dropdown">
                        <a className="nav-link navigate dropdown-toggle" style={{textDecoration:'none', color:'black !important'}}  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Shopping cart
        </a>

                    </li>
                </ul>

            </nav>
        </Container>

    )
}
export default Header
