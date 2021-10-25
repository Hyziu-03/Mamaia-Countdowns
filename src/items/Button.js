import * as EmailValidator from 'email-validator';

const Button = (props) => {
    const validate = () => {
        try {
            if (props.origin === 'form') {
                let isSent = false;
                const emailInput = document.getElementById('email');
                const textInput = document.getElementById('text-input');
                const message = document.getElementById('message');

                let isNotCorrect = EmailValidator.validate(emailInput.value) === false || textInput.value === '' || message.value === '';
                isNotCorrect ? alert('Please, fill in all the information requested.') : isSent = true;

                if (isSent) {
                    let emailInformation = 'mailto:szymon.hyziak@protonmail.com?' + 'subject=' + textInput.value + ' | ' + emailInput.value + '&body=' + message.value;
                    window.location.assign(emailInformation);

                    emailInput.value = '';
                    textInput.value = '';
                    message.value = '';

                    alert('Please wait for redirection to your mail app.');
                }
            }
        } catch(exception) {
            throw new Error(exception);
        }
    }

    return (
        <button className="btn hover touch-target" tabIndex='0' onClick={validate} type='submit'>{props.message}</button>
    )
}

export default Button;
