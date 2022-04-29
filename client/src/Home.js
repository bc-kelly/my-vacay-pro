import React from "react";
import Login from './Login'
import './Home.css';


function Home( {setUser}) {
    return (
        <div className="home" > 
            Welcome to Vacation Pro
            <Login setUser={setUser} />
        </div>

    )
}

export default Home;