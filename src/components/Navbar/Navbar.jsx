import { Link, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './Navbar.css';

function Navbar() {
    const currentPage = useLocation().pathname;
  
    return (
        <div className="bg-info">
        <Header />
            <ul className="nav nav-tabs col align-items-end">
                <li className="nav-item align-items-end">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    to="/Portfolio"
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    to="/Resume"
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
                </li>
            </ul>
        </div>
    );
  }
  
  export default Navbar;