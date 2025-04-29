import React, { useState } from "react";
import AuthService from "../services/auth.service";

const Login = ({ setCurrentUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await AuthService.login(username, password);
            setCurrentUser(user);
            window.location.href = "/";
        } catch (error) {
            setMessage("Invalid username or password");
        }
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block">Login</button>
                    </div>
                    {message && <div className="alert alert-danger">{message}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;
