import React from 'react'
import './style.scss'

const Forms = () => {

    const RegexName = `^[A-Za-z( ')]*$`

    const RegexEmail = '(^[a-zA-Z0-9_.-]*)([@])([a-z]+)(.)([a-z]+)'


    return (
   
        <div id='container'>
            <h2>Form</h2>
            <form action="" method="get" class="form">
                <div class="form">
                    <label for="name">First name</label>
                    <input type="text" id="name" placeholder="Your first name ... " pattern={RegexName} minlength="3" required />
                </div>

                <div class="form">
                    <label for="lastname">Last name</label>
                    <input type="text" id="lastname" placeholder="Your last name ... " pattern={RegexName} minlength="3" required />
                </div>

                <div class="form">
                    <label for="age">Age</label>
                    <input type="number" id="age-input" placeholder="Your age ... " min="18" required />
                </div>

                <div class="form" id="email">
                    <label for="form">Email</label>
                    <input type="text" id="email-input" placeholder="Your email ..." pattern={RegexEmail} required />
                </div>

                <div class="form">
                    <label for="email">Confirmation of the email</label>
                    <input type="text" id="confirmed-email-input" placeholder="Please confirm your email ... " onblur="confirmEmail()" pattern={RegexEmail} required />
                </div>

                <div id="password-div">
                    <div class="form" id="password">
                        <label for="password" >Password</label>
                        <input type="password" id="password-input" placeholder="please choose a password with at least 6 characters ... " onblur="confirmEmail()" required />
                    </div>

                    <div class="form" id="confirmation-password">
                        <label for="password">Confirmation of the password</label>
                        <input type="password" id="confirmed-password-input" placeholder="Please confirm your password ... " onblur="confirmPassword()" required />
                    </div>
                </div>
    
                <div id="CGU">
                    <input type="radio" id="CGU-radio" required />
                    <label for="name">I hereby agree to the Terms of Use </label>
                </div>

                <div id="send">
                    <button>Envoyer</button>

                </div>

            </form>
        </div>


    )

}

export default Forms