// ? This file is optimised for version 1.0

const Explanation = (props) => {
    return (
        <article className="explanation">
            <h1 className="heading" tabIndex='0'>{props.heading}</h1>
            <p className="description" tabIndex='0'>{props.description[0]}</p>
            <p className="description" tabIndex='0'>{props.description[1]}</p>
            <p className="description" tabIndex='0'>{props.description[2]}</p>
        </article>
    )
}

export default Explanation;
