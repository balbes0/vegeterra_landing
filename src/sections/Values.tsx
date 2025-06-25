import React from 'react';
import ValueCard from "../components/ValueCard";

const values = [
    {
        iconURL: "/assets/icons/leaf-vector.svg",
        title: "Натурально с пользой",
        description: "Мы делаем как для себя: еда - вкусная без химии, удобрения - рабочие, инновации - честные.",
    },
    {
        iconURL: "/assets/icons/gear-nature-vector.svg",
        title: "Синергия природы и технологий",
        description: "Используем новейшие разработки, чтобы каждый продукт Вегетерра был безопасным и продуктивным",
    },
    {
        iconURL: "/assets/icons/strawberry-vector-2.svg",
        title: "Свежесть, а не срок хранения",
        description: "Наша клубника без консервантов, потому что мы поддерживаем жизнь, а не консервируем ее",
    },
    {
        iconURL: "/assets/icons/nature-planet-vector.svg",
        title: "Забота о будущем уже сегодня",
        description: "Философия Вегетерра основана на заботе о каждой травинке и о планете в целом",
    },
]

const Values = () => {
    return (
        <section className="values-section container">
            {
                values.map((value, index) => (
                    <ValueCard key={index} iconURL={value.iconURL} title={value.title} description={value.description}/>
                ))
            }
        </section>
    );
};

export default Values;