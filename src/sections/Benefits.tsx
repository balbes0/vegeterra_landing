import React, { useRef } from 'react';
import BenefitCard from "../components/BenefitCard";

interface Benefit {
    imageURL: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        imageURL: "/assets/images/benefits-strawberry.png",
        description: "Представьте: ранее утро в уютном доме бабушки, тёплая кухня, свежие ягоды и овощи — только что с грядки.\n\n Вкус — насыщенный и яркий, тот самый, который остаётся в памяти с детства. Забота и любовь чувствовались в каждом кусочке."
    },
    {
        imageURL: "/assets/images/benefits-greenhouse.png",
        description: "Именно эти воспоминания вдохновили нас создать ВЕГЕТЕРРА — инновационный агроэкохолдинг.\n\n Мы круглый год выращиваем вкусные, полезные продукты и предлагаем другим фермерам инструменты для устойчивого и эффективного агробизнеса."
    },
];

const Benefits = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="benefits-section container">
            <h2 className="benefits-title">Натурально, как должно быть</h2>
            <div className="benefit-card-container" ref={scrollRef}>
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index} imageURL={benefit.imageURL} description={benefit.description} />
                ))}
            </div>
            <div className="slider-controls">
                <button onClick={scrollLeft}>
                    <svg
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 13L1 7L8 1" stroke="#DCDCDC" strokeLinecap="square" />
                    </svg>
                </button>
                <button onClick={scrollRight}>
                    <svg
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1 13L8 7L1 1" stroke="white" strokeLinecap="square" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Benefits;