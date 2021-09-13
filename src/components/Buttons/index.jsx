import React from 'react'
import './style.scss'

const Buttons = () => {

    const content = 'Button'

    return (

        <div id='container'>
            <h2>Buttons</h2>
            <div class="container">
                <button class="button-squared-red">{content}</button>
                <button class="button-squared-blue">{content}</button>
                <button class="button-squared-green">{content}</button>
            </div>
            <div class="container">
                <button class="button-squared-red-sec">{content}</button>
                <button class="button-squared-blue-sec">{content}</button>
                <button class="button-squared-green-sec">{content}</button>
            </div>
            <div class="container">
                <button class="button-rounded-red">{content}</button>
                <button class="button-rounded-blue">{content}</button>
                <button class="button-rounded-green">{content}</button>
            </div>
            <div class="container">
                <button class="button-rounded-red-sec">{content}</button>
                <button class="button-rounded-blue-sec">{content}</button>
                <button class="button-rounded-green-sec">{content}</button>
            </div>
        </div>


    )

}

export default Buttons