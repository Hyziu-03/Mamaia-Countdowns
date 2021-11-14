// ? This file is optimised for version 1.0

import { Link } from "react-router-dom";
import Button from "../items/Button";
import Name from "../items/Name";
import { refresh } from '../libraries/reusable';

const Header = () => {
    return (
        <header className="header">
            <span onClick={refresh}>
                <Name />
            </span> 
            <Link to='set-countdown'>
                <Button message="Set a Countdown!"/>
            </Link>
        </header>
    )
}

export default Header;
