import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => (
    <div className="navbar">
        <div className="menu">
            <ul>
                <li><Link to="/about" className="button-menu">About</Link></li>
                <li><Link to="/" className="button-menu">Home</Link></li>
            </ul>
        </div>
    </div>
); 