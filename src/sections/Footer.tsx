import React from 'react';

const Footer = () => {
    return (
        <footer className="container">
            <div className="footer-content">
                <div className="footer-content-first">
                    <img src="/assets/icons/vegeterra-logo-2.svg" alt="vegeterra-logo-2.svg"/>
                    <div>
                        <p>©2025 Все права защищены</p>
                        <p>Вегетерра. Инновационная экоферма</p>
                    </div>
                    <div>
                        <p>О бренде</p>
                        <p>О технологии</p>
                    </div>
                    <div>
                        <p>+7 918 338 74 44</p>
                        <p>info@vegeterra.ru</p>
                    </div>
                    <div className="social-media-buttons">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/youtube-icon-vector.svg" alt="youtube.svg"/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/vk-icon-vector.svg" alt="vk.svg"/>
                        </a>
                        <a href="">
                            <img src="/assets/icons/whatsapp-icon-vector-2.svg" alt="whatsapp.svg"/>
                        </a>
                        <a href="">
                            <img src="/assets/icons/telegram-icon-vector-2.svg" alt="telegram.svg"/>
                        </a>
                    </div>
                </div>
                <div className="footer-content-second">
                    <p>Политика обработки персональных данных</p>
                    <button>Подписаться на новости</button>
                    <div>
                        <p>Дизайн сайта</p>
                        <img src="/assets/icons/designer-logo.svg" alt="designer-logo.svg"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;