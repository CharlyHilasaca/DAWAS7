import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AdminBoard from "./pages/AdminBoard";
import ModeratorBoard from "./pages/ModeratorBoard";
import UserService from "./services/user.service";

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = UserService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <Router>
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile currentUser={currentUser} />} />
                    <Route path="/admin" element={<AdminBoard />} />
                    <Route path="/mod" element={<ModeratorBoard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
