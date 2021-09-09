import React from 'react'
import './style.scss'

const ToggleButtons = () => {

    

    return (
        <div id='container'>
            <h2>Toggle Buttons</h2>
            <div class="container">
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    )
}

export default ToggleButtons