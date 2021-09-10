import React from 'react'
import './style.scss'

const Navbar = () => {

    const content = 'Button'

    return (

        <div id='container'>
            <h2>Navbar</h2>
            <nav id="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div id="search-navbar">
                    <input type="text" id="search-navbar-input" placeholder="Your search" />
                </div>
                <button class="button-plain-blue">Download</button>
            </nav>
        </div>


    )

}

export default Navbar