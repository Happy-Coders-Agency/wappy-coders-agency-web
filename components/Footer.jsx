import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitterSquare,
    faFacebookSquare,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className="footer has-text-centered">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-1-desktop">
                    <span className="social-media-link">
                        <a href="https://twitter.com/happycoders_ag">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                    </span>
                </div>
                <div className="column is-1-desktop">
                    <span className="social-media-link">
                        <a href="https://www.facebook.com/Happy-Coders-Agency-117558622961137/">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                    </span>
                </div>
                <div className="column is-1-desktop">
                    <span className="social-media-link">
                        <a href="https://www.linkedin.com/company/happy-coders-agency">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </span>
                </div>
                <div className="column is-1-desktop">
                    <span className="social-media-link">
                        <a href="mailto:info@happycoders.agency">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </span>
                </div>
            </div>
            <div className="columns is-centered has-text-grey-light is-size-6">
                Copyright &copy; 2020 Happy Coders Agency. All rights reserved.
            </div>
        </div>
        <style jsx>{`
            .social-media-link {
                font-size: 48px;
            }

            .social-media-link a:visited,
            .social-media-link a:active,
            .social-media-link a:link {
                color: black;
            }

            .social-media-link a:hover {
                color: #b86bff;
            }
        `}</style>
    </footer>
);

export default Footer;
