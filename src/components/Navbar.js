import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">HOME </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/#about">ABOUT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/#rooms">ROOMS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/services">SERVICES</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/gallery">GALLERY</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="seedo">SEE & DO</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="contact">CONTACT</NavLink>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn my-2 my-sm-0" type="submit">Book a Room</button>
                </form>
            </div>
            </nav>
        </>
        
    );
}

export default Navbar;