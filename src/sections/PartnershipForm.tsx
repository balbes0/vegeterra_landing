import React from 'react';

const PartnershipForm = () => {
    return (
        <section className="partner-ship-section container">
            <h2 className="partner-ship-title">Партнёрство</h2>
            <div className="partner-ship-content">

                <div className="partner-ship-contact-actions">
                    <p className="description-contact-actions">С Вегетерра можно больше</p>
                    <h3 className="title-contact-actions">Для дистрибьютеров, инвесторов и оптовых покупателей</h3>
                    <p className="description-contact-actions">Мы открыты к сотрудничеству и новым проектам</p>
                    <div className="actions-buttons">
                        <button>Подробнее о партнёрстве</button>
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
                </div>

                <form className="partner-ship-contact-form">
                    <h3 className="contact-form-title">Форма обратной связи</h3>
                    <div className="contact-form-inputs">
                        <div className="contact-form-input-block">
                            <p>Имя</p>
                            <input id="contact-form-name" type="text" placeholder="Иванов Иван Иваныч"/>
                        </div>
                        <div className="contact-form-input-block">
                            <p>Телефон</p>
                            <input id="contact-form-phone" type="tel" placeholder="+7 (000) 000-00-00"/>
                        </div>
                        <div className="contact-form-input-block">
                            <p>Email</p>
                            <input id="contact-form-email" type="email" placeholder="info@vegeterra.ru"/>
                        </div>
                        <div className="contact-form-input-block">
                            <p>Сообщение</p>
                            <input id="contact-form-message" type="text" placeholder="Введите ваше сообщение"/>
                        </div>
                    </div>
                    <div className="contact-form-submit">
                        <button>Отправить</button>
                        <div>
                            <input type="checkbox"/>
                            <p>Даю свое согласие на обработку моих персональных данных</p>
                        </div>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default PartnershipForm;