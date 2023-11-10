
import logo from '../assets/logo.png';

const Navigation = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav-links">
                    <li href="#">Menus</li>
                    <li href="#">Locations</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    );
};

export default Navigation;
