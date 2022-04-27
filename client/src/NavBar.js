import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar(){
    return (
        <div> 
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/browse">Browse</NavLink>
                <NavLink to="/accountsummary">Account Summary</NavLink>
                <NavLink to="/profiles">Profiles</NavLink>
                <NavLink to="/mytrips">My Trips</NavLink>
        </div>
    )
}

export default NavBar;