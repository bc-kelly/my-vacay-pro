import React from "react";
import Login from './Login'
import './Home.css';


function Home( {setUser}) {
    return (
        <div className="home" > 
        Welcome to Vacation Pro
            <div  className="login-text" > 
                <Login setUser={setUser} />
            </div>
        </div>

    )
}

export default Home;