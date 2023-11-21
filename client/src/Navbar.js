import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Default from './Default';
function Navbar() {
  return (
    <div>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
            </li> */}
        </ul>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Default />} />
        </Routes>
    </div>
  )
  }
export default Navbar