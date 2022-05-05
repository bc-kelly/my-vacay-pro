import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './Login.css';


function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
//   console.log(setUser)

  return (
      <div > 
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <divider />
          <p className="account" >
            Don't have an account? &nbsp;
            <button className="login-btn" color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <divider />
          <p className="already" >
            Already have an account? &nbsp;
            <button className="login-btn" color="secondary" onClick={() => setShowLogin(true)}>
              Login
            </button>
          </p>
        </>
      )}
      </div>
  );
}


export default Login;