import { Link } from 'react-router-dom';
import Button from './Button';
import Name from './Name';

const Header = () => {
    return (
        <header className='header'>
            <Name />
            <section className='header-buttons'>
                <Link to='set-countdown'>
                    <Button message='Set a Countdown!' />
                </Link>
            </section>
        </header>
    );
}

export default Header;
