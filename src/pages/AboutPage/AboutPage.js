import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground } from '@fortawesome/free-solid-svg-icons';

import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="outer">
            <div className="about-page">
                
                <div className="row">
                    <div className="section left-section">
                        <FontAwesomeIcon icon={faCampground} className="about-icon yellow"/>
                        <h2 className="about-title">Splendy</h2>
                        Created by Riley March<br/><br/>
                        Powered by RAMTEK
                    </div>

                    <div className="section">
                        This app is to help people secure splendour in the grass tickets
                        from the official resale page. <br/><br/>
                        You can target specific tickets and get a notification as soon as 
                        tickets become available. <br/><br/>
                        This greatly increases your chances of going to the event!<br/><br/>
                        If you have come across and issues or want to request a feature please
                        send an email to: <br/><br/>
                        support@ramtek.dev <br/><br/>
                        If you like this app and want to see more please: <br/><br/>
                        <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/rileymarch">
                            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a Beer"/>
                            <span>
                                Buy me a Beer
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutPage;