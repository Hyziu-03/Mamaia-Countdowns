const Introduction = (props) => {
    return (
        <article className="text-section">
            <h1 className="heading" tabIndex='0'>{props.heading}</h1>
            <p className="description" tabIndex='0'>{props.description}</p>
        </article>
    )
}

export default Introduction;
