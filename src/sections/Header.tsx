import React, { useState } from 'react';

const Header = () => {
    const [lang, setLang] = useState('ru');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('О бренде');

    const toggleLang = () => {
        setLang(prev => (prev === 'ru' ? 'en' : 'ru'));
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleLinkClick = (label: string) => {
        setActiveLink(label);
        setIsMenuOpen(false);
    };

    const menuItems = [
        'Главная',
        'О бренде',
        'Живые продукты',
        'Торф',
        'Партнёрство',
        'Полезное',
        'Контакты'
    ];

    return (
        <header className={`header container ${isMenuOpen ? 'menu-open' : ''}`}>
            <a href="#" className="header-logo">
                <img className="header-logo-image" src="/assets/icons/logo-vector.svg" alt="logo-vector.svg" />
            </a>

            <nav className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="header-menu-list">
                    {menuItems.map((item) => (
                        <li key={item} className={`header-menu-item ${activeLink === item ? 'active' : ''}`}>
                            <a className="header-menu-link" href="#" onClick={() => handleLinkClick(item)}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="header-actions">
                <a href="#" className="header-actions-item">
                    <img className="header-actions-item-image" src="/assets/icons/whatsapp-vector.svg" alt="whatsapp" />
                </a>
                <a href="#" className="header-actions-item">
                    <img className="header-actions-item-image" src="/assets/icons/telegram-vector.svg" alt="telegram" />
                </a>
                <div className="header-actions-item-switch">
                    <div className="language-switch" onClick={toggleLang}>
                        <div className={`language-indicator ${lang === 'en' ? 'right' : 'left'}`} />
                        <p className={`language-label left-label ${lang === 'ru' ? 'active' : ''}`}>РУ</p>
                        <p className={`language-label right-label ${lang === 'en' ? 'active' : ''}`}>EN</p>
                    </div>
                </div>
                <button className={`header-burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Меню">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
