import React from 'react';
import './Card.css';

const statusColors = {
    new: 'green',
    fix: 'blue',
    improvement: 'purple'
};

const Card = ({ version, date, status, programmer, description, programmerImage }) => {
    
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-version-date">
                    <span className="card-version">{version}</span>
                    <span className="card-date">({date})</span>
                </div>
                <div className="card-status-programmer">
                    <div className="status-box" style={{ backgroundColor: statusColors[status] }}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </div>
                    <div className="card-programmer">
                        <img src={programmerImage} alt={programmer} className="card-image" />
                        <span className="card-programmer-name">{programmer}</span>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="card-description">{description}</div>
            </div>
            <div className="card-footer">
                <button className="download-button">Download</button>
            </div>
        </div>
    );
};

export default Card;
