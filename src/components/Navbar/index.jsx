import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'



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
                <button class="button-plain-blue"><span class="icon-alert"><FontAwesomeIcon icon={faDownload} /></span>
</button>
            </nav>
        </div>


    )

}

export default Navbar