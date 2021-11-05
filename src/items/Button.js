// ? This file is optimised for version 1.0

import * as EmailValidator from 'email-validator';

const Button = (props) => {
    const validate = () => {
        try {
            if (props.origin === 'form') {
                let isSent = false;

                const emailInput = document.getElementById('email');
                const textInput = document.getElementById('text-input');
                const messageInput = document.getElementById('message');

                let isNotCorrect = EmailValidator.validate(emailInput.value) === false || textInput.value === '' || messageInput.value === '';
                isNotCorrect ? alert('Please, fill in all the information requested.') : isSent = true;

                if (isSent) {
                    // eslint-disable-next-line
                    let emailInformation = 'mailto:szymon.hyziak@protonmail.com?' + 'subject=' + textInput.value + ' | ' + emailInput.value + '&body=' + messageInput.value;
                    window.location.assign(emailInformation);

                    emailInput.value = '';
                    textInput.value = '';
                    messageInput.value = '';

                    alert('Please wait for redirection to your mail app.');
                }
            }
        } catch(exception) {
            throw new Error(exception);
        }
    }

    return (
        <button className="btn hover touch-target" tabIndex='-1' onClick={validate} type='submit'>{props.message}</button>
    )
}

export default Button;
