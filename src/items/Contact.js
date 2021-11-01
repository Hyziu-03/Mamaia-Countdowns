import Button from "./Button";

const Contact = (props) => {
    return (
        <form action="" method='' className="form article" id='form' onSubmit={(event) => event.preventDefault()}>
            <input type="text" name="name" id="text-input" className="input touch-target" placeholder={props.firstInput}/>
            <input type="email" name="email" id="email" className="input touch-target" placeholder={props.secondInput}/>
            <textarea placeholder={props.thirdInput} className="input textarea touch-target" id="message" name='message'/>
        </form>
    )
}

export default Contact;
