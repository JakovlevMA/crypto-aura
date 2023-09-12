import React, { useState } from 'react';
import fire from '../img/fire.png';

const NewStickers = ({ stickersLots }) => {
    const [selectedButton, setSelectedButton] = useState(1);
    const [transitionDirection, setTransitionDirection] = useState('');

    const handleButtonClick = (buttonIndex) => {
        if (buttonIndex !== selectedButton) {
            const direction = buttonIndex > selectedButton ? 'right' : 'left';
            setTransitionDirection(direction);
            setTimeout(() => {
                setSelectedButton(buttonIndex);
                setTransitionDirection('');
            }, 300);
        }
    };

    const getFilteredStickers = () => {
        switch (selectedButton) {
            case 1:
                return stickersLots.filter((sticker) => sticker.id >= 1 && sticker.id <= 2);
            case 2:
                return stickersLots.filter((sticker) => sticker.id === 3);
            case 3:
                return stickersLots.filter((sticker) => sticker.id === 4);
            case 4:
                return stickersLots.filter((sticker) => sticker.id >= 5 && sticker.id <= 6);
            case 5:
                return stickersLots.filter((sticker) => sticker.id >= 7 && sticker.id <= 8);
            case 6:
                return stickersLots.filter((sticker) => sticker.id === 9);
            default:
                return stickersLots;
        }
    };

    return (
        <div className='all_container_content'>
            <div className='container_content'>
                <div className='fire_and_name'>
                    <img className='fire' src={fire} alt='fire' />
                    <h1 className='new_stickers'>Новые Стикеры</h1>
                </div>
                <div className={`img_stickers_container_all ${transitionDirection}`}>
                    {getFilteredStickers().map((sticker) => (
                        <div className={'img_stickers_container'} key={sticker.id}>
                            <img className='img_stickers' src={sticker.sticker} alt={`sticker${sticker.id}`} />
                        </div>
                    ))}
                </div>
                <div className='buttons'>
                    <button
                        className={`btns_numbers ${selectedButton === 1 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        1
                    </button>
                    <button
                        className={`btns_numbers ${selectedButton === 2 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        2
                    </button>
                    <button
                        className={`btns_numbers ${selectedButton === 3 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(3)}
                    >
                        3
                    </button>
                    <button
                        className={`btns_numbers ${selectedButton === 4 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(4)}
                    >
                        4
                    </button>
                    <button
                        className={`btns_numbers ${selectedButton === 5 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(5)}
                    >
                        5
                    </button>
                    <button
                        className={`btns_numbers ${selectedButton === 6 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(6)}
                    >
                        6
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewStickers;

