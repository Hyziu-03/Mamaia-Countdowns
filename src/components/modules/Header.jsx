// React
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";

const Button = lazy(() => import("components/interface/Button"));
const Name = lazy(() => import("components/interface/Name"));

export default function Header() {
    return (
        <header className="header">
            <Suspense fallback={<div>Loading...</div>}>
                <Name />
            </Suspense>
            <Link to="set-countdown">
                <Suspense fallback={<div>Loading...</div>}>
                    <Button message="Set a Countdown!" />
                </Suspense>
            </Link>
        </header>
    );
}
