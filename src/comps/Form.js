import { useForm, ValidationError } from '@formspree/react';

import Button from "../items/Button";
import Background from '../img/Background';

const Form = (props) => {
    const [state, handleSubmit] = useForm("xdoyvago");

    if(state.succeeded) {
        console.log('The from has been successfully sent.');
    }

    return (
        <article className="article">
            <section className="request">
                <h1 className="heading" tabIndex='0'>{props.heading}</h1>
                <p className="description" tabIndex='0'>{props.description[0]}</p>
                <p className="description" tabIndex='0'>{props.description[1]}</p>
                <p className="description" tabIndex='0'>{props.description[2]}</p>
            </section>
            <form action="https://formspree.io/f/xdoyvago" method="POST" className="form" id='form' onSubmit={handleSubmit}>
                <input type="text" name="name" id="text-input" className="input" placeholder="What is your name?"/>
                <input type="email" name="email" id="email" className="input" placeholder="What is your email?"/>
                <textarea placeholder="What do you want to say?" className="input textarea" id="message" name='message'/>
                <Button message="Send Message!" origin='form'/>
            </form>
            <Background />
        </article>
    )
}

export default Form; 
