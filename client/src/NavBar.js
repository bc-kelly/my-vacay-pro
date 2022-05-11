import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';



function NavBar(){
    return (
        <div className="nav-bar" > 
                <NavLink to="/home" className="home-link" >HOME</NavLink>
                <NavLink to="/browse" className="home-link" >BROWSE</NavLink>
                <NavLink to="/accountsummary" className="home-link" >ACCOUNT SUMMARY</NavLink>
                <NavLink to="/profiles" className="home-link" >PROFILES</NavLink>
                <NavLink to="/mytrips" className="home-link" >MY TRIPS</NavLink>
                {/* <div class="dot"></div> */}
        </div>
    )
}

export default NavBar;