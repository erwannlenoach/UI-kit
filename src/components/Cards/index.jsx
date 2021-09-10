import React from 'react'
import img from 'assets/surfboard.jpg'
import './style.scss'



const Cards = () => {

    const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    return (

        <div id='container'>
            <h2>Cards</h2>
            <div class="card">
                <div class="img-card">
                    <img src={img} />
                </div>
                <div class="cards-text">
                    <h3 id="title-card">Item</h3>
                    <p id="paragraph-card">{paragraph}</p>
                </div>
                <div>
                    <button class="button-plain-blue">Show More</button>
                </div>

            </div>

        </div>




    )

}

export default Cards