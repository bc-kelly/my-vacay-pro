import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUpForm.css'

function SignUpForm({ setUser }) {
    const [accountName, setAccountName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();
    // console.log(setUser)

    function handleSubmit(e) {
    
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            accountName,
            email,
            password,
            password_confirmation: passwordConfirmation,
        }),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate("/profiles");
            alert (`Thanks for creating an account ${accountName}!`);
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="signup-form" >
            <div> Create your account below </div>
                <div>
                    <label htmlFor="account_name"> </label>
                    <input
                    type="text"
                    id="account_name"
                    placeholder="account name"
                    autoComplete="off"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input
                    type="text"
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input
                    type="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    />
                </div>
                <div>
                    <label htmlFor="password"> </label>
                    <input
                    type="password"
                    id="password_confirmation"
                    placeholder="confirm your password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                    />
                </div>
                <div>
                    <button className="log" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                </div>
                <div>
                    {errors.map((err) => (
                    <error key={err}>{err}</error>
                    ))}
                </div>
            </div>
        </form>
    );
}

export default SignUpForm;