import React from 'react';
import ProgressIcon from "./ProgressIcon";

interface CycleProps {
    isArrowBackground: boolean;
    text: string;
    number?: number;
}

const Cycle: React.FC<CycleProps> = ({ isArrowBackground, text, number }) => {
    return (
        <div className={`brand-cycle-card ${isArrowBackground ? 'with-image' : 'with-border'}`}>
            <div className="number-cycle-card">
                <ProgressIcon activeCount={Number(number)}/>
            </div>

            <strong className="name-cycle-card">{text}</strong>
        </div>
    );
};

export default Cycle;