const Contact = (props) => {
    return (
        <form action="" method='' className="form article" id='form' onSubmit={(event) => event.preventDefault()} autoComplete='off'>
            <input type="text" name="name" id="text-input" className="input touch-target text-input" placeholder={props.firstInput}/>
            <input type={props.secondInputType} name="email" id="email" className="input touch-target email" placeholder={props.secondInput}/>
            <textarea placeholder={props.thirdInput} className="input textarea touch-target message" id="message" name='message'/>
        </form>
    );
}

export default Contact;
