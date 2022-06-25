import { Link } from 'react-router-dom';
import Button from './Button';
import Name from './Name';

const Header = () => {
    console.log("Header.jsx");

    return (
        <header className='header'>
            <Name />
            <Link to='set-countdown'>
                <Button message='Set a Countdown!' />
            </Link>
        </header>
    );
}

export default Header;
