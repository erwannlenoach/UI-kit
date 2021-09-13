import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faInfoCircle, faInfo } from '@fortawesome/free-solid-svg-icons'



const Alerts = () => {

    const title_primary = 'Alert'
    const text_primary = 'check it out'


    const title_danger = 'Danger'
    const text_danger = 'Be careful, there is a danger around '

    const title_success= 'Success'
    const text_success = 'Congratulation , you made it'

    return (

        <div id='container'>
            <h2>Alerts</h2>
            <div class="alert-container">
                <div class="alert" id="alert-primary">
                    <span class="icon-alert"><FontAwesomeIcon icon={faInfoCircle} /></span>
                    <div class="container">
                        <p class="title-alert">{title_primary}</p>
                        <p class="text-alert">{text_primary}</p>
                    </div>
                    <span class="icon-alert" ><FontAwesomeIcon icon={faTimes} /></span>
                </div>
                <div class="alert" id="alert-danger">
                    <span class="icon-alert"><FontAwesomeIcon icon={faInfoCircle} /></span>
                    <div class="container">
                        <p class="title-alert">{title_danger}</p>
                        <p class="text-alert">{text_danger}</p>
                    </div>
                    <span class="icon-alert" ><FontAwesomeIcon icon={faTimes} /></span>
                </div>
                <div class="alert" id="alert-success">
                    <span class="icon-alert"><FontAwesomeIcon icon={faInfoCircle} /></span>
                    <div class="container">
                        <p class="title-alert">{title_success}</p>
                        <p class="text-alert">{text_success}</p>
                    </div>
                    <span class="icon-alert" ><FontAwesomeIcon icon={faTimes} /></span>
                </div>

            </div>
        </div>


    )

}

export default Alerts