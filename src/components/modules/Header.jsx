// React
import { Link } from "react-router-dom";
// Components
import Button from "components/interface/Button";
import Name from "components/interface/Name";

export default function Header() {
    return (
        <header className="header">
            <Name />
            <Link to="set-countdown">
                <Button message="Set a Countdown!" />
            </Link>
        </header>
    );
}
