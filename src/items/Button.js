import * as EmailValidator from 'email-validator';
import DOMPurify from 'dompurify';

var emailInput = undefined;
var textInput = undefined;
var messageInput = undefined;

window.addEventListener('DOMContentLoaded', () => {
    emailInput = document.getElementById('email')[0];
    textInput = document.getElementById('text-input')[0];
    messageInput = document.getElementById('message')[0];
});

const Button = (props) => {
    const validateMessage = () => {
        try {
            if (props.origin === 'form') {

                let isSent = false;
                let isNotCorrect = EmailValidator.validate(emailInput.value) === false || textInput.value === '' || messageInput.value === '';
                isNotCorrect ? alert('Please, fill in all the information requested.') : isSent = true;

                if (isSent) {
                    
                    // eslint-disable-next-line
                    let emailInformation = 'mailto:szymon.hyziak@protonmail.com?' + 'subject=' + DOMPurify.sanitize(textInput.value) + ' | ' + DOMPurify.sanitize(emailInput.value) + '&body=' + DOMPurify.sanitize(messageInput.value);
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
        <button className="btn hover touch-target" tabIndex='-1' onClick={validateMessage} type='submit'>{props.message}</button>
    )
}

export default Button;
