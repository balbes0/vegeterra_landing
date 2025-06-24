import React from 'react';

type BenefitCardProps = {
    imageURL: string;
    description: string;
}

const BenefitCard = ({imageURL, description}: BenefitCardProps) => {
    return (
        <div className="benefit-card">
            <img className="benefit-card-img" src={imageURL} alt={imageURL}/>
            <p className="benefit-card-description">{description}</p>
        </div>
    );
};

export default BenefitCard;