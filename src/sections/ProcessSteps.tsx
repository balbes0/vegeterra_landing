import React from 'react';
import Cycle from "../components/Cycle";

const steps = [
    { text: 'Разрабатываем собственные технологии', isArrowBackground: true },
    { text: 'Добываем экологичный торф', isArrowBackground: true },
    { text: 'Строим биовегетарии нового поколения', isArrowBackground: false },
    { text: 'Производим органические удобрения', isArrowBackground: true },
    { text: 'Выращиваем культуры без химии и добавок', isArrowBackground: false },
    { text: 'Ищем партнёров для франшизы', isArrowBackground: false },
];

const ProcessSteps = () => {
    return (
        <div className="process-steps-section">

            <div className="process-steps-cards">
                {steps.map((step, index) => (
                    <Cycle
                        key={index}
                        isArrowBackground={step.isArrowBackground}
                        text={step.text}
                        number={index + 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProcessSteps;