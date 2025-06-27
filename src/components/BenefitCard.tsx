import React from 'react';

type BenefitCardProps = {
    imageURL: string;
    description: string;
}

const BenefitCard = ({imageURL, description}: BenefitCardProps) => {
    return (
        <div className="benefit-card">
            <div className="benefit-card-img" style={{ backgroundImage: `url(${imageURL})` }}></div>

            <p className="benefit-card-description">{description}</p>
        </div>
    );
};

export default BenefitCard;