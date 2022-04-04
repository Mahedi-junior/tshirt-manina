import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to Tshirt Mania</h2>
            <nav>
                <Link to='/home' >Home</Link>
                <Link to='/orderreview'>OrderReview</Link>
                <Link to='/grandpa'>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;