import { Link } from 'react-router-dom';
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <FaReact className="logo-icon" style={{ color: '#61DAFB' }} />
                            <span className="logo-text gradient-text">React Performance</span>
                        </Link>
                        <p className="footer-description">
                            Mastering React performance optimization with interactive examples, advanced techniques, and modern best practices.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-heading">Project</h4>
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/explore" className="footer-link">Explore</Link>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">Connect</h4>
                            <a href="https://github.com/avinashsah995" target="_blank" rel="noopener noreferrer" className="footer-link">
                                <FaGithub /> GitHub
                            </a>
                            <a href="https://linkedin.com/in/avinash-sah" target="_blank" rel="noopener noreferrer" className="footer-link">
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} React Performance Mastery. All rights reserved.</p>
                    <p className="made-with">
                        Made with <span className="heart">❤️</span> by Avinash
                    </p>
                </div>
            </div>
        </footer>
    );
}
