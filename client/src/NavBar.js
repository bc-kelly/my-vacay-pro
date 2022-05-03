import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';



function NavBar(){
    return (
        <div className="nav-bar" > 
                <NavLink exact to="/" className="home-link" >Home</NavLink>
                <NavLink to="/browse">Browse</NavLink>
                <NavLink to="/accountsummary">Account Summary</NavLink>
                <NavLink to="/profiles">Profiles</NavLink>
                <NavLink to="/mytrips">My Trips</NavLink>
        </div>
    )
}

export default NavBar;