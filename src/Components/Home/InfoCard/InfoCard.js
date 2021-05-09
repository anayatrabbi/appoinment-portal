import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 info-container">
            <div className={`d-flex justify-content-center info-${info.background} card-container`}>
                <div >
                    <FontAwesomeIcon className="icon-info" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;