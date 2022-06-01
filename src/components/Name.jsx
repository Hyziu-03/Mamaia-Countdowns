import { Link } from 'react-router-dom';
import { refresh } from '../scripts/scripts';

const displayName = window.innerWidth < 950 ? 'Mamaia' : 'Mamaia Countdowns';

const Name = () => {
    return (
        <Link to='/' onClick={refresh}>
            <h1 className='name hover touch-target'><i className='far fa-calendar-alt icon'></i>&nbsp;{displayName}&trade;</h1>
        </Link>    
    );
}
export default Name;