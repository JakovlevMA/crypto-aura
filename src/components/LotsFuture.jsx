import React from 'react';

const LotsFuture = ({ lots }) => {
    let filteredLots;

    if (window.innerWidth <= 1024) {
        filteredLots = lots.filter((lot) => lot.id !==7 && lot.id !== 8)
    } else {
        filteredLots = lots
    }


    return (
        <div className='all_content_future_lots'>
            <h2>Другие аукционы</h2>
            <div className='lots_container'>
                {filteredLots.map((lot) => (
                    <div className='lots_future' key={lot.id}>
                        <div className='top_lot'>
                            <img src={lot.imgLot} alt="lot1" />
                        </div>
                        <div className='buttom_lot'>
                            <div className='img_nickname_all_info'>
                                <div className='img_nickname_all'>
                                    <img src={lot.imgAvatar} alt="avatar1" />
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
            <button className='btn_lots'>Все аукционы</button>
        </div>
    );
};

export default LotsFuture;