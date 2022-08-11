import React from 'react'
import { Link } from 'react-router-dom'
 import './App.css';


export const NavBar = () => {

    return (
        <React.Fragment>
            <nav>

                <ul className= "nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/news">News</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                    <li className="nav-item"><Link to="/dictionary">Dictionary</Link></li>

                </ul>

            </nav>
        </React.Fragment>
    )
}
