import React from 'react';
import witcher from '../img/witcher.png'
import dog from '../img/DogAvatar.png'
import clock from '../img/clock.png'
import dot from '../img/dot.png'
const Auction = () => {
    return (
        <div className='all_content_auction'>
            <div className='auctions'>
                    <div className='auction_and_live'>
                        <h1 className='name_auction'>Аукцион</h1>
                        <div className='live_auction'>
                        <img className='dot' src={dot} alt="dot"/>
                            <h3 className='striming_auction'>Live auction</h3>
                        </div>
                    </div>
                <div className='witcher_and_timer'>
                    <div className='container_witcher'>
                    <img className='witcher' src={witcher} alt="witcherIMG"/>
                    </div>
                <div className='timer_price_btn_name_avatar'>
                    <div className='name_avatar'>
                        <img className='avatar' src={dog} alt="DogAvatar"/>
                        <p className='nickname'>Serge_VM222</p>
                    </div>
                    <h2 className='lot'>Witcherrr_3 (xml_t5)</h2>
                    <div className='price_time'>
                        <div className='price_dollars'>
                            <h3 className='price_1'>Ставка:</h3>
                            <p className='price_2'>0.10 ETH</p>
                            <b className='price_3'>$351.24</b>
                        </div>
                        <div className='timer'>
                            <div className='clock_and_timer'>
                                <h3 className='outIn'>Окончание через:</h3>
                                <ul className='numbers'>
                                    <li className='num'>01</li>
                                    <li className='num'>48</li>
                                    <li className='num'>47</li>
                                </ul>
                                <ul className='hours_mins_seconds'>
                                    <li className='all_times'>Час</li>
                                    <li className='all_times'>Мин</li>
                                    <li className='all_times'>Сек</li>
                                </ul>
                            </div>
                            <div className='clock'>
                                <img className='img_clock' src={clock} alt="CLOCK"/>
                            </div>
                        </div>
                    </div>
                    <button className='btn_bid'>Сделать ставку</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Auction;