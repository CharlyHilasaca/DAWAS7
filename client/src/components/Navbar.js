import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, setCurrentUser }) => {
    const handleLogout = () => {
        localStorage.removeItem("user");
        setCurrentUser(null);
    };

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">App</Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                {currentUser && currentUser.roles.includes("ROLE_MODERATOR") && (
                    <li className="nav-item">
                        <Link to="/mod" className="nav-link">Moderator Board</Link>
                    </li>
                )}
                {currentUser && currentUser.roles.includes("ROLE_ADMIN") && (
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link">Admin Board</Link>
                    </li>
                )}
            </div>
            <div className="navbar-nav ml-auto">
                {currentUser ? (
                    <>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">{currentUser.username}</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={handleLogout}>Logout</a>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
