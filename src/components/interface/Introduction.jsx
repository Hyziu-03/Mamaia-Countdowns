// React
import { Link } from "react-router-dom";
// Components
import Button from "components/interface/Button";

export default function Introduction(props) {
    return (
        <article className="introduction">
            <section className="text-section">
                <h1 className="heading" tabIndex="0">
                    {props.heading}
                </h1>
                <p className="description" tabIndex="0">
                    {props.description}
                </p>
            </section>
            <Link to="set-countdown">
                <Button message="Set a Countdown!" />
            </Link>
        </article>
    );
}
