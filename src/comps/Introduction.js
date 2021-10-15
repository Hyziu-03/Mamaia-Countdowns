import Button from '../items/Button';

const Introduction = (props) => {
    return (
        <article className="introduction">
            <section className="text-section">
                <h1 className="heading" tabIndex='0'>{props.heading}</h1>
                <p className="description" tabIndex='0'>{props.description}</p>
            </section>
            <Button />
        </article>
    )
}

export default Introduction;
