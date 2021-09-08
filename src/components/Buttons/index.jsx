import React from 'react'
import './style.scss'

const Buttons = () => {

    const content = 'Button'

    return (

        <div id='container'>
            <h2>Buttons</h2>
            <div class="container">
                <button class="button" id="button-plain-red">{content}</button>
                <button class="button" id="button-plain-blue">{content}</button>
                <button class="button" id="button-plain-green">{content}</button>
            </div>
            <div class="container">
                <button class="button" id="button-transparent-red">{content}</button>
                <button class="button" id="button-transparent-blue">{content}</button>
                <button class="button" id="button-transparent-green">{content}</button>
            </div>
        </div>


    )

}

export default Buttons