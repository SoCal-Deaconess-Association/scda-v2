import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

// Icons
import Logo from '../assets/icons/LogoIcon';
import MenuIcon from '../assets/icons/HamburgerIcon';
import CloseIcon from '../assets/icons/CloseIcon';
import { HistoryIcon } from '../assets/icons/HistoryIcon';
import { GreetingsIcon } from '../assets/icons/GreetingsIcon';
import { AnthemIcon } from '../assets/icons/AnthemIcon';

export const Header = () => {
    // Responsive breakpoints
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    // State for navbar visibility
    const [isNavbarVisible, setNavbarVisibility] = useState(false);

    // Toggle navbar visibility
    const toggleNavbar = () => {
        setNavbarVisibility(!isNavbarVisible);
    };

    return (
        <div>
            {/* Overlay for navbar */}
            {isMobile && isNavbarVisible && (
                <div className="overlay z-1" onClick={toggleNavbar}></div>
            )}

            {/* Header */}
            <div className='width-full header flex-center-y shadow z-5'>
                {/* Left Spacer (Desktop) */}
                {isDesktop && (
                    <div></div>
                )}

                <div className='logo flex-center-y z-5'>
                    <Logo />
                    <p>Southern California<br />Deaconess Association & Friends</p>
                </div>

                {/* Navigation Bar (Tablet/Desktop)*/}
                {(isTablet || isDesktop) && (
                    <div className='nav-desktop flex-center-xy'>
                        <Link to='/' className='shadow flex-center-xy'><HistoryIcon />History</Link>
                        <Link to='/greetings' className='shadow flex-center-xy'><GreetingsIcon />Greetings & Stories</Link>
                        <Link to='/anthem' className='shadow flex-center-xy'><AnthemIcon />Anthem</Link>
                    </div>
                )}

                {/* Navigation Menu Button (Mobile)*/}
                {isMobile && (
                    isNavbarVisible ? (
                        <CloseIcon className="hamburger-button hover-pointer z-5" style={{ padding: '10px' }} onClick={toggleNavbar} />
                    ) : (
                        <MenuIcon className="hamburger-button hover-pointer z-5" onClick={toggleNavbar} />
                    )
                )}

                {/* Right Spacer (Desktop) */}
                {isDesktop && (
                    <div></div>
                )}
            </div>

            {/* Navigation Menu (Mobile)*/}
            {isMobile && (
                <div className={`nav-mobile flex-column z-5`}>
                    <Link to='/' className={`shadow flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><HistoryIcon />Part I: History</Link>
                    <Link to='/greetings' className={`shadow flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><GreetingsIcon />Part II: Greetings</Link>
                    <Link to='/anthem' className={`shadow flex-center-y ${isNavbarVisible ? 'show-right' : 'hide-right'}`} onClick={toggleNavbar}><AnthemIcon />Part III: Anthem</Link>
                </div>
            )}
        </div >
    )
}