import Button from "./Button";

const Contact = () => {
    return (
        <form action="" method='' className="form article" id='form' onSubmit={(event) => event.preventDefault()}>
            <input type="text" name="name" id="text-input" className="input touch-target" placeholder="What is your name?"/>
            <input type="email" name="email" id="email" className="input touch-target" placeholder="What is your email?"/>
            <textarea placeholder="What do you want to say?" className="input textarea touch-target" id="message" name='message'/>
            <Button message="Send Message!" origin='form'/>
        </form>
    )
}

export default Contact;
