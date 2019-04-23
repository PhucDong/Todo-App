import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todoapp">Todo App</Link>
                    </li>
                    <li>
                        <Link to="/weatherapp">Weather App</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
