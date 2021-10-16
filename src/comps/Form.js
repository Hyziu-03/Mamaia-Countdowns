import Button from "../items/Button";
import Background from '../img/Background';

const Form = (props) => {
    return (
        <article className="article">
            <section className="request">
                <h1 className="heading" tabIndex='0'>{props.heading}</h1>
                <p className="description" tabIndex='0'>{props.description[0]}</p>
                <p className="description" tabIndex='0'>{props.description[1]}</p>
                <p className="description" tabIndex='0'>{props.description[2]}</p>
            </section>
            <form action="" className="form">
                <input type="text" name="text-input" id="text-input" className="input" placeholder="What is your name?"/>
                <input type="email" name="email-input" id="email-input" className="input" placeholder="What is your email?"/>
                <textarea placeholder="What do you want to say?" className="input textarea"/>
                <Button message="Send Message!"/>
            </form>
            <Background />
        </article>
    )
}

export default Form; 
