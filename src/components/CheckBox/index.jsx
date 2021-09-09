import React from 'react'
import './style.scss'

const CheckBox = () => {

    

    return (
        <div id='container'>
            <h2>Check boxes</h2>
            <div class="container">
                <label class="switch">
                    <input type="checkbox" id="checkbox" />
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    )
}

export default CheckBox