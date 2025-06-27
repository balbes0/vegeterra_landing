import React, { useState, useRef } from 'react';
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
    const [currentStep, setCurrentStep] = useState(3);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        if (e.clientX - rect.left < rect.width / 2) {
            setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
        } else {
            setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
        }
    };

    return (
        <section className="process-steps-section container">
            <h2 className="title-process-steps-section">Полный цикл внутри бренда</h2>
            <p className="description-process-steps-section">
                Вегетерра — это производитель натуральных продуктов и экологичных решений для сельского хозяйства. От идеи до готовой продукции:
            </p>
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
            <button className="button-process-steps-section">
                Смотреть видео
                <img className="button-camera-icon" src="/assets/icons/camera-icon-vector.svg" alt="camera-icon-vector" />
            </button>
            <div className="process-steps-alternative" ref={containerRef}>
                <div className="process-steps-alternative-click-zone" onClick={handleClick}>

                </div>
                <div className="process-steps-alternative-background"
                    style={{ transform: `translate(-50%, 0) scale(1.125) translateY(30px) rotate(${-currentStep * 18}deg)` }}>
                    {steps.map((step, index) => {
                        const value = 18 * index;
                        return (
                            <div key={index} className="alternative-background-dot-container" style={{ transform: `rotate(${value}deg)` }}>
                                <div className={`alternative-background-dot ${currentStep === index ? 'isCurrent' : ''}`}></div>
                            </div>
                        );
                    })}
                </div>
                <h2 className="process-steps-counter">
                    <span>{currentStep + 1}</span>/<span>{steps.length}</span>
                </h2>
                <p className="process-steps-alternative-name">{steps[currentStep].text}</p>
                <button className="process-steps-alternative-button">
                    Подробнее
                    <img className="button-camera-icon" src="/assets/icons/arrow-vector.svg" alt="arrow-icon-vector" />
                </button>
            </div>
        </section>
    );
};

export default ProcessSteps;