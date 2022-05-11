import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';



function NavBar({user, setUser}){
    return (
        <div className="nav-bar" > 
                <NavLink to="/home" className="home-link" >HOME</NavLink>
                { user ? <NavLink to="/browse" className="home-link" >BROWSE</NavLink> : null }
                { user ? <NavLink to="/accountsummary" className="home-link" >ACCOUNT SUMMARY</NavLink> : null }
                { user ? <NavLink to="/profiles" className="home-link" >PROFILES</NavLink> : null }
                { user ? <NavLink to="/mytrips" className="home-link" >MY TRIPS</NavLink> : null }
                {/* <div class="dot"></div> */}
        </div>
    )
}

export default NavBar;