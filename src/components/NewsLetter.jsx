import React from 'react';
import okay from '../img/okay.png'

const NewsLetter = () => {
    return (
        <div className={'all_content_NewsLetter'}>
            <div className={'all_content'}>
                <div className={'left_content'}>
                    <p>Будь в курсе новинок! Подпишись на рассылку!</p>
                    <form action="#">
                    <input className={'inputs'} type="text" placeholder='Имя'/>
                    <input className={'inputs'} type="email" placeholder='E-mail'/>
                    <button className={'btn_News'}>Подписаться</button>
                    <label>
                        <input type="checkbox"/>Согласен на обработку персональных данных
                    </label>
                    </form>
                </div>
                <div className={'okay_div'}>
                    <img className={'okay_img'} src={okay} alt="okay"/>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;