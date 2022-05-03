import React from "react";
import Login from './Login'
import './Home.css';


function Home( {setUser}) {
    return (
        <div className="home" > 
        <div className="home-title" >
        Welcome to Vacation Pro
        </div>
            <div  className="login-text" > 
                <Login setUser={setUser} />
            </div>
        </div>

    )
}

export default Home;