// Footer.js
import '../../styles/App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="footer-column">
                    <h3 >Quick Links</h3>
                    <ul className="footer-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Products</h3>
                    <ul className="footer-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>  
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Email: contact@yourcompany.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
