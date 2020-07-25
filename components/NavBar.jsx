import { useState } from 'react';

const NavBar = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    return (
        <nav
            className="navbar is-dark"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
                <a
                    className="navbar-item"
                    href="https://www.happycoders.agency">
                    Happy Coders Agency
                </a>
                <a
                    role="button"
                    className={`navbar-burger burger ${
                        menuIsActive ? 'is-active' : ''
                    }`}
                    onClick={() => setMenuIsActive(!menuIsActive)}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarMain">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div
                id="navbarMain"
                className={`navbar-menu ${menuIsActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <a className="navbar-item" href="#manifesto">
                        Manifesto
                    </a>
                    <a className="navbar-item" href="#clients">
                        Clients
                    </a>
                    <a className="navbar-item">Partner companies</a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary is-small">
                                <strong>Sign up</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
