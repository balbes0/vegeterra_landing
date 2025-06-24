import React from 'react';
import BenefitCard from "../components/BenefitCard";

const benefits = [
    {imageURL: "/assets/images/benefits-greenhouse.png", description: "Представьте: ранее утро в уютном доме бабушки, тёплая кухня, свежие ягоды и овощи — только что с грядки." +
            "\n\n Вкус — насыщенный и яркий, тот самый, который остаётся в памяти с детства. Забота и любовь чувствовались в каждом кусочке. "},
    {imageURL: "/assets/images/benefits-strawberry.png", description: "Именно эти воспоминания вдохновили нас создать ВЕГЕТЕРРА — инновационный агроэкохолдинг. " +
            "\n\n Мы круглый год выращиваем вкусные, полезные продукты и предлагаем другим фермерам инструменты для устойчивого и эффективного агробизнеса. "},
]

const Benefits = () => {
    return (
        <section className="benefits-section">
            <h2 className="benefits-title">Натурально, как должно быть</h2>
            <div className="benefit-card-container">
                {
                    benefits.map((benefit, index) => (
                        <BenefitCard key={index} imageURL={benefit.imageURL} description={benefit.description} />
                    ))
                }
            </div>
        </section>
    );
};

export default Benefits;