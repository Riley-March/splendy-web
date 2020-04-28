import React from 'react';

import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="info-square">
                <h2 className="info-title">About the App</h2>
                <p>
                    The purpose of this application is to track when a ticket becomes avaialable on the splendour in the grass resale page.

                </p>
            </div>
            <div className="info-square">
                <h2 className="info-title">About the Author</h2>
                <p>
                    The app was create by Riley March who is a full stack engineer.
                </p>
            </div>
        </div>
    )
}

export default AboutPage;