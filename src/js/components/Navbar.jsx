import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand p-1" href="#">
            Start whatever you want
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto ms-auto p-1">
            <li className="nav-item active">
                <a className="nav-link active" href="#">
                    Home 
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    About
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Services
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Contact
                </a>
            </li>            
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;