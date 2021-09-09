import React from 'react'
import './style.scss'

const DropdownMenu = () => {


    return (

        <div id='container'>
            <h2>Dropdown Menu</h2>
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
                </div>
            </div>
        </div>


    )

}

export default DropdownMenu