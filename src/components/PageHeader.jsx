import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

/**
 * PageHeader Component
 * 
 * A reusable header for pages that includes a back button,
 * custom title with optional gradient, and a subtitle.
 * 
 * @param {Object} props
 * @param {string} props.title - The title to display
 * @param {string} props.subtitle - The subtitle to display
 * @param {string} [props.titleGradient] - Optional CSS linear-gradient string for the title
 * @param {string} [props.className] - Optional additional CSS class for the header container
 */
const PageHeader = ({ title, subtitle, titleGradient, className = "" }) => {
    const handleBack = () => {
        window.history.back();
    };

    const titleStyle = titleGradient ? {
        background: titleGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    } : {};

    return (
        <div className={`common-header ${className}`}>
            <button
                className="back-button"
                onClick={handleBack}
                aria-label="Go back"
            >
                <IoIosArrowBack />
            </button>
            <div className="header-content">
                <h2 className="header-title" style={titleStyle}>
                    {title}
                </h2>
                {subtitle && <p className="header-subtitle">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
