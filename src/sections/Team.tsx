import React from 'react';

const persons = [
    {
        name: "Екатерина",
        position: "Коммерческий директор",
        quote: "«Я соединяю нашу философию с реальным рынком. Главное — честность, вкус и прозрачность»",
        imageURL: "/assets/images/team-person-image.png"
    }
];

const repeatedPersons = Array(8).fill(persons).flat(); //для ui теста

const Team = () => {
    return (
        <div className="team-block">
            <section className="team-section container">
                <h3 className="team-section-title">Команда</h3>
                <p className="team-section-description">За каждым продуктом — команда, которая верит: сельское хозяйство может быть честным и современным. Мы соединяем опыт, инновации и любовь к делу.</p>
                <div className="team-section-selector">
                    {
                        repeatedPersons.map((person, index) => (
                            <button key={index} className={`team-selector-button ${index === 0 ? "isSelected" : ""}`}>
                                <img className="team-selector-button-image" src={person.imageURL} alt="Not found"/>
                            </button>
                        ))
                    }
                </div>

                <div className="team-section-selected-person">
                    <img className="selected-person-image" src={persons[0].imageURL} alt="pohui"/>
                    <div className="selected-person-bio">
                        <h3 className="selected-person-name">{persons[0].name}</h3>
                        <p className="selected-person-position">{persons[0].position}</p>
                        <p className="selected-person-quote">{persons[0].quote}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;