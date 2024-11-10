import './Navbar.css';
import logo from './logo192.png'

const Navbar = () => {
    const design = (
        <div>
            <ul>
                <li><a href='/'><img src={logo} width="40" /></a></li>
                <li><a href='/'>Home</a></li>
                <li><a href='/images'>Images</a></li>
                <li><a href='/videos'>Videos</a></li>
                <li><a href='/about-us'>About Us</a></li>
                <li><a href='/contact-us'>Contact Us</a></li>
            </ul>
        </div>
    );
    return design;
}

export default Navbar;