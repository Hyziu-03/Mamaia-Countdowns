import Button from "../items/Button";
import Contact from "../items/Contact";

const Form = (props) => {
    return (
        <article className="article">
            <section className="request">
                <h1 className="heading" tabIndex='0'>{props.heading}</h1>
                <p className="description" tabIndex='0'>{props.description[0]}</p>
                <p className="description" tabIndex='0'>{props.description[1]}</p>
                <p className="description" tabIndex='0'>{props.description[2]}</p>
            </section>
            <section className='contact-form-container'>
                <Contact
                    firstInput='What is your name?'
                    secondInput='What is your email?'
                    thirdInput='What do you want to say?'
                />
                <Button origin='form' message='Send a Message!' />
            </section>
        </article>
    )
}

export default Form; 
