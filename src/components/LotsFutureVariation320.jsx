import React, { useState } from 'react';

const LotsFuture = ({ lots }) => {
    const [selectedButton320, setSelectedButton320] = useState(1);
    const [transitionDirection320, setTransitionDirection320] = useState('');

    const handleButtonClick320 = (buttonIndex) => {
        if (buttonIndex !== selectedButton320) {
            const direction = buttonIndex > selectedButton320 ? 'right' : 'left';
            setTransitionDirection320(direction);
            setTimeout(() => {
                setSelectedButton320(buttonIndex);
                setTransitionDirection320('');
            }, 300);
        }
    };

    const getFilteredLots = (buttonIndex) => {
        return lots.filter((lot) => lot.id === buttonIndex);
    };

    const filteredLots = lots.filter((lot) => {
        return window.innerWidth <= 1024 || (lot.id !== 7 && lot.id !== 8);
    });

    const selectedLots = getFilteredLots(selectedButton320);

    return (
        <div className='all_content_future_lots'>
            <h2>Другие аукционы</h2>
            <div className='lots_container'>
                {selectedLots.map((lot) => (
                    <div className='lots_future' key={lot.id}>
                        <div className='top_lot'>
                            <img src={lot.imgLot} alt='lot1' />
                        </div>
                        <div className='buttom_lot'>
                            <div className='img_nickname_all_info'>
                                <div className='img_nickname_all'>
                                    <img src={lot.imgAvatar} alt='avatar1' />
                                    <h3 className='img_nickname'>{lot.nickName}</h3>
                                </div>
                                <div className='info_lot'>
                                    <h3 className='name_lot'>{lot.nameLot}</h3>
                                    <p className='price_lot'>{lot.price}</p>
                                    <span className='time_lot'>{lot.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='btns_lots_container'>
                {Array.from({ length: 6 }, (_, index) => (
                    <button
                        className={`btns_lots ${selectedButton320 === index + 1 ? 'active' : ''}`}
                        key={index + 1}
                        onClick={() => handleButtonClick320(index + 1)}>
                    </button>
                ))}
            </div>
            <button className='btn_lots'>Все аукционы</button>
        </div>
    );
};

export default LotsFuture;