import { Link } from 'react-router-dom';
import Button from '../items/Button';
import Name from '../items/Name';

const Header = () => {
    return (
        <header className='header'>
            <Name />
            <Link to='set-countdown'>
                <Button message='Set a Countdown!'/>
            </Link>
        </header>
    )
}

export default Header;
