import React from 'react'
import './styles/App.css'
import Header from "./components/Header";
import Presentations from "./components/Presentations";
import Auction from "./components/Auction";
import LotsFuture from "./components/LotsFuture";
import NewStickers from "./components/NewStickers";
import NewsLetter from "./components/NewsLetter";
import Authors from "./components/Authors";
import TopSellers from "./components/TopSellers";
import TopList from "./components/TopList";
import lot1 from "./img/lots/lot1.png"
import lot2 from "./img/lots/lot2.png"
import lot3 from "./img/lots/lot3.png"
import lot4 from "./img/lots/lot4.png"
import lot5 from "./img/lots/lot5.png"
import lot6 from "./img/lots/lot6.png"
import lot7 from "./img/lots/lot7.png"
import lot8 from "./img/lots/lot8.png"
import avatar1 from "./img/avatars/avatar1.png"
import avatar2 from "./img/avatars/avatar2.png"
import avatar3 from "./img/avatars/avatar3.png"
import avatar4 from "./img/avatars/avatar4.png"
import avatar5 from "./img/avatars/avatar5.png"
import avatar6 from "./img/avatars/avatar6.png"
import avatar7 from "./img/avatars/avatar7.png"
import avatar8 from "./img/avatars/avatar8.png"
import sticker1 from "./img/stickers/sticker1.png"
import sticker2 from "./img/stickers/sticker2.png"
import sticker3 from "./img/stickers/sticker3.png"
import sticker4 from "./img/stickers/sticker4.png"
import sticker5 from "./img/stickers/sticker5.png"
import sticker6 from "./img/stickers/sticker6.png"
import sticker7 from "./img/stickers/sticker7.png"
import sticker8 from "./img/stickers/sticker8.png"
import sticker9 from "./img/stickers/sticker9.png"
import imgTop1 from "./img/imgsTop/imgsTop1.png"
import imgTop2 from "./img/imgsTop/imgsTop2.png"
import imgTop3 from "./img/imgsTop/imgsTop3.png"
import imgTop4 from "./img/imgsTop/imgsTop4.png"
import imgTop5 from "./img/imgsTop/imgsTop5.png"
import imgTop6 from "./img/imgsTop/imgsTop6.png"
import avatarTop1 from "./img/avatarsTop/avatarTop1.png"
import avatarTop2 from "./img/avatarsTop/avatarTop2.png"
import avatarTop3 from "./img/avatarsTop/avatarTop3.png"
import avatarTop4 from "./img/avatarsTop/avatarTop4.png"
import avatarTop5 from "./img/avatarsTop/avatarTop5.png"
import avatarTop6 from "./img/avatarsTop/avatarTop6.png"
import Footer from "./components/Footer";



function App() {
    let lots = [
        {
            id: 1,
            imgLot: lot1,
            imgAvatar: avatar1,
            nickName: 'Frank.Nagval',
            nameLot: 'Alien (green) e_e',
            price: '0.02 ETH',
            time: '03 часа 25 мин 23 сек',
        },{
            id: 2,
            imgLot: lot2,
            imgAvatar: avatar2,
            nickName: 'CPH_777',
            nameLot: 'CoBRRRa',
            price: '0.5 ETH',
            time: '15 мин 03 сек',
        },{
            id: 3,
            imgLot: lot3,
            imgAvatar: avatar3,
            nickName: 'sUpah_kiLLah',
            nameLot: 'Diamonds (4)',
            price: '0.008 ETH',
            time: '23 часа 05 мин 08 сек',
        },{
            id: 4,
            imgLot: lot4,
            imgAvatar: avatar4,
            nickName: 'ttgs',
            nameLot: 'Holofobia-2',
            price: '1.0 ETH',
            time: '01 час 15 мин 55 сек',
        },{
            id: 5,
            imgLot: lot5,
            imgAvatar: avatar5,
            nickName: 'Peppppe22',
            nameLot: 'Baby Yoda 1',
            price: '0.2 ETH',
            time: '01 час 28 мин 11 сек',
        },{
            id: 6,
            imgLot: lot6,
            imgAvatar: avatar6,
            nickName: '1300e1440',
            nameLot: 'alien vs. predator (01)',
            price: '0.09 ETH',
            time: '08 часов 44 мин 43 сек',
        },{
            id: 7,
            imgLot: lot7,
            imgAvatar: avatar7,
            nickName: 'Robert_Wward',
            nameLot: 'IAMDECEPTICON',
            price: '0.1 ETH',
            time: '55 мин 18 сек',
        },{
            id: 8,
            imgLot: lot8,
            imgAvatar: avatar8,
            nickName: 'ttgs',
            nameLot: 'Ghostbusterrrrrrrs',
            price: '0.09 ETH',
            time: '18 мин 12 сек',
        },
    ]

    let stickersLots = [
        {
            id: 1,
            sticker: sticker1,
        },{
            id: 2,
            sticker: sticker2,
        },{
            id: 3,
            sticker: sticker3,
        },{
            id: 4,
            sticker: sticker4,
        },{
            id: 5,
            sticker: sticker5,
        },{
            id: 6,
            sticker: sticker6,
        },{
            id: 7,
            sticker: sticker7,
        },{
            id: 8,
            sticker: sticker8,
        },{
            id: 9,
            sticker: sticker9,
        },

    ]

    let topSellers = [
        {
            id: 1,
            img: imgTop1,
            avatarTop: avatarTop1,
            nickname: 'ttgs',
            nameLot: 'Holofobia1',
            priceETH: '4.70 ETH',
            priceUSD: '($16,873.47)'
        },
        {
            id: 2,
            img: imgTop2,
            avatarTop: avatarTop2,
            nickname: 'Tat_2',
            nameLot: 'Y.EEE',
            priceETH: '3.00 ETH',
            priceUSD: '($10,731.24)'
        },{
            id: 3,
            img: imgTop3,
            avatarTop: avatarTop3,
            nickname: 'Chris22',
            nameLot: 'Baby Joda',
            priceETH: '2.00 ETH',
            priceUSD: '($7,121.04)',
        },{
            id: 4,
            img: imgTop4,
            avatarTop: avatarTop4,
            nickname: 'Oswaald',
            nameLot: 'Infinity_09',
            priceETH: '1.6109 ETH',
            priceUSD: '($5,762.32)',
        },{
            id: 5,
            img: imgTop5,
            avatarTop: avatarTop5,
            nickname: 'Paul-22',
            nameLot: 'Sadsadsad',
            priceETH: '1.50 ETH',
            priceUSD: '($5,365.62)',
        },{
            id: 6,
            img: imgTop6,
            avatarTop: avatarTop6,
            nickname: 'wardxxx',
            nameLot: 'Attntn',
            priceETH: '1.0 ETH',
            priceUSD: '($3,577.08)',
        },
    ]
  return (
    <div className="App">
        <Header/>
        <Presentations/>
        <Auction/>
        <LotsFuture lots = {lots}/>
        <NewStickers stickersLots = {stickersLots}/>
        <NewsLetter/>
        <Authors/>
        <TopSellers sellers = {topSellers}/>
        <TopList/>
        <Footer/>
    </div>
  );
}

export default App;
