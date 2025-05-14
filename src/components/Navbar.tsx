import { FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-left">
            <h1>Cauê Vieira</h1>
        </div>

        <ul className="navbar-center">
            <li><a href="#">Services</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Notes</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <div className="navbar-right">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
            </a>
            <a href="mailto:seuemail@gmail.com">
                <FaEnvelope size={20} />
            </a>
        </div>
    </nav>
);

export default Navbar;
