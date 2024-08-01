// src/components/layout/Header.tsx
import React from 'react';
import '../../styles/App.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    {/* Mobile Navigation */}
                    <ul className="nav-list nav-list-mobile">
                        <li className="nav-item">
                            <div className="mobile-menu">
                                <span className="line line-top"></span>
                                <span className="line line-bottom"></span>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/" className="nav-link nav-link-apple"></Link> */}
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-bag"></a>
                        </li>
                    </ul>

                    {/* Larger Screens Navigation */}
                    <ul className="nav-list nav-list-larger">
                        <li className="nav-item nav-item-hidden">
                            {/* <Link to="/" className="nav-link nav-link-apple"></Link> */}
                            <a href="" className="nav-link">Logo</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">TV</a>
                        </li>
                        <li className="nav-item nav-item-hidden">
                            <a href="#" className="nav-link nav-link-bag"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
