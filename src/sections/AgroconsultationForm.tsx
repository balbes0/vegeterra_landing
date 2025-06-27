import React from 'react';

const AgroconsultationForm = () => {
    return (
        <form method="post" className="agroconsultation-form container contact-form-input-block">
            <h2 className="agroconsultation-title">Агроконсультация</h2>
            <input type="tel" placeholder="Введите номер телефона" />
            <div className="contact-form-submit">
                <button>Отправить</button>
                <div>
                    <input type="checkbox"/>
                    <p>Даю свое согласие на обработку моих персональных данных</p>
                </div>
            </div>
        </form>
    );
};

export default AgroconsultationForm;