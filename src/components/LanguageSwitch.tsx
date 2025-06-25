import React, { useState } from 'react';

const LanguageSwitch = () => {
    const [lang, setLang] = useState('ru');

    const toggleLang = () => {
        setLang(prev => (prev === 'ru' ? 'en' : 'ru'));
    };

    return (
        <div className="language-switch" onClick={toggleLang}>
            <div className={`language-indicator ${lang === 'en' ? 'right' : 'left'}`} />
            <p className={`language-label left-label ${lang === 'ru' ? 'active' : ''}`}>РУ</p>
            <p className={`language-label right-label ${lang === 'en' ? 'active' : ''}`}>EN</p>
        </div>
    );
};

export default LanguageSwitch;
