import * as EmailValidator from 'email-validator';

const validate = () => {
    let isSent = false;
    const emailInput = document.getElementById('email-input');
    const textInput = document.getElementById('text-input');
    const message = document.getElementById('textarea');

    let isNotCorrect = EmailValidator.validate(emailInput.value) === false || textInput.value === '' || message.value === '';
    isNotCorrect ? alert('Please, fill in all the information requested.') : isSent = true;

    if(isSent) {
        emailInput.value = ''; textInput.value = ''; message.value = '';
        alert('Your message has been sent successfully!');
    }
}

const Button = (props) => <button className="btn hover" tabIndex='0' onClick={validate}>{props.message}</button>

export default Button;
