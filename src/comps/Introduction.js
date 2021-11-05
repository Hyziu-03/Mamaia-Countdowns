// ? This file is optimised for version 1.0

import { Link } from 'react-router-dom';
import Button from '../items/Button';

const Introduction = (props) => {
    return (
        <article className="introduction">
            <section className="text-section">
                <h1 className="heading" tabIndex='0'>{props.heading}</h1>
                <p className="description" tabIndex='0'>{props.description}</p>
            </section>
            <Link to='app'>
                <Button message="Set a Countdown!"/>
            </Link>
        </article>
    )
}

export default Introduction;
