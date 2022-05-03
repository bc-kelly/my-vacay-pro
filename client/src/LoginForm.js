import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import './LoginForm.css';

function LoginForm({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            navigate("/browse");
            console.log('login success')
            alert (`Welcome ${email}`)
            // console.log(setUser)
            r.json().then((user) => setUser(user));
        } else {
            console.log('login failed')
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email"> Email: </label>
                <input
                type="text"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password"> Password: </label>
                <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button className="log" variant="fill" color="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
                </button>
            </div>
            <div>
                {errors.map((err) => (
                <error key={err}>{err}</error>
                ))}
            </div>
        </form>
    );
}

export default LoginForm;