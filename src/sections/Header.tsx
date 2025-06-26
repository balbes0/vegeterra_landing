import React, {useState} from 'react';

const Header = () => {

    const [lang, setLang] = useState('ru');

    const toggleLang = () => {
        setLang(prev => (prev === 'ru' ? 'en' : 'ru'));
    };

    return (
        <header className="header container">
            <a href="#" className="header-logo">
                <img className="header-logo-image" src="/assets/icons/logo-vector.svg" alt="logo-vector.svg"/>
            </a>

            <nav className="header-menu">
                <ul className="header-menu-list">
                    <li className="header-menu-item ">
                        <a className="header-menu-link" href="#">Главная</a>
                    </li>
                    <li className="header-menu-item active">
                        <a className="header-menu-link" href="#">О бренде</a>
                    </li>
                    <li className="header-menu-item">
                        <a className="header-menu-link" href="#">Живые продукты</a>
                    </li>
                    <li className="header-menu-item">
                        <a className="header-menu-link" href="#">Торф</a>
                    </li>
                    <li className="header-menu-item">
                        <a className="header-menu-link" href="#">Партнёрство</a>
                    </li>
                    <li className="header-menu-item">
                        <a className="header-menu-link" href="#">Полезное</a>
                    </li>
                    <li className="header-menu-item">
                        <a className="header-menu-link" href="#">Контакты</a>
                    </li>
                </ul>
            </nav>
            <div className="header-actions">
                <a href="#" className="header-actions-item">
                    <img className="header-actions-item-image" src="/assets/icons/whatsapp-vector.svg" alt="whatsapp-vector.svg"/>
                </a>
                <a href="#" className="header-actions-item">
                    <img className="header-actions-item-image" src="/assets/icons/telegram-vector.svg" alt="telegram-vector.svg"/>
                </a>
                <div className="header-actions-item-switch">
                    <div className="language-switch" onClick={toggleLang}>
                        <div className={`language-indicator ${lang === 'en' ? 'right' : 'left'}`} />
                        <p className={`language-label left-label ${lang === 'ru' ? 'active' : ''}`}>РУ</p>
                        <p className={`language-label right-label ${lang === 'en' ? 'active' : ''}`}>EN</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;