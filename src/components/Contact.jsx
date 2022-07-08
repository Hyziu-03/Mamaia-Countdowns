const Contact = (props) => {
    return (
        <form action="" method="" className="form article" id="form" onSubmit={(event) => event.preventDefault()}>
            <input type="text" name="name" id="text-input" className="input touch-target text-input" placeholder={props.firstInput} maxLength="20"/>
            <input type={props.secondInputType} name="email" id="email" className="input touch-target email" placeholder={props.secondInput} maxLength="40"/>
            <textarea placeholder={props.thirdInput} className="input textarea touch-target message" id="message" name="message" maxLength={40}/>
        </form>
    );
}

export default Contact;
