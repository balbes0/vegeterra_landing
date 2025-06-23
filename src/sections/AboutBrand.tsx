import React from 'react';
import Header from '../components/Header'

const AboutBrand = () => {
    return (
        <section className="about-brand-section">
            <Header/>
            <div className="about-brand">
                <h2 className="about-brand-title">О Бренде</h2>
                <p className="about-brand-subtitle">агроэкохолдинг будущего</p>
                <button className="about-brand-button">Стать партнёром</button>
            </div>
        </section>
    );
};

export default AboutBrand;