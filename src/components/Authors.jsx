import React from 'react';
import hands from '../img/hands.png'
import eclipse from '../img/eclipce.png'

const Authors = () => {
    return (
        <div className={'authors_all'}>
            <div className={'container_authors'}>
                <div className={'all_authors_left'}>
                <div className={'authors_left'}>
                    <h1 className={'tittle_authors'}>Стать автором</h1>
                    <h2 className={'second_title_authors'}>Если ты художник или стремишься им стать — добро пожаловать к нам!</h2>
                    <p className={'paragraph_authors'}>Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграме. Если наши кураторы решат,
                        что нам по пути, то мы обязательно свяжемся с тобой и обговорим условия сотрудничества! <b>Удачи!</b></p>
                </div>
                <img className={'hands'} src={hands} alt="hands"/>
                </div>
                <div className={'authors_right'}>
                    <form className={'form_file'}>
                        <label className='label_file'>
                            <input className={'accept_file'} type="file" accept={'image/*'}/>
                            <img className={'plus'} src={eclipse} alt="plus_img"/>
                            <span>Прикрепить работы (.jpeg / .png)</span>
                        </label>
                    </form>
                        <input className={'inputs_authors'} type="text" placeholder='@telegram_nickname'/>
                        <button className={'btn_file'}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Authors;