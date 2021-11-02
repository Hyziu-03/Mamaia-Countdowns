import { Link } from "react-router-dom";

const name = window.innerWidth < 950 ? 'Mamaia' : 'Mamaia Countdowns';

const Name = () => {
    return (
        <Link to='/'>
            <h1 className="name hover touch-target"><i className="far fa-calendar-alt icon"></i>&nbsp;{name}</h1>
        </Link>    
    )
}
export default Name;
