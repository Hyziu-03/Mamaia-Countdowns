import { Link } from "react-router-dom";
import Button from "components/Button";
import Name from "components/Name";

const Header = () => {
    return (
        <header className="header">
            <Name />
            <Link to="set-countdown">
                <Button message="Set a Countdown!" />
            </Link>
        </header>
    );
};

export default Header;
