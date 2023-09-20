import React from 'react';
import collect from '../img/icons/collections.png'
import smile from '../img/icons/smile.png'
import point from '../img/icons/point.png'
import smiles from '../img/smiles.png'

const TopList = () => {
    return (
        <div className={'all_topList_container'}>
            <div className={'topList_container'}>
                <div className={'topList_container_left'}>
                    <span>Для попадания в топ необходимо:</span>
                        <div className={'icons_and_description'}>
                            <img src={collect} alt="collect"/>
                            <p>Минимум пять опубликованных работ</p>
                        </div>
                        <div className={'icons_and_description'}>
                            <img src={smile} alt="smile"/>
                            <p>Инвайт трём коллегам по цеху</p>
                        </div>
                        <div className={'icons_and_description'}>
                            <img src={point} alt="point"/>
                            <p>Верифицированный аккаунт</p>
                        </div>
                </div>
                <div className={'topList_container_right'}>
                    <img className={'topList_container_right'} src={smiles} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default TopList;