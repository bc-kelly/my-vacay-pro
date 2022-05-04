import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';



function NavBar(){
    return (
        <div className="nav-bar" > 
                <NavLink exact to="/" className="home-link" >Home</NavLink>
                <NavLink to="/browse" className="home-link" >Browse</NavLink>
                <NavLink to="/accountsummary" className="home-link" >Account Summary</NavLink>
                <NavLink to="/profiles" className="home-link" >Profiles</NavLink>
                <NavLink to="/mytrips" className="home-link" >My Trips</NavLink>
        </div>
    )
}

export default NavBar;