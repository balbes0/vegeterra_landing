import React from 'react';

type ValueCardProps = {
    iconURL: string;
    title: string;
    description: string;
}

const ValueCard = ({iconURL, title, description} : ValueCardProps) => {
    return (
        <div className="value-card">
            <img className="value-card-image" src={iconURL} alt={iconURL} />
            <h3 className="value-card-title">{title}</h3>
            <p className="value-card-description">{description}</p>
        </div>
    );
};

export default ValueCard;