import { Link } from "react-router-dom";

import Button from "../items/Button";
import Name from "../items/Name";

import { refresh } from '../libraries/mamaia';

const Header = () => <header className="header"><span onClick={refresh}><Name /></span> <Link to='app'><Button message="Set a Countdown!"/></Link></header>
export default Header;
