import * as EmailValidator from 'email-validator';
import DOMPurify from 'dompurify';

const Button = (props) => {
    const prepareEmail = () => {
        try {

            if(props.origin === 'form') {

                let username = document.getElementsByClassName('text-input')[0];
                let email = document.getElementsByClassName('email')[0];
                let message = document.getElementsByClassName('message')[0];

                let isSent = false;
                let isNotCorrect = EmailValidator.validate(email.value) === false || username.value === '' || message.value === '';
                isNotCorrect ? alert('Please, fill in all the information requested.') : isSent = true;

                if(isSent) {

                    // eslint-disable-next-line
                    let emailData = 'mailto:szymon.hyziak@protonmail.com?' + 'subject=' + DOMPurify.sanitize(username.value) + ' from ' + DOMPurify.sanitize(email.value) + '&body=' + DOMPurify.sanitize(message.value);
                    window.location.assign(emailData);
                    alert('Please wait for redirection to your mail app.');
                
                }

            }

        } catch(error) {
            throw new Error(error);
        }
    }

    return (
        <button className="btn hover touch-target" tabIndex='-1' type='submit' onClick={prepareEmail}>{props.message}</button>
    )
}

export default Button;
