import React from 'react';
import ProgressIcon from "./ProgressIcon";

type CycleProps = {
    isArrowBackground: boolean;
    text: string;
    number?: number;
}

const Cycle = ({ isArrowBackground, text, number }: CycleProps) => {
    return (
        <div className={`brand-cycle-card ${isArrowBackground ? 'with-image' : 'with-border'}`}>
            <div className="number-cycle-card">
                <p className="number-cycle">{number}</p>
                <ProgressIcon activeCount={Number(number)}/>
            </div>
            <strong className="name-cycle-card">{text}</strong>
        </div>
    );
};

export default Cycle;