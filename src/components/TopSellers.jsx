import React from 'react';

const TopSellers = ({sellers}) => {
    return (
        <div className={'sellers_container_all'}>
            <div className={'sellers_and_nameBlock'}>
                <h1 className={'tops_sellers'}>Топ Продаж</h1>
                <div className={'sellers_container'}>
                    {sellers.map((seller) => (
                        <div className={'container_sellers'}>
                            <div className={'img_container_seller'}>
                                <img src={seller.img} alt="sellerIMG"/>
                            </div>
                            <div className={'text_sellers'}>
                                <div className={'avatar_and_nickname'}>
                                    <img src={seller.avatarTop} alt="avatarTop"/>
                                    <span className={'nickname_seller'}>{seller.nickname}</span>
                                </div>
                                <h1 className={'nameLot'}>{seller.nameLot}</h1>
                                <div className={'prise_USD_ETH'}>
                                    <h2 className={'priceETH'}>{seller.priceETH}</h2>
                                    <h2 className={'priceUSD'}>{seller.priceUSD}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopSellers;