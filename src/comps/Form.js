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
            <form action="" method='' className="form" id='form' onSubmit={(event) => event.preventDefault()}>
                <input type="text" name="name" id="text-input" className="input touch-target" placeholder="What is your name?"/>
                <input type="email" name="email" id="email" className="input touch-target" placeholder="What is your email?"/>
                <textarea placeholder="What do you want to say?" className="input textarea touch-target" id="message" name='message'/>
                <Button message="Send Message!" origin='form'/>
            </form>
            <Background />
        </article>
    )
}

export default Form; 
