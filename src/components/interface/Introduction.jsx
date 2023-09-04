// React
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";

const Button = lazy(() => import("./Button"));

export default function Introduction(props) {
    const { heading, description } = props;
    return (
        <article className="introduction">
            <section className="text-section">
                <h1 className="heading" tabIndex="0">
                    {heading}
                </h1>
                <p className="description" tabIndex="0">
                    {description}
                </p>
            </section>
            <Link to="set-countdown">
                <Suspense fallback={<div>Loading...</div>}>
                    <Button message="Set a Countdown!" />
                </Suspense>
            </Link>
        </article>
    );
}
