import React from 'react';
import ServiceCard from "../components/ServiceCard";

const services = [
    {iconURL: "/assets/icons/smart-ecosystem-vector.svg", title: "Умная экосистема",
        items: [
            "Эффективные биовегетарии нового поколения",
            "Управляемый микроклимат",
            "Собственные органические удобрения и добыча торфа",
            "Контроль на каждом этапе"
        ]
    },
    {iconURL: "/assets/icons/sustainable-development-vector.svg", title: "Устойчивое развитие",
        items: [
            "Экономия расходов на воду, электричество",
            "Упаковка из переработанных материалов",
            "Безотходное производство",
            "Полив дождевой водой",
            "Снижение углеродного следа",
            "Солнечные панели"
        ]
    },
    {iconURL: "/assets/icons/stable-quality-vector.svg", title: "Стабильное качество",
        items: [
            "Строгое соблюдение технологий выращивания и производства",
            "На полке супермаркета максимум через 24 часа",
            "Без химии, пестицидов и консервантов",
            "Круглый год"
        ]
    }
]

const Services = () => {
    return (
        <section className="services-section container">
            {
                services.map((service, index) => (
                    <ServiceCard key={index} iconURL={service.iconURL} title={service.title} items={service.items} />
                ))
            }
        </section>
    );
};

export default Services;