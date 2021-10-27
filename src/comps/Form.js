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
            <Contact />
        </article>
    )
}

export default Form; 
