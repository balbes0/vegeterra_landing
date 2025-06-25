import React from 'react';

type ServiceCardProps = {
    iconURL: string;
    title: string;
    items: string[];
}

const ServiceCard = ({iconURL, title, items}: ServiceCardProps) => {
    return (
        <div className="service-card">
            <img className="service-card-image" src={iconURL} alt={iconURL} />
            <h3 className="service-card-title">{title}</h3>
            <ul className="service-card-list">
            {
                items.map((item, index) => (
                    <li key={index} className="service-card-list-item">{item}</li>
                ))
            }
            </ul>
        </div>
    );
};

export default ServiceCard;