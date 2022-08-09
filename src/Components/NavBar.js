import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
        <React.Fragment>
            <nav>


                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li ><Link to="/news">News</Link></li>
                    <li ><Link to="/contact">Contact</Link></li>
                    <li><Link to="/dictionary">Dictionary</Link></li>

                </ul>

            </nav>
        </React.Fragment>
    )
}
