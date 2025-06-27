import React, {useRef} from 'react';
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
        <section>
            <div  className="services-section container" ref={scrollRef}>
                {
                    services.map((service, index) => (
                        <ServiceCard key={index} iconURL={service.iconURL} title={service.title} items={service.items} />
                    ))
                }
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

export default Services;