import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import './LoginForm.css';

function LoginForm({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const Swal = require('sweetalert2')
    let navigate = useNavigate();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

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
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
              })
            // alert (`Welcome ${email}`)
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
                <div className="login-header" > Login here with your email and password</div>
                <label htmlFor="email"> </label>
                <input
                className="login-form-input"
                type="text"
                id="txt-input"
                placeholder="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password"> </label>
                <input
                className="login-form-input"
                type="password"
                id="txt-input"
                placeholder="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button className="login-btn" variant="fill" color="primary" type="submit">
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