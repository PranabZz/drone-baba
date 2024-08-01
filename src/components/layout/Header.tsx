// src/components/layout/Header.tsx
import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/App.css';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const mobileNav = document.querySelector('.list-mobile-nav') as HTMLElement;
        if (mobileNav) {
            mobileNav.style.display = menuOpen ? 'block' : 'none';
        }
    }, [menuOpen]);

    return (
        <header>
            <div className="container">
                <nav className="nav">
                    {/* Mobile Navigation */}
                    <ul className={`nav-list nav-list-mobile ${menuOpen ? 'active' : ''}`}>
                        <li className="nav-mobile">
                            <div className="mobile-menu" onClick={toggleMenu}>
                                <span className={`line line-top ${menuOpen ? 'active' : ''}`}></span>
                                <span className={`line line-middle ${menuOpen ? 'active' : ''}`}></span>
                                <span className={`line line-bottom ${menuOpen ? 'active' : ''}`}></span>
                            </div>
                        </li>
                        <div className="list-mobile-nav">
                            <li className="nav-link-item">
                                <a href="/" className="nav-link-small ">Home</a>
                            </li>
                            <li className=" nav-link-item">
                                <a href="/about" className="nav-link-small ">About Us</a>
                            </li>
                            <li className=" nav-link-item">
                                <a href="/products" className="nav-link-small ">Products</a>
                            </li>
                            <li className=" nav-link-item">
                                <a href="/team" className="nav-link-small ">Our Team</a>
                            </li>
                            <li className=" nav-link-item">
                                <a href="/contact" className="nav-link-small nav-link-contact">Contact Us</a>
                            </li>
                        </div>
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
