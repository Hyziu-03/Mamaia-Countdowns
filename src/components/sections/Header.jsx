import { Link } from "react-router-dom";
import Button from "components/interface/Button";
import Name from "components/interface/Name";

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
